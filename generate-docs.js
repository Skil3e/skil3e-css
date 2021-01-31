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

function convertSCSSMapToObj(lines, name) {
    const values = lines.filter(line => line.startsWith(name));
    const final = values[0].replace(/ /g, '')
        .replace(`${name}:`, "")
        .replace("!default", "")
        .replace(";", "")
        .replace("(", "{").replace(")", "}")
        .replace("\r", "")
        .replace(/'/g, '"')
    // .replace(/""/, "\"_\"");
    const parsed = JSON.parse(final);
    return Object.entries(parsed).map(([key, val]) => {
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
    const index = lines.filter(line => line.startsWith("@include"))
    lines.length = lines.indexOf(index[0]);
    const final = lines.filter(line => !line.startsWith("@use"))
    return final.join("").replace( / !default;/g, "," );
}

function convertFileToJSON(filename, page, prefix, defaultValues, variables) {
    return JSON.stringify({
        filename: filename,
        utility: page,
        prefix: prefix,
        divider: "--",
        values: defaultValues,
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

        if (filename === "_colors.scss" || filename === "_reduce-motion.scss" || filename === "_screen-readers.scss") {
            console.log("skipped: ", filename)
            return null;
        }
        if (filename === "_margin.scss" || filename === "_padding.scss") {
            const settingsLines = convertLinesToArray(`${process.cwd()}/src/_settings.scss`);
            const data = convertFileToJSON(filename, formatPageSlug(filename), getPrefix(lines), convertSCSSMapToObj(settingsLines, "$spacersDefault"), getVariables(lines));
            writeFIleToDocs(writePath, data, function () {
                console.log(`Generated: ${formatPageSlug(filename)}.json`)
            })
            return;
        }
        if (filename === "_positions-placement.scss") {
            console.log("skipped: ", filename)
            return null;
        }

        const data = convertFileToJSON(filename, formatPageSlug(filename), getPrefix(lines), getDefaultValues(lines), getVariables(lines));
        writeFIleToDocs(writePath, data, function () {
            console.log(`Generated: ${formatPageSlug(filename)}.json`)
        })
    });
});

