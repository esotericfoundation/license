const { readFileSync, writeFileSync } = require("fs")
const { wrapText } = require("esoteric-utility");

const licenseText = readFileSync("LICENSE.txt").toString();
const maxLength = 71;

const wrappedLicense = wrapText(licenseText, maxLength, /(?<=^\s*)((\d+)|([a-z]))\. /);

writeFileSync("LICENSE.txt", wrappedLicense);
