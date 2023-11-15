import { CalendarEvent } from "./CalendarEvent";
import { CalendarEventI } from "../interfaces/CalendarEventI";

class Decorator implements CalendarEventI {
  protected decoratedEvent: CalendarEvent;

  constructor(eventToDecorate: CalendarEvent) {
    this.decoratedEvent = eventToDecorate;
  }

  public getCustomFields() {
    return this.decoratedEvent.getCustomFields();
  }
}

export { Decorator };
