import {NotificationType} from '../types/notification-type';

export interface Notification {
  readonly type: NotificationType;
  readonly message: string;
  readonly action?: unknown;
}
