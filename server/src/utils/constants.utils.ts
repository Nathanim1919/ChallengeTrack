export const RedisKeyPrefixes = {
    PAGE_VIEWS_COUNT: "pv_count:",                                                 // Stores page view counts per URL or page
    USER: "user:",                                                                 // User information (general profile data)
    USER_SESSIONS: "user_sessions:",                                               // User session information (active sessions)
    ACCESS_TOKEN: "auth:access_token:",                                            // Access tokens
    REFRESH_TOKEN: "auth:refresh_token:",                                          // Refresh tokens
    FORGOT_PASSWORD: "auth:forgot_password:",                                      // Forgot password tokens
    VERIFY_EMAIL: "auth:verify_email:",                                            // Email verification tokens
    CHALLENGE: "challenge:",                                                       // General challenge information
    CHALLENGE_USER: "challenge:user:",                                             // User-specific challenge data (progress, participation)
    CHALLENGE_USER_TASKS: "challenge:user_tasks:",                                 // Tasks for challenges assigned to users
    CHALLENGE_USER_TASKS_COMPLETED: "challenge:user_tasks_completed:",             // Completed tasks by user
    CHALLENGE_USER_TASKS_COMPLETED_COUNT: "challenge:user_tasks_completed_count:", // Count of completed tasks by user
    CHALLENGE_USER_TASKS_COMPLETED_DATE: "challenge:user_tasks_completed_date:",   // Date of completed tasks
    LEADERBOARD: "leaderboard:global:",                                            // Global leaderboard data
    CHALLENGE_LEADERBOARD: "leaderboard:challenge:",                               // Challenge-specific leaderboard data
    ACHIEVEMENT: "achievement:",                                                   // User achievements
    ACHIEVEMENT_PROGRESS: "achievement:progress:",                                 // Progress towards achievements
    NOTIFICATION: "notification:",                                                 // Notifications sent to users
    RATE_LIMIT: "rate_limit:",                                                     // Rate limiting for specific actions (e.g., API requests)
    CACHE_VERSION: "cache_version:",                                               // Versioning for cached items to invalidate old data
    SETTINGS: "settings:",                                                         // Cached settings for the application or users
};
