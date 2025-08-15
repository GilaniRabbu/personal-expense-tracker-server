import { Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  userStatus: 'ACTIVE' | 'INACTIVE' | 'BLOCKED' | 'PENDING' | 'DELETED';
  role: 'ADMIN' | 'USER';
  isRegistered: boolean;
  redirectUrl?: string;
  isDeleted: boolean;
  deletedAt?: Date;
}
