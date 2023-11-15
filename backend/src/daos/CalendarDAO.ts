import { CalendarEvent as CalendarEventModel } from "../models/CalendarEvent";

class CalendarDAO {
  constructor() {}

  public async registerEvent(event: CalendarEventModel) {}

  public async updateEvent(event: CalendarEventModel) {}

  public async deleteEvent(eventId: string) {}

  public async getEvent(eventId: string) {}

  public async getEventsInRange(initDate: Date, endDate: Date) {}
}

export { CalendarDAO };
