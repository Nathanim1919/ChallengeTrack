import React from "react";
import { MdCircleNotifications } from "react-icons/md";


interface NotificationOverviewCardProps {
    notification: {
        sentAt:string,
        message:string,
        isRead:boolean,
    };
}

const NotificationOverviewCard:React.FC<NotificationOverviewCardProps> = ({notification}) => {
    return (
        <div className="flex items-center justify-between py-1 px-3 border-b border-gray-300 cursor-pointer">

            <div className="flex items-center gap-3">
                <MdCircleNotifications className="text-3xl"/>
                <div className="flex flex-col">
                    <h3 className="m-0 font-bold text-[13px]">{notification.message}</h3>
                    <p className="m-0 text-gray-500 text-[13px]">{notification.sentAt}</p>
                </div>
            </div>
            <div>{
                notification.isRead ? <p className="text-green-500 text-[13px]">Read</p> : <p className="text-red-500 text-[13px]">Unread</p>
                }
                {/* <button className="bg-green-500 text-[13px] text-white rounded-lg px-2 py-1">Mark as read</button> */}
            </div>
        </div>
    );
};


export default NotificationOverviewCard;