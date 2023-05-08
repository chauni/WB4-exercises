"use strict";

const partCode1 = "ABC:1234-L"
const partCode2 = "XYZ:5678-M";
const partCode3 = "HIJ:91011-XS";

const part3 = parsePartCode(partCode3);
console.log(part3.supplierCode);
console.log(part3.productNumber);
console.log(part3.size);

console.log('------');

const part2 = parsePartCode(partCode2);
console.log(part2.supplierCode);
console.log(part2.productNumber);
console.log(part2.size);

console.log('------');

const part1 = parsePartCode(partCode1);
console.log(part1.supplierCode);
console.log(part1.productNumber);
console.log(part1.size);

function parsePartCode(partCode) {
    const colonPos = partCode.indexOf(":");
    const dashPos = partCode.indexOf("-");

    const supplierCode = partCode.substring(0,colonPos);
    const productNumber = partCode.substring(colonPos + 1, dashPos);
    const size = partCode.substring(dashPos + 1);

    return {
        supplierCode: supplierCode,
        productNumber: productNumber,
        size: size,
    };
}