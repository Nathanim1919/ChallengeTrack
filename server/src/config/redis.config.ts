import {Redis} from 'ioredis';

class RedisConfig {
    public redis: Redis;

    constructor() {
    this.redis = new Redis({
        port: 6379,
        host: 'localhost',
    });
    }

    // save string data to redis
    public async saveStringData(key: string, value: string) {
    return this.redis.set(key, value);
    }

    // get string data from redis
    public async getStringData(key: string) {
    return this.redis.get(key);
    }

    // save object data to redis
    public async saveObjectData(key: string, value: any) {
    return this.redis.set(key, JSON.stringify(value));
    }

    



}
