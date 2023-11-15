import { CalendarEvent } from "../models/CalendarEvent";

class CalendarAdmin {
  constructor() {}

  public async registerEvent(event: CalendarEvent) {}

  public async updateEvent(event: CalendarEvent) {}

  public async deleteEvent(eventId: string) {}

  public async getEvent(eventId: string) {}

  public async getEventsInRange(initDate: Date, endDate: Date) {}
}

export { CalendarAdmin };
