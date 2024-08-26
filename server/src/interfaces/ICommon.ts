interface Pagination {
    page: number;
    limit: number;
    totalPages: number;
    totalItems: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    message?: string;
    errorCode?: string;
    meta?: {
        total?: number;
        count?: number;
        [key: string]: any;
    };
}
