import { format, intervalToDuration, differenceInSeconds } from 'date-fns';
import { DATE_FORMAT } from '../enums';

export class DateUtils{

    public static formatTime(seconds: number): string {
        const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
        const pad = (n: number = 0) => String(n).padStart(2, '0');
        return `${pad(duration.hours)}:${pad(duration.minutes)}:${pad(duration.seconds)}`;
    }

    public static now(): string {
        return format(new Date(), DATE_FORMAT.ISO08601);
    }

    public static getDiff(fromDate: string, toDate?: string): number {
        const from = new Date(fromDate);
        const to = toDate ? new Date(toDate) : new Date();
        return differenceInSeconds(to, from);
    }
    
}