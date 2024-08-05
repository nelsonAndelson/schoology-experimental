import crypto from "crypto";

export function generateOAuthHeader(
  consumerKey: string,
  consumerSecret: string
): string {
  const oauthToken = "";
  const oauthNonce = crypto.randomBytes(16).toString("hex");
  const oauthTimestamp = Math.floor(Date.now() / 1000);
  const oauthSignatureMethod = "PLAINTEXT";
  const oauthVersion = "1.0";
  const oauthSignature = `${consumerSecret}&`;

  return `OAuth realm="Schoology API", oauth_consumer_key="${consumerKey}", oauth_token="${oauthToken}", oauth_nonce="${oauthNonce}", oauth_timestamp="${oauthTimestamp}", oauth_signature_method="${oauthSignatureMethod}", oauth_version="${oauthVersion}", oauth_signature="${encodeURIComponent(
    oauthSignature
  )}"`;
}
