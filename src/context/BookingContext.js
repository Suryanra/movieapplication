import React, { createContext, useState, useEffect } from 'react';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage when the app starts
  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings");
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  // Function to add a new booking and save it to localStorage
  const addBooking = (movie, ticketCount, time, date) => {
    const newBooking = { movie, ticketCount, time, date, amount: ticketCount * 25 };
    const updatedBookings = [...bookings, newBooking];

    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContext, BookingProvider };
