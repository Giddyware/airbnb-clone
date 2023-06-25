interface IUser {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  hashedPassword: string | null;
  createdAt: Date;
  updatedAt: Date;
  favoriteIds: string[];
}

interface IUserSafe extends IUser {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
}
