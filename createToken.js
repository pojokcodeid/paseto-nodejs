import { V4 as paseto } from "paseto";
import { createPrivateKey } from "crypto";
import "dotenv/config";

const createToken = async (payload) => {
  const privateKeyPem = process.env.PRIVATE_KEY;
  const key = createPrivateKey(privateKeyPem);
  const token = await paseto.sign(payload, key, {
    audience: "user_id",
    issuer: "https://pojokcode.com",
    expiresIn: "2 hours",
  });
  return token;
};

const verfy = async (token) => {
  const privateKeyPem = process.env.PRIVATE_KEY;
  const key = createPrivateKey(privateKeyPem);
  const result = await paseto.verify(token, key);
  return result;
};

export { createToken, verfy };
