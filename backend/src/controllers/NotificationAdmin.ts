import { Notification } from "../models/Notification";
import { NotificationDAO  } from "../daos/NotificationDAO";

class NotificationAdmin {
  private notificationDAO: NotificationDAO = new NotificationDAO(); 
  constructor() {}

  public async registerNotification(notification: Notification) {
    return await this.notificationDAO.registerNotification(notification); 
  }

  public async markAsRead(userId: string) {
    return await this.notificationDAO.markAsRead(userId); 
  }

  public async getUserNotifications(userId: string) {
    return await this.notificationDAO.getUserNotifications(userId);
  }

  public async unreadAmount(userId: string) {
    return await this.notificationDAO.unreadAmount(userId);
  }
}

export { NotificationAdmin };
