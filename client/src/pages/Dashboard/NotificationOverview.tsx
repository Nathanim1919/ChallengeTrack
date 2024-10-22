import React from "react";
import NotificationOverviewCard from "../../components/cards/NotificationOverviewCard";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";

const NotificationOverview = () => {
  const notifications = [
    {
      message: "You have a new challenge",
      sentAt: "2 hours ago",
      isRead: false,
    },
    {
      message: "You have a new challenge",
      sentAt: "2 hours ago",
      isRead: false,
    },
    {
      message: "You have a new challenge",
      sentAt: "2 hours ago",
      isRead: false,
    },
    {
      message: "You have a new challenge",
      sentAt: "2 hours ago",
      isRead: false,
    },
    {
      message: "You have a new challenge",
      sentAt: "2 hours ago",
      isRead: false,
    },
  ];
  return (
    <div className="grid items-center">
      <div className="flex justify-between items-center">
        <h1 className="flex items-center gap-1 p-2 font-bold">
          <IoMdNotificationsOutline className="text-2xl" />
          Latest Notifications
        </h1>
        <IoArrowForwardOutline className="w-6 h-6 p-1 rounded-full bg-gray-300 grid place-items-center cursor-pointer hover:bg-gray-100"/>
      </div>
      <div className="flex flex-col gap-1 overflow-x-auto h-[300px]">
        {notifications.map((notification, index) => (
          <NotificationOverviewCard key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationOverview;
