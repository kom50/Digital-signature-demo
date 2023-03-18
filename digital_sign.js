import crypto from 'crypto'
import fs from 'fs'


// Using Hashing Algorithm
const algorithm = "SHA256";

// private key and public key
const publicKey = fs.readFileSync('./public-key.key')
const privateKey = fs.readFileSync('./private-key.key')

const data = "HELLO"

// Sign the data and returned signature in buffer
const digital_sign = crypto.sign(algorithm, data, privateKey);

// Verifying digital signature
const isVerified = crypto.verify(algorithm, data, publicKey, digital_sign);


// Printing the result
console.log(`Is signature verified: ${isVerified}`);
