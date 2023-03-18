# Digital-signature-demo

### import modules and get public/private keys data

```
import crypto from 'crypto'
import fs from 'fs'

// Get private and public keys 
const privateKey = fs.readFileSync('./private-key.key')
const publicKey = fs.readFileSync('./public-key.key')
```


### How to create digital signature?
```
const ALGORITHM = 'RSA-SHA256'
const data = "Hello"

// Create signature object
var signer = crypto.createSign(ALGORITHM);

// Update data to create digital signature
signer.update(data);

// Generate digital signature
var signature = signer.sign(privateKey, 'base64');`
```
### How to verify data with digital signature?

```
// Create a verifier object 
var verifier = crypto.createVerify(ALGORITHM);

// Update data to verify using digital signature value 
verifier.update(data);

// verify digital signature
var verified = verifier.verify(publicKey, signature, 'base64');
console.log("verified : ", verified);

```
