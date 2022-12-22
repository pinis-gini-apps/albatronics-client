import {NotificationType} from '../types/notification-type';

export interface NotificationComponentProps {
  readonly open: boolean;
  readonly type: NotificationType;
  readonly message: string;
  readonly onClose: VoidFunction;
  readonly duration?: number;
}
