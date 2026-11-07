import { createContext, ReactNode, useContext, useState } from 'react';

export interface Booking {
  id: string;
  movie: string;
  name: string;
  seats: string[];
  total: number;
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id'>) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (bookingData: Omit<Booking, 'id'>) => {
    const newBooking = { ...bookingData, id: Date.now().toString() };
    setBookings((prev) => [newBooking, ...prev]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) throw new Error('useBooking must be used within a BookingProvider');
  return context;
}