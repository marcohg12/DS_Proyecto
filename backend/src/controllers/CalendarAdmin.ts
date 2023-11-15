import { CalendarEvent } from "../models/CalendarEvent";
import { CalendarDAO } from "../daos/CalendarDAO";

class CalendarAdmin {

  private calendarDao : CalendarDAO  = new CalendarDAO();

  constructor() {}

  public async registerEvent(event: CalendarEvent) {
    return this.calendarDao.registerEvent(event);
  }

  public async updateEvent(event: CalendarEvent) {
    return this.calendarDao.updateEvent(event);
  }

  public async deleteEvent(eventId: string) {
    return this.calendarDao.deleteEvent(eventId);
  }

  public async getEvent(eventId: string) {
    return this.calendarDao.getEvent(eventId);
  }

  public async getEventsInRange(initDate: Date, endDate: Date) {
    return this.calendarDao.getEventsInRange(initDate, endDate);
  }

  public async overlap(event: CalendarEvent){
    return this.calendarDao.overlap(event);
  }
}

export { CalendarAdmin };
