import { CalendarEvent as CalendarEventModel } from "../models/CalendarEvent";
import Calendar from "../schemas/calendarEventS"

class CalendarDAO {
  constructor() {}

  public async registerEvent(event: CalendarEventModel) {
    const newEvent = new Calendar({
      date: event.getDate(),
      duration: event.getDuration(),
      description: event.getDescription()
    })

    const regEvent = await newEvent.save();
    return regEvent;
  }

  public async updateEvent(event: CalendarEventModel) {
    return await Calendar.updateOne(
      { _id: event.getEventId()} ,
      {
        date: event.getDate(),
        duration: event.getDuration(),
        description: event.getDescription(),
      }
    )
  }

  public async deleteEvent(eventId: string) {
    return await Calendar.deleteOne({ _id: eventId } );
  }

  public async getEvent(eventId: string) {
    return await Calendar.findOne({ _id: eventId});
  }

  public async getEventsInRange(initDate: Date, endDate: Date) {
    return await Calendar.find({
      date: {
        $gte: initDate,
        $lte: endDate,
      },
    });
  }

  public async overlap(event: CalendarEventModel){
    let dateEv = event.getDate();

    let year = dateEv.getFullYear();
    let month = dateEv.getMonth();
    let day = dateEv.getDay();
    let hour = dateEv.getHours();
    let end = dateEv.getHours() + event.getDuration();

    const startOfDay = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    const endOfDay = new Date(`${year}-${month}-${day}T23:59:59.999Z`);
    const result = await Calendar.find(
      {date: {
        $gte: startOfDay,
        $lte: endOfDay,
      }});

    for(let i = 0; i < result.length; i++){
       let otherEnd = result[i].date.getHours() + result[i].duration;

       if((result[i].date.getHours() <= hour && hour < otherEnd)|| 
           (hour <= result[i].date.getHours() && result[i].date.getHours() < end))
           {
             return true;
           }
    }
    return false;

  }

}

export { CalendarDAO };
