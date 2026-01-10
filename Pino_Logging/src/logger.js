//install pino , pino-pretty, pino-http
// npm install --save pino pino-pretty pino-http
// // npm install dotenv --save

const pino = require('pino');

const logger = pino({
  level: process.env.FRAGMENTS_LOG_LEVEL || 'info',
  transport:
    process.env.FRAGMENTS_LOG_LEVEL === 'debug'
      ? {
          target: 'pino-pretty',
          options: { colorize: true },
        }
      : undefined,
});


module.exports = logger;
