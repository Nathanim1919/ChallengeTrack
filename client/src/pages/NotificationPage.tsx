import React from "react";
import BellImage from '../assets/icons/bell.png'


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
    ,
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
    },
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
            <div className="notification-list grid w-[70%] m-auto h-[80vh] overflow-auto py-5">
                {notifications.map((notification, index) => (
                    <div key={index} className="notification-item grid grid-cols-[_.5fr_.5fr] p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                        <div className="notification-content flex items-center gap-5">
                            <img src={BellImage} alt="bell" className="bell-icon w-[2rem]"/>
                            <div className="flex flex-col">
                                <h2 className="font-bold">{notification.content}</h2>
                                <p className="time text-gray-500">{notification.time}</p>
                            </div>
                        </div>
                        <div className="notification-status justify-self-end">
                            {notification.isRead ? (
                                <span className="bg-gray-200 text-[13px] rounded-full px-3 py-1 read">Read</span>
                            ) : (
                                <span className="bg-gray-200 text-[13px] rounded-full px-3 py-1 unread">Unread</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default NotificationPage;