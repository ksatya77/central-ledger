const RC = require('rc')('CLEDG', require('../../config/default.json'))

module.exports = {
  HOSTNAME: RC.HOSTNAME.replace(/\/$/, ''),
  PORT: RC.PORT,
  DATABASE_URI: RC.DATABASE_URI,
  AMOUNT: RC.AMOUNT,
  ENABLE_TOKEN_AUTH: RC.ENABLE_TOKEN_AUTH === 'true',
  ENABLE_BASIC_AUTH: RC.ENABLE_BASIC_AUTH === 'true',
  LEDGER_ACCOUNT_NAME: RC.LEDGER_ACCOUNT_NAME,
  LEDGER_ACCOUNT_PASSWORD: RC.LEDGER_ACCOUNT_PASSWORD,
  ADMIN_SECRET: RC.ADMIN_SECRET,
  ADMIN_KEY: RC.ADMIN_KEY,
  ADMIN_PORT: RC.ADMIN_PORT,
  TOKEN_EXPIRATION: RC.TOKEN_EXPIRATION,
  EXPIRES_TIMEOUT: RC.EXPIRES_TIMEOUT,
  SIDECAR: RC.SIDECAR,
  SIDECAR_DISABLED: RC.SIDECAR.DISABLED === 'true'
}
