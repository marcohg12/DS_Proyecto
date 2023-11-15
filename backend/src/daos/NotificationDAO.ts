import { Notification as NotificationModel } from "../models/Notification";

class NotificationDAO {
  constructor() {}

  public async registerNotification(notification: NotificationModel) {}

  public async markAsRead(userId: string) {}

  public async getUserNotifications(userId: string) {}

  public async unreadAmount(userId: string) {}
}

export { NotificationDAO };
