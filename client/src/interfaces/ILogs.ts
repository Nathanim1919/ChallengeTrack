

export interface ILogs {
    _id: string;
    user: string;    
    challenge: string;
    timestamp: Date;
    details:[string],
    images?: [string]
    days: number;
    createdAt: Date;
}
