const { readFileSync, writeFileSync } = require("fs")
const { wrapText } = require("esoteric-utility");

const licenseText = readFileSync("LICENSE.txt").toString();
const maxLength = 72;

const wrappedLicense = wrapText(licenseText, maxLength);

writeFileSync("LICENSE.txt", wrappedLicense);
