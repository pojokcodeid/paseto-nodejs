import { V4 as paseto } from "paseto";
import { createPrivateKey } from 'crypto';

(async () => {
  // ---- ini part untuk generate key -----
  // -----Generate a key pair for the 'public' purpose
  // const keyPair = await paseto.generateKey("public");

  // -----Export the private key
  // const privateKeyPem = keyPair.export({
  //   format: 'pem',
  //   type: 'pkcs8',
  // });
  // console.log('Private Key (PEM):', privateKeyPem);

  // ---- par untuk generate token -----
  const privateKeyPem = `
-----BEGIN PRIVATE KEY-----
MC4CAQAwBQYDK2VwBCIEIBu0CXPHGYxXmasJ4FIuVUMIt4bUhPXOkF2+zdgL2/fH
-----END PRIVATE KEY-----
`;
  const key = createPrivateKey(privateKeyPem)
  console.log(key)
  const payload = {
    'urn:example:claim': 'foo'
  }
  const token = await paseto.sign(payload, key, {
    audience: 'urn:example:client',
    issuer: 'https://op.example.com',
    expiresIn: '2 hours'
  });
  console.log(token);
  // ---- ini part untuk verify token -----
  const result = await paseto.verify(token, key, {
    audience: 'urn:example:client',
    issuer: 'https://op.example.com',
    clockTolerance: '1 min'
  })
  console.log(result)
})();
