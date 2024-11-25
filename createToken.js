import { V4 as paseto } from "paseto";
import { createPrivateKey } from 'crypto';
import 'dotenv/config';

const createToken = async () => {
  const privateKeyPem = process.env.PRIVATE_KEY;
  const key = createPrivateKey(privateKeyPem)
  const payload = {
    'user_id': '00001',
    'name': 'Pojok Code',
    'age': 20
  }
  const token = await paseto.sign(payload, key, {
    audience: 'user_id',
    issuer: 'https://op.example.com',
    expiresIn: '2 hours'
  });
  console.log(token);
}

createToken();