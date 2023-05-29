import React from "react";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning!";
  customStyle.color = "#DF2E38";
} else if (currentTime < 18) {
  greeting = "Good Afternoon!";
  customStyle.color = "#A0D8B3";
} else {
  greeting = "Goodnight!";
  customStyle.color = "#1D267D";
}

function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
