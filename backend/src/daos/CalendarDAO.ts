import { CalendarEventI } from "../interfaces/interfaces";
import CalendarEvent from "../schemas/calendarEventS";

class CalendarDAO {
  constructor() {}

  public async registerEvent(event: CalendarEventI) {
    const newEvent = new CalendarEvent({
      date: event.getDate(),
      duration: event.getDuration(),
      description: event.getDescription(),
      type: event.getType(),
      customFields: event.getCustomFields(),
    });

    const regEvent = await newEvent.save();
    return regEvent;
  }

  public async updateEvent(event: CalendarEventI) {
    return await CalendarEvent.updateOne(
      { _id: event.getEventId() },
      {
        date: event.getDate(),
        duration: event.getDuration(),
        description: event.getDescription(),
        type: event.getType(),
        customFields: event.getCustomFields(),
      }
    );
  }

  public async deleteEvent(eventId: string) {
    return await CalendarEvent.deleteOne({ _id: eventId });
  }

  public async getEvent(eventId: string) {
    return await CalendarEvent.findOne({ _id: eventId });
  }

  public async getEventsInRange(initDate: Date, endDate: Date) {
    return await CalendarEvent.find({
      date: {
        $gte: initDate,
        $lte: endDate,
      },
    });
  }

  public async overlap(event: CalendarEventI) {
    // Calculamos horas de inicio y fin del evento
    const eventDate = new Date(event.getDate());
    const initHour = eventDate.getHours();
    const endHour = initHour + event.getDuration();
    var overlap = false;

    // Obtenemos los eventos del día
    const initDate = new Date(event.getDate());
    const endDate = new Date(event.getDate());
    initDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);
    const events = await this.getEventsInRange(initDate, endDate);

    // Por cada evento del día verificamos si chocan las horas
    for (const calEvent of events) {
      if (calEvent._id === event.getEventId()) {
        continue;
      }

      // Verificamos si la hora inicial se traslapa
      const eventInitHour = new Date(calEvent.date).getHours();
      if (initHour <= eventInitHour && eventInitHour < endHour) {
        overlap = true;
      }

      // Verificamos si la hora de fin se traslapa
      const eventEndHour = eventInitHour + calEvent.duration;
      if (initHour < eventEndHour && eventEndHour < endHour) {
        overlap = true;
      }
    }
    return overlap;
  }
}

export { CalendarDAO };
