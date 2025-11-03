export const config = {
  saltRounds: Number(process.env.SALT_ROUNDS ?? 10),
  jwtSecret: process.env.JWT_SECRET || 'defaultSecretKey',
  accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || '60s',
};
