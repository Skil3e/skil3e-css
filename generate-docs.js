const fs = require('fs')

function formatPageSlug(filename) {
    return filename.replace("_", "").replace(".scss", "")
}

function getPrefix(data) {
    let prefixed = [];
    const lines = data.filter(line => line.startsWith("$prefix"));
    lines.forEach(line => {
        const formatted = line.replace(/ /g, '')
            .replace(/\$prefix.*?:/, "")
            .replace(/'/g, '').replace(/"/g, '')
            .replace("!default", "")
            .replace(";", "")
            .replace("\r", "")
        prefixed.push(formatted);
    })
    return prefixed
}

function convertSCSSMapToObj(lines, name, covertToArray, fromKey) {
    const values = lines.filter(line => line.startsWith(name));
    const SASSMap = values[0].slice(values[0].indexOf('('), values[0].lastIndexOf(')') + 1);
    const converted = SASSMap.replace("!default", "")
        .replace("(", "{").replace(")", "}")
        .replace(/'/g, '"')
    const parsed = JSON.parse(converted);

    return Object.entries(parsed).map(([key, val]) => {
        if (covertToArray) {
            return fromKey ? key : val
        }
        return {key, val}
    });
}


function getDefaultValues(data) {
    return convertSCSSMapToObj(data, "$values");
}

function convertLinesToArray(path) {
    return fs.readFileSync(path, 'utf8').split("\n");
}

function getVariables(lines) {
    const start = lines.filter(line => line.includes("/* Start Variables */"));
    const end = lines.filter(line => line.includes("/* End Variables */"));
    const startIndex = lines.indexOf(start[0]);
    const endIndex = lines.indexOf(end[0]) - 2;
    return lines.splice(startIndex, endIndex).join("")
        .replace("/* Start Variables */", "")
        .replace("/* End Variables */\r", "")
        .replace(/ !default;/g, ',')
        .replace(/;/g, ',')
}

function convertFileToJSON(filename, page, prefix, defaultValues, withPosition, variables) {
    return JSON.stringify({
        filename: filename,
        utility: page,
        prefix: prefix,
        divider: "--",
        values: defaultValues,
        withPosition: withPosition,
        variables: variables ?? []
    });
}

function writeFIleToDocs(path, data, callBack) {
    fs.writeFile(path, data, function (err) {
        if (err) return console.log(err);
        callBack && callBack()
    });
}

//--------------------------------------------------------------//
//Generate docs JSON files
//--------------------------------------------------------------//
fs.readdir(process.cwd() + "/src/utilities", function (err, filenames) {
    if (err) {
        console.log(err)
        return;
    }
    filenames.forEach(function (filename) {
        const readPath = `${process.cwd()}/src/utilities/${filename}`;
        const writePath = `${process.cwd()}/docs/src/generated/${formatPageSlug(filename)}.json`
        const lines = convertLinesToArray(readPath);
        const withPos = lines.join().includes("makeUtilPos") || lines.join().includes("makeBorder") || lines.join().includes("makeBorderRadius")

        if (filename === "_colors.scss" || filename === "_reduce-motion.scss" || filename === "_screen-readers.scss") {
            console.log("skipped: ", filename)
            return null;
        }
        if (filename === "_margin.scss" || filename === "_padding.scss") {
            const settingsLines = convertLinesToArray(`${process.cwd()}/src/_settings.scss`);
            const data = convertFileToJSON(filename, formatPageSlug(filename), getPrefix(lines), convertSCSSMapToObj(settingsLines, "$spacersDefault"), withPos, getVariables(lines));
            writeFIleToDocs(writePath, data, function () {
                console.log(`Generated: ${formatPageSlug(filename)}.json`)
            })
            return;
        }
        if (filename === "_positions-placement.scss") {
            console.log("skipped: ", filename)
            const data = convertFileToJSON(
                filename,
                formatPageSlug(filename),
                convertSCSSMapToObj(lines, "$direction", true),
                getDefaultValues(lines),
                withPos,
                getVariables(lines))
            writeFIleToDocs(writePath, data, function () {
                console.log(`Generated: ${formatPageSlug(filename)}.json`)
            })
            return null;
        }

        const data = convertFileToJSON(filename, formatPageSlug(filename), getPrefix(lines), getDefaultValues(lines), withPos, getVariables(lines));
        writeFIleToDocs(writePath, data, function () {
            console.log(`Generated: ${formatPageSlug(filename)}.json`)
        })
    });
});

