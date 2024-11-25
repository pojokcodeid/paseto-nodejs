import { V4 as paseto } from "paseto";

const generate = async () => {
  const keyPair = await paseto.generateKey("public");
  const privateKeyPem = keyPair.export({
    format: 'pem',
    type: 'pkcs8',
  });
  console.log('Private Key (PEM):', privateKeyPem);
}
generate();
