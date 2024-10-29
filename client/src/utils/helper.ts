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


export function getCurrentDayNumber(startDate: Date, duration: number): number {
    const currentDate: Date = new Date();

    // Ensure the start date is a Date object
    startDate = new Date(startDate);

    // Check if the challenge has started
    if (currentDate < startDate) {
      // Challenge has not started yet
      return 0; // or any indicator that the challenge hasn't started
    }

    // Calculate the difference in time (in milliseconds)
    const diffTime: number = currentDate.getTime() - startDate.getTime();

    // Calculate the difference in days
    const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include the start day

    // alert(diffDays);

    // Ensure the current day does not exceed the challenge duration
    return Math.min(diffDays, duration);
  }