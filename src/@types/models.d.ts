// import { Listing, Reservation, User } from "@prisma/client";

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

interface IListing {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: Date;
  category: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  userId: string;
  price: number;
}

interface IListingSafe extends IListing {
  createdAt: string;
}

interface IReservation {
  id: string;
  userId: string;
  listingId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  createdAt: Date;
}

interface IReservationSafe extends IReservation {
  startDate: string;
  endDate: string;
  createdAt: string;
  listing: IListingSafe;
}
