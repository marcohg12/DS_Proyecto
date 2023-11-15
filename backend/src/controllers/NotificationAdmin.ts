import { Notification } from "../models/Notification";

class NotificationAdmin {
  constructor() {}

  public async registerNotification(notification: Notification) {}

  public async markAsRead(userId: string) {}

  public async getUserNotifications(userId: string) {}

  public async unreadAmount(userId: string) {}
}

export { NotificationAdmin };
