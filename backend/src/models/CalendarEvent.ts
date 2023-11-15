class CalendarEvent {
  private eventId: string | null;
  private date: Date;
  private duration: number;
  private description: string;

  constructor(
    date: Date,
    duration: number,
    description: string,
    eventId?: string
  ) {
    this.eventId = eventId;
    (this.date = date), (this.duration = duration);
    this.description = description;
  }

  public setEventId(eventId: string) {
    this.eventId = eventId;
  }

  public getEventId() {
    return this.eventId;
  }

  public getDate() {
    return this.date;
  }

  public getDuration() {
    return this.duration;
  }

  public getDescription() {
    return this.description;
  }
}

export { CalendarEvent };
