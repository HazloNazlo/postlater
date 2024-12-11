import { addMonths, subMonths, format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameDay, addDays, addWeeks } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';

const MOSCOW_TIMEZONE = 'Europe/Moscow';

export const getMoscowDate = (date: Date = new Date()): Date => {
  return utcToZonedTime(date, MOSCOW_TIMEZONE);
};

export const getCalendarDays = (currentDate: Date, view: 'month' | 'week' | 'day'): Date[] => {
  const moscowDate = getMoscowDate(currentDate);
  
  switch (view) {
    case 'month': {
      const monthStart = startOfMonth(moscowDate);
      const monthEnd = endOfMonth(moscowDate);
      const calendarStart = startOfWeek(monthStart);
      const calendarEnd = endOfWeek(monthEnd);
      return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
    }
    case 'week': {
      const weekStart = startOfWeek(moscowDate);
      return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
    }
    case 'day': {
      return [moscowDate];
    }
  }
};

export const formatMonthYear = (date: Date): string => {
  const moscowDate = getMoscowDate(date);
  return format(moscowDate, 'MMMM yyyy');
};

export const getNextMonth = (date: Date): Date => {
  return addMonths(date, 1);
};

export const getPreviousMonth = (date: Date): Date => {
  return subMonths(date, 1);
};

export const isCurrentMonth = (date: Date, currentMonth: Date): boolean => {
  return format(date, 'M') === format(currentMonth, 'M');
};

export const isToday = (date: Date): boolean => {
  const moscowToday = getMoscowDate();
  return isSameDay(date, moscowToday);
};

export const getNextDate = (date: Date, view: 'month' | 'week' | 'day'): Date => {
  switch (view) {
    case 'month':
      return addMonths(date, 1);
    case 'week':
      return addWeeks(date, 1);
    case 'day':
      return addDays(date, 1);
  }
};

export const getPreviousDate = (date: Date, view: 'month' | 'week' | 'day'): Date => {
  switch (view) {
    case 'month':
      return subMonths(date, 1);
    case 'week':
      return addWeeks(date, -1);
    case 'day':
      return addDays(date, -1);
  }
};