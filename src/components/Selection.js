import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import movies from "./movie.js";
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../context/authContext";
import "./Selection.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { IoIosGlobe } from "react-icons/io";

const Selection = () => {
  const { id } = useParams();
  const { addBooking,bookings } = useContext(BookingContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [ticketCount, setTicketCount] = useState(1);
  const [selectedTime, setSelectedTime] = useState("12:00"); // Default time
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    const movie = movies.find((movie) => movie.id == id);
    setCurrentMovie(movie);
    console.log("Movie selected:", movie);
  }, [id]);

  const bookTicket = () => {
    if (currentMovie) {
      addBooking(id, ticketCount, selectedTime, date);
      console.log("booking till now: ",bookings)
      navigate("/movie/activity");
    } else {
      console.error("Cannot book ticket, movie not found.");
    }
  };

  return (
    <>
      {currentMovie && (
        <div className="selection-container">
          <div className="selection-navbar-container">
            <div className="selection-image-container">
              <img
                src={`.././../${currentMovie.imageUrl}`}
                className="selection-image"
                alt={currentMovie.name}
              />
            </div>

            <div className="user-name">
              <FaRegUserCircle /> {user}
            </div>
          </div>

          <div className="details-fillup">
            <div className="movie-name">
              {currentMovie.name} ( {currentMovie.releaseDate})
            </div>

            <div className="ticket-details">
              <div className="box1">Total Tickets:</div>
              <div className="box2">
                <div className="btn" onClick={() => setTicketCount(ticketCount + 1)}>+</div>
              <div className="ticket-count">{ticketCount}</div>
              <div className="btn" onClick={() => setTicketCount(ticketCount > 1 ? ticketCount - 1 : 1)}>-</div>
              </div>
            </div>

            <div className="ticket-details">
              <div className="box1">Show Time: </div>
              <div className="box2">
                              {["09:00", "12:00", "18:00"].map((time) => (
                <span
                  key={time}
                  className={`show-timing ${selectedTime === time ? "active-time" : ""}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time === "09:00" ? <FiSun /> : time === "12:00" ? <FiMoon /> : <IoIosGlobe />} {time}
                </span>
              ))}
              </div>
            </div>

            <div className="ticket-details">
              <div className="box1">Date: </div>
              <div className="box2"><input
                className="input-btn"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              /></div>
            </div>

            <button className="book-ticket-btn" onClick={bookTicket}>Book Ticket</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Selection;
