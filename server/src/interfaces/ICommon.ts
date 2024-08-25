type UUID = string // alias for IDs


interface Pagination {
    page: number;
    limit: number;
    totalPages: number;
    totalItems: number;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string
}
