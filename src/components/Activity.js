import React, { useContext } from "react";
import { BookingContext } from "../context/BookingContext";
import { FaRegUserCircle } from "react-icons/fa";
import "./Activity.css";
import { AuthContext } from "../context/authContext";

const Activity = () => {
  const { bookings } = useContext(BookingContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="activity-container">
      <div className="activity-navbar">
        <div className="user-name">
          <FaRegUserCircle /> {user}
        </div>
      </div>
      
      <div className="headings">Activity</div>
      
      <div className="all-activity-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>  
              <th>Movie</th>   
              <th>Ticket</th> 
              <th>Amount</th>  
              <th>Time</th> 
              <th>Date</th> 
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{booking.name}</td>
                <td>{booking.ticketCount}</td>
                <td>${booking.amount}</td>
                <td>{booking.time}</td>
                <td>{booking.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activity;
