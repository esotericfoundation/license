const { readFileSync, writeFileSync } = require("fs");
const { wrapText } = require("esoteric-utility");

const licenseText = readFileSync("Esoteric Foundation Public License.txt").toString();
const maxLength = 71;

const wrappedLicense = wrapText(licenseText, maxLength, /(?<=^\s*)((\d+)|([a-z])|m{0,4}(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3}))\. /);

writeFileSync("Esoteric Foundation Public License.txt", wrappedLicense);
