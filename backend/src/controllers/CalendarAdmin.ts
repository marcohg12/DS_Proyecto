import { CalendarEventI } from "../interfaces/interfaces";
import { CalendarDAO } from "../daos/CalendarDAO";

class CalendarAdmin {
  private calendarDAO: CalendarDAO = new CalendarDAO();

  constructor() {}

  public async registerEvent(event: CalendarEventI) {
    return await this.calendarDAO.registerEvent(event);
  }

  public async updateEvent(event: CalendarEventI) {
    return await this.calendarDAO.updateEvent(event);
  }

  public async deleteEvent(eventId: string) {
    return await this.calendarDAO.deleteEvent(eventId);
  }

  public async getEvent(eventId: string) {
    return await this.calendarDAO.getEvent(eventId);
  }

  public async getEventsInRange(initDate: Date, endDate: Date) {
    return await this.calendarDAO.getEventsInRange(initDate, endDate);
  }

  public async overlap(event: CalendarEventI) {
    return await this.calendarDAO.overlap(event);
  }
}

export { CalendarAdmin };
