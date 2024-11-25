import { V4 as paseto } from "paseto";
import { createPrivateKey } from 'crypto';
import 'dotenv/config';

const verfy = async () => {
  const privateKeyPem = process.env.PRIVATE_KEY;
  const key = createPrivateKey(privateKeyPem)
  const token = "v4.public.eyJ1c2VyX2lkIjoiMDAwMDEiLCJuYW1lIjoiUG9qb2sgQ29kZSIsImFnZSI6MjAsImlhdCI6IjIwMjQtMTEtMjVUMTA6MzY6MTMuODY5WiIsImV4cCI6IjIwMjQtMTEtMjVUMTI6MzY6MTMuODY5WiIsImF1ZCI6InVzZXJfaWQiLCJpc3MiOiJodHRwczovL29wLmV4YW1wbGUuY29tIn0oKPUdAyawb_c7TqwA6PiXPB58Vo4sOyM9pUBvLa9cid6smn-6H-78R_1lFlVjsO6xGxV8TMcth_xG_o8N9i4C";
  const result = await paseto.verify(token, key)
  console.log(result)
}
verfy()
