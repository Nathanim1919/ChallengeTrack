// utils/validationUtils.ts
import { body, validationResult } from 'express-validator';
import { NextFunction, Response, Request } from "express";

// validate user data before saving using express-validator
export const validateUserData = [
    body('email')
        .isEmail().withMessage('Invalid email address')
        .normalizeEmail(),
    body('username')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long')
        .matches(/^[a-zA-Z0-9_]+$/).withMessage('Username can only contain letters, numbers, and underscores'),
    body('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/\d/).withMessage('Password must contain at least one number')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
    body('profilePicture')
        .optional()
        .isURL().withMessage('Invalid URL'),
    body('role')
        .isIn(['admin', 'user']).withMessage('Invalid role')
];

export const validateLoginData = [
    body('identifier')
        .isLength({ min: 3 }).withMessage('Identifier must be at least 3 characters long'),
    body('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
];

export const validateUpdateUserData = [
    body('email')
        .optional()
        .isEmail().withMessage('Invalid email address')
        .normalizeEmail(),
    body('username')
        .optional()
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long')
        .matches(/^[a-zA-Z0-9_]+$/).withMessage('Username can only contain letters, numbers, and underscores'),
    body('password')
        .optional()
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/\d/).withMessage('Password must contain at least one number')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
    body('profilePicture')
        .optional()
        .isURL().withMessage('Invalid URL'),
    body('role')
        .optional()
        .isIn(['admin', 'user']).withMessage('Invalid role')
];

// validate login data before authenticating using express-validator
export const validate = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(400).json({ errors: errors.array() });
};
