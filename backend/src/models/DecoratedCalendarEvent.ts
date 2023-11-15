import { Decorator } from "./Decorator";
import { CalendarEvent } from "./CalendarEvent";
import { CustomFieldsI } from "../interfaces/CalendarEventI";

class DecoratedCalendarEvent extends Decorator {
  private fieldName: string;
  private fieldValue: string;

  constructor(e: CalendarEvent, fieldName: string, fieldValue: string) {
    super(e);
    fieldName = this.fieldName;
    fieldValue = this.fieldValue;
  }

  public getCustomFields() {
    const customFields = this.decoratedEvent.getCustomFields();
    const result: CustomFieldsI[] = customFields.concat([
      { name: this.fieldName, value: this.fieldValue },
    ]);
    return result;
  }
}

export { DecoratedCalendarEvent };
