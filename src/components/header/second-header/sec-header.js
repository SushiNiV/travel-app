import React from 'react';
import './sec-header.css';

const SecondNav = ({ type, isVisible }) => {
  let menuItems = [];

  switch (type) {
    case "rooms":
      menuItems = [
        "Standard Room",
        "Deluxe Room",
        "Suite",
        "Family Room",
        "Accessible Rooms"
      ];
      break;
    case "amenities":
      menuItems = [
        "Spa & Wellness",
        "Swimming Pool",
        "Gym",
        "Restaurant & Bar",
        "Room Service",
        "Parking & Shuttle"
      ];
      break;
    case "booking":
      menuItems = [
        "Check Availability",
        "Book a Room",
        "Modify Booking",
        "Cancellation Policy",
        "Group Booking"
      ];
      break;
    case "info":
      menuItems = [
        "About Us",
        "Contact",
        "Location & Directions",
        "FAQs",
        "Work With Us"
      ];
      break;
    default:
      menuItems = [];
  }

  return (
    <nav className={`second-navbar ${isVisible ? 'show' : ''}`}>
      <ul className="sub-nav-list">
        {menuItems.map((item, index) => (
          <li key={index}><a href="#">{item}</a></li>
        ))}
      </ul>
    </nav>
  );
};

export default SecondNav;