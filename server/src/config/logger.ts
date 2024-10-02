import pino from 'pino';

const logger = pino({
 level: process.env.LOG_LEVEL || 'info',
 transport: process.env.NODE_ENV === 'production' ? 
    { target: 'pino-pretty' } : undefined,
});

export default logger;