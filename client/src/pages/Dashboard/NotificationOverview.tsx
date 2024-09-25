import React from "react";
import NotificationOverviewCard from "../../components/cards/NotificationOverviewCard";

const NotificationOverview = () => {
    const notifications = [
        {
            message: "You have a new challenge",
            sentAt: "2 hours ago",
            isRead: false
        },
        {
            message: "You have a new challenge",
            sentAt: "2 hours ago",
            isRead: false
        },
        {
            message: "You have a new challenge",
            sentAt: "2 hours ago",
            isRead: false
        },
        {
            message: "You have a new challenge",
            sentAt: "2 hours ago",
            isRead: false
        },
        {
            message: "You have a new challenge",
            sentAt: "2 hours ago",
            isRead: false
        },
        {
            message: "You have a new challenge",
            sentAt: "2 hours ago",
            isRead: false
        },
    ];
    return (
        <div className="grid items-center">
        <h1 className="grid items-center font-bold px-5">Latest Notification</h1>
        <div className="flex flex-col gap-1 overflow-x-auto h-[300px] px-2">
        {
            notifications.map((notification, index) => (
               <NotificationOverviewCard key={index} notification={notification} />
            ))
        }
        </div>
        </div>
    );
};


export default NotificationOverview;