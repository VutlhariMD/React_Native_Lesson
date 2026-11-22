import * as Crypto from 'expo-crypto';

const toHex = (bytes: Uint8Array): string =>
  Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');


export async function generateSalt(): Promise<string> {
  const bytes = await Crypto.getRandomBytesAsync(16);
  return toHex(bytes);
}


export async function hashPassword(password: string, salt: string): Promise<string> {
  return Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    `${salt}:${password}`
  );
}