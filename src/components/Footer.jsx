import React from "react";

// Function to get the formatted date (e.g., "November 25th")
const getFormattedDate = () => {
  const date = new Date();
  const options = { month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const day = date.getDate();
  const suffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Handles 4th - 20th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${formattedDate}${suffix(day)}`;
};

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center py-4">
        <div className="d-flex align-items-center justify-content-center pb-4">
          <div className="col-md-6">
            <p className="mb-2">Powered By Muhammad Muhammad</p>
            <p className="mb-0">{getFormattedDate()}</p>
            <p className="mb-0">&copy; {new Date().getFullYear()} Muhammad Muhammad. All rights reserved.</p>
            <p className="mb-0">Contact: muhammadhaidarmuhammad@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
