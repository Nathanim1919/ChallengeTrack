interface User {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    profilePicture?: string;
    createdAt: Date;
    updatedAt: Date;
    roles: UserRole[]; // Roles to manage permissions (admin, user, etc.)
    preferences: UserPreferences; // User-specific settings or preferences
}

type UserRole = 'admin' | 'user' | 'moderator';

interface UserPreferences {
    notificationsEnabled: boolean;
    theme: 'light' | 'dark';
}
