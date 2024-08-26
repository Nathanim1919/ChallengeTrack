import {ApiResponse} from "../interfaces/ICommon";

export const formatResponse = <T>(data: T, message?: string, meta?: any): ApiResponse<T> => {
    return {
        success: true,
        data,
        message,
        meta,
    };
};

export const formatError = <T>(message: string, errorCode?: string, meta?: any): ApiResponse<T> => {
    return {
        success: false,
        data: null,
        message,
        errorCode,
        meta,
    };
};
