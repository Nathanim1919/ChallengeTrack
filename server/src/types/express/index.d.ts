// src/types/express/index.d.ts
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    userId?: string;
  }
}