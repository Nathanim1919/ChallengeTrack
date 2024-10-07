export const calculateDaysLeft = (startDate: Date, endDate: Date) => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
};


export const getFormattedDate = (date: Date) => {
    return new Date(date).toDateString();
};


// const formattedDate = date.toLocaleDateString('en-US', {
//     weekday: 'short',  // Mon
//     year: 'numeric',   // 2024
//     month: 'short',    // Sep
//     day: 'numeric'     // 30
//   });