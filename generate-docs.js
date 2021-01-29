const fs = require('fs')

function formatPageSlug(filename) {
    return filename.replace("_", "").replace(".scss", "")
}

function getDefaultValues(data) {
    const val = data.filter(line => line.startsWith("$values"));
    const final = val[0].replace(/ /g, '')
        .replace("$values:", "")
        .replace("!default", "")
        .replace(";", "")
        .replace("(", "{").replace(")", "}")
        .replace("\r", "")
        .replace(/'/g, '"');
    return JSON.parse(final);
}

function getPrefix(data) {
    const line = data.filter(line => line.startsWith("$prefix"));
    return line[0].replace(/ /g, '').replace("$prefix:", "").replace(/'/g, '').replace(/"/g, '')
        .replace("!default", "")
        .replace(";", "")
        .replace("\r", "")
}

function convertFileForDocs(path, filename) {
    const lines = fs.readFileSync(process.cwd() + path + filename, 'utf8').split("\n");
    const data = JSON.stringify({
        page: formatPageSlug(filename),
        prefix: getPrefix(lines),
        defaultValues: getDefaultValues(lines)
    });

    fs.writeFile(`${process.cwd()}/docs/src/generated/${formatPageSlug(filename)}.json`, data, function (err) {
        if (err) return console.log(err);
        console.log(`Generated ${formatPageSlug(filename)}.json`);
    });
}

fs.readdir(process.cwd() + "/src/utilities", function (err, filenames) {
    if (err) {
        console.log(err)
        return;
    }
    filenames.forEach(function (filename) {
        if (filename === "_align.scss"
            || filename === "_colors.scss"
            || filename === "_font-size.scss"
            || filename === "_justify.scss"
            || filename === "_margin.scss"
            || filename === "_padding.scss"
            || filename === "_positions-placement.scss"
            || filename === "_reduce-motion.scss"
            || filename === "_screen-readers.scss") {
            console.log("skipped: ", filename)
            return null;
        }
        convertFileForDocs("/src/utilities/", filename);
    });
});


