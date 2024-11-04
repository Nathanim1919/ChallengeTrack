import { IChallenge } from "../interfaces/IChallenge";
import { ChallengeStatus } from "./constants";

export class ChallengeSpecificHelper {
  static getChallengeStatus = (startDate: Date, duration: number) => {
    if (
      ChallengeSpecificHelper.isChallengeEnded(
        startDate,
        duration
      )
    ) {
      return ChallengeStatus.ENDED;
    }
    if (
      ChallengeSpecificHelper.isChallengeOngoing(
        startDate,
        duration
      )
    ) {
      return ChallengeStatus.ONGOING;
    }
    if (
      ChallengeSpecificHelper.isChallengeStartedDateisInTheNext24Hours(
        startDate
      )
    ) {
      return ChallengeStatus.ABOUT_TO_START;
    }
    if (ChallengeSpecificHelper.isChallengeUpcoming(startDate)) {
      return ChallengeStatus.UPCOMING;
    }
    return "Unknown";
  };

  static isChallengeStartedDateisInTheNext24Hours = (startDate: Date) => {
    const currentDate: Date = new Date();
    startDate = new Date(startDate);
    const diffTime: number = startDate.getTime() - currentDate.getTime();
    const diffHours: number = Math.floor(diffTime / (1000 * 60 * 60));
    return diffHours <= 24;
  };

  static isChallengeEnded = (startDate: Date, duration: number) => {
    const currentDate: Date = new Date();
    startDate = new Date(startDate);
    const diffTime: number = currentDate.getTime() - startDate.getTime();
    const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays > duration;
  };

  static isChallengeOngoing = (startDate: Date, duration: number) => {
    const currentDate: Date = new Date();
    startDate = new Date(startDate);
    const diffTime: number = currentDate.getTime() - startDate.getTime();
    const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays <= duration;
  };

  static isChallengeUpcoming = (startDate: Date) => {
    const currentDate: Date = new Date();
    startDate = new Date(startDate);
    return currentDate < startDate;
  };

  static isChallengeStarted = (startDate?: Date) => {
    if (!startDate) return false;
    const currentDate: Date = new Date();
    startDate = new Date(startDate);
    return currentDate >= startDate;
  };


}

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

export const isChallengeEnded = (startDate: Date, duration: number) => {
  const currentDate: Date = new Date();
  startDate = new Date(startDate);
  const diffTime: number = currentDate.getTime() - startDate.getTime();
  const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return diffDays > duration;
};

export const isChallengeOngoing = (startDate: Date, duration: number) => {
  const currentDate: Date = new Date();
  startDate = new Date(startDate);
  const diffTime: number = currentDate.getTime() - startDate.getTime();
  const diffDays: number = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
  return diffDays <= duration;
};

export const isTodayIsStartDate = (startDate: Date) => {
  const currentDate: Date = new Date();
  startDate = new Date(startDate);
  return currentDate.toDateString() === startDate.toDateString();
};

export const isChallengeUpcoming = (startDate: Date) => {
  const currentDate: Date = new Date();
  startDate = new Date(startDate);
  return currentDate < startDate;
};

export const isChallengeStarted = (startDate: Date) => {
  const currentDate: Date = new Date();
  startDate = new Date(startDate);
  return currentDate >= startDate;
};

export const getChallengeStatus = (challenge: IChallenge) => {
  if (isChallengeEnded(challenge.startDate, challenge.duration)) {
    return "Ended";
  }
  if (isChallengeOngoing(challenge.startDate, challenge.duration)) {
    return "Ongoing";
  }
  if (isChallengeUpcoming(challenge.startDate)) {
    return "Upcoming";
  }
  return "Unknown";
};
