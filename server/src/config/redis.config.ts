import {Redis} from 'ioredis';

class RedisConfig {
    public redis: Redis;

    private static instance: RedisConfig;

    constructor() {
        this.redis = new Redis({
            port: 6379,
            host: 'localhost',
        });
    }

    public static getInstance(): RedisConfig {
        if (!RedisConfig.instance) {
            RedisConfig.instance = new RedisConfig();
        }
        return RedisConfig.instance;
    }

    // save string data to redis
    public async saveStringData(key: string, value: string) {
        return this.redis.set(key, value);
    }

    // save wiht expiration
    public async saveStringDataWithExpiration(key: string, value: string, expiration: number) {
        return this.redis.set(key, value, 'EX', expiration);
    }

    // get string data from redis
    public async getStringData(key: string) {
        return this.redis.get(key);
    }

    // delete key
    public async deleteKey(key: string) {
        return this.redis.del(key);
    }

    // save object data to redis
    public async saveObjectData(key: string, value: any) {
        return this.redis.set(key, JSON.stringify(value));
    }

    // get object data from redis
    public async getObjectData(key: string) {
        const data = await this.redis.get(key);
        return data ? JSON.parse(data) : null;
    }

    public async incr(key: string) {
        return this.redis.incr(key);
    }
}


export default RedisConfig.getInstance();
