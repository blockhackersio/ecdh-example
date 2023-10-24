import {
  bytesToHex,
  bytesToNumberBE,
  numberToHexUnpadded,
} from "@noble/curves/abstract/utils";
import { ProjPointType } from "@noble/curves/abstract/weierstrass";
import { secp256k1 } from "@noble/curves/secp256k1";
import assert = require("assert");

let pointToHex = (p: ProjPointType<bigint>) =>
  "0x" + bytesToHex(p.toRawBytes(false).slice(1));

let a = bytesToNumberBE(secp256k1.utils.randomPrivateKey());
let A = secp256k1.ProjectivePoint.BASE.multiply(a);

let b = bytesToNumberBE(secp256k1.utils.randomPrivateKey());
let B = secp256k1.ProjectivePoint.BASE.multiply(b);

console.log("PublicKeys", {
  A: pointToHex(A),
  B: pointToHex(B),
});

console.log("PrivateInfo", {
  a: "0x" + numberToHexUnpadded(a),
  b: "0x" + numberToHexUnpadded(b),
});

let S_a = B.multiply(a).x;
let S_b = A.multiply(b).x;

assert(S_a === S_b, "Error: Shared secrets must match");

console.log("SharedSecret", {
  S: "0x" + numberToHexUnpadded(S_a),
});
