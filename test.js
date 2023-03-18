import crypto from 'crypto'
import fs from 'fs'

// Get private and public keys 
const privateKey = fs.readFileSync('./private-key.key')
const publicKey = fs.readFileSync('./public-key.key')

const ALGORITHM = 'RSA-SHA256'

const data = "Hello"

// Create signature object
var signer = crypto.createSign(ALGORITHM);

// Update data to create digital signature
signer.update(data);

// Generate digital signature
var signature = signer.sign(privateKey, 'base64');
console.log("signature: ", signature)

// var signature = 'Lyl21J4mIzbe+f5ZUXmZxyt3MA9geuMuXtAOSJtxQ8cLDFikD2gw5zMZ0OT94TnnK9BIafdJCJuD8sw9xH4992eB+ufcTp3fhuRWIqTErIJv+FYOoEc++HifpOsxvYYHD/vIcd1mWutvjgqWg4CZCVRA2zR94x//JT6vgtWDbkfCXe9aEmq7oIWeYORUl0bbNX9I5nWCV0qsDiT3ybOzImOTOys7IkpG83BxrCPWlIozOyBjPjTxndQ8+FI7VoxrIMSyMByWReAzQ4tmtwI7p/584rMCjikRkWXJVPmRrOzkTn/TwVMy5eOuXZh7QI5qIElSg1CzWzkIPQTmDD1J8w=='


/* Create a verifier object  */
var verifier = crypto.createVerify(ALGORITHM);

// Update data to verify using digital signature value 
verifier.update(data);

// verify digital signature
var verified = verifier.verify(publicKey, signature, 'base64');

console.log("verified : ", verified);
