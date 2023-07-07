// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const CryptoJS = require("crypto-js");

const claveSecreta = process.env.KEY;

const textoPlano = process.env.PASSWORD;

export default function handler(req, res) {
  // Encriptar la contraseña

  const textoEncriptado = CryptoJS.AES.encrypt(
    textoPlano,
    claveSecreta
  ).toString();

  res.status(200).json({ password: textoEncriptado });
}
