/* eslint-disable no-console */
const fs = require('fs');

const oldPaths = ['.env.template', 'src/util/blacklist/_blacklist.json.template'];
oldPaths.forEach((path) => {
    if (!fs.existsSync(path)) {
        console.warn(
            `File ${path} does not exist. If you have NOT run this command before, you may need to repair your installation.`
        );

        return;
    }

    const newPath = path.substring(0, path.indexOf('.template'));
    if (fs.existsSync(newPath)) {
        console.warn(`File '${newPath}' already exists.`);
    } else {
        fs.copyFileSync(newPath, path, fs.constants.COPYFILE_EXCL);
    }
});
