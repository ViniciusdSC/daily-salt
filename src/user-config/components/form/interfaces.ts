import { UserConfigInterface } from 'user-config/interfaces';

export type UserConfigFormValues = Omit<UserConfigInterface, 'id'>;
