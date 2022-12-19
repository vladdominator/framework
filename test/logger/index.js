import log from 'mocha-logger';

const logger = {
  info: log.log,
};
Object.freeze(logger);

export {logger};
