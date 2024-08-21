interface Notification {
    id: string;
    recipientId: string; // User who receives the notification
    type: NotificationType;
    message: string;
    createdAt: Date;
    read: boolean;
}

type NotificationType = 'challenge-update' | 'leaderboard-update' | 'system';
