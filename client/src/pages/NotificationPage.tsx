import React from "react";


const NotificationPage = () => {
    const notifications = [
        {
            content:"You have a new challenge invitation",
            time: "2 hours ago",
            isRead: false,
        },
        {
            content:"congratulations! You have completed the 30-day fitness challenge",
            time: "2 hours ago",
            isRead: true,
        },
        {
            content: "congratulation! You have completed half way of the 30-day fitness challenge",
            time: "2 hours ago",
            isRead: true,
        },
        {
            content:"Your Challenge has been approved",
            time: "2 hours ago",
            isRead: true,
        }
    ];


    return (
        <div className="notification-page">
            <div className="notification-header bg-black text-white p-5 grid items-center justify-center">
                <h1 className="text-3xl font-bold">Notifications</h1>
            </div>
            <div className="notification-list grid items-center justify-center gap-5">
                {notifications.map((notification, index) => (
                    <div key={index} className="notification-item grid grid-cols-2">
                        <div className="notification-content">
                            <p>{notification.content}</p>
                            <p className="time">{notification.time}</p>
                        </div>
                        <div className="notification-status">
                            {notification.isRead ? (
                                <span className="read">Read</span>
                            ) : (
                                <span className="unread">Unread</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default NotificationPage;