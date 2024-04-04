



import React from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import submitButton from './asset/page1/button.png';
import bg from './asset/page1/bg.png';
import logo from './asset/page1/logo.png'

export default function Screen2() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
 

  const [selectedTitle, setSelectedTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
 
  const [selectedDay, setSelectedDay] = useState("Day");
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [selectedYear, setSelectedYear] = useState("Year");

  
  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];
const years = Array.from({ length: 100 }, (_, i) => 2022 - i);

const handleDayChange = (event) => {
  setSelectedDay(event.target.value);
};

const handleMonthChange = (event) => {
  setSelectedMonth(event.target.value);
};

const handleYearChange = (event) => {
  setSelectedYear(event.target.value);
};



  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

 

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

 

  const Register = () => {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
     // country: nation,
    };
    axios
      .post("http://localhost:5000/users/register", user)
      .then(() => {
        // console.log("User registered successfully");
      })
      .catch(() => {
        console.log("User cannot be created");
        alert("Email already registered");
      });
    navigate("/third");
  };

  return (
    <div style={{ 
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <div>
    <img
      src={logo}
      alt="Registration"
      style={{
        width: '100%', // Make the image take up the full width of the container
        height: 'auto' // Maintain aspect ratio
      }}
    />
      <Form style={{ maxWidth: 400, margin: "0 auto", marginTop: 50 }}>
      <Form.Label style={{ color: 'white', marginBottom: '0px' }}>Title</Form.Label>
      <div style={{ backgroundColor: 'black', padding: '10px', borderRadius: '5px', marginBottom: '20px', height:'50px' }}>
 
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="Ms"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
        style={{ color: 'white' }}
      />
      <Form.Check
        inline
        label="Mrs"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
        style={{ color: 'white' }}
      />
      <Form.Check
        inline
        name="group1"
        label="Mr"
        type={type}
        id={`inline-${type}-3`}
        style={{ color: 'white' }}
      />
    </div>
  ))}
</div>

        
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label style={{ color: 'white' }}>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={handleFirstNameChange}
            style={{
              backgroundColor: 'black',
              color: 'white'
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label style={{ color: 'white' }}>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={handleLastNameChange}
            style={{
              backgroundColor: 'black',
              color: 'white'
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
  <Form.Label style={{ color: 'white' }}>Phone Number</Form.Label>
  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid white', borderRadius: '5px', backgroundColor: 'black', padding: '5px' }}>
    <Form.Control
      as="select"
      style={{ width: '30%', color: 'white', backgroundColor: 'black', border: 'none', marginRight: '5px' }}
    >
      <option>+1</option>
      <option>+44</option>
      <option>+91</option>
    </Form.Control>
    <Form.Control
      type="text"
      placeholder="Enter phone number"
      style={{ flex: 1, color: 'white', backgroundColor: 'black', border: 'none' }}
    />
  </div>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: 'white' }}>Email address</Form.Label>
  <Form.Control
    type="email"
    placeholder="Enter email"
    value={email}
    onChange={handleEmailChange}
    style={{
      backgroundColor: 'black',
      color: 'white'
    }}
  />
        </Form.Group>

{/* <Form.Label style={{ color: 'white' }}>Date of Birth</Form.Label>
<div style={{ display: 'flex', alignItems: 'center', border: '1px solid white', borderRadius: '5px', backgroundColor: 'black', padding: '5px' }}>
  <Dropdown style={{ flex: 1, marginRight: '5px' }} onSelect={handleDayChange}>
    <Dropdown.Toggle variant="success" id="dropdown-day" style={{ backgroundColor: 'black', color: 'white', border: 'none' }}>
      Day
    </Dropdown.Toggle>
    <Dropdown.Menu style={{ backgroundColor: 'black' }}>
      {days.map((day) => (
        <Dropdown.Item key={day} eventKey={day} style={{ color: 'white' }}>{day}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown style={{ flex: 1, marginRight: '5px' }} onSelect={handleMonthChange}>
    <Dropdown.Toggle variant="success" id="dropdown-month" style={{ backgroundColor: 'black', color: 'white', border: 'none' }}>
      Month
    </Dropdown.Toggle>
    <Dropdown.Menu style={{ backgroundColor: 'black' }}>
      {months.map((month, index) => (
        <Dropdown.Item key={month} eventKey={index + 1} style={{ color: 'white' }}>{month}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown style={{ flex: 1 }} onSelect={handleYearChange}>
    <Dropdown.Toggle variant="success" id="dropdown-year" style={{ backgroundColor: 'black', color: 'white', border: 'none' }}>
      Year
    </Dropdown.Toggle>
    <Dropdown.Menu style={{ backgroundColor: 'black' }}>
      {years.map((year) => (
        <Dropdown.Item key={year} eventKey={year} style={{ color: 'white' }}>{year}</Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
</div> */}


<Form.Group className="mb-3" controlId="formBasicDOB">
      <Form.Label style={{ color: 'white' }}>Date of Birth</Form.Label>
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid white', borderRadius: '5px', backgroundColor: 'black', padding: '5px' }}>
        <Form.Control
          as="select"
          value={selectedDay}
          onChange={handleDayChange}
          style={{ width: '30%', color: 'white', backgroundColor: 'black', border: 'none', marginRight: '5px' }}
        >
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
          <option>Sunday</option>
          
          {/* Add other day options */}
        </Form.Control>
        <Form.Control
          as="select"
          value={selectedMonth}
          onChange={handleMonthChange}
          style={{ width: '30%', color: 'white', backgroundColor: 'black', border: 'none', marginRight: '5px' }}
        >
          <option>Month</option>
          {/* Add other month options */}
        </Form.Control>
        <Form.Control
          as="select"
          value={selectedYear}
          onChange={handleYearChange}
          style={{ width: '30%', color: 'white', backgroundColor: 'black', border: 'none' }}
        >
          <option>Year</option>
          {/* Add other year options */}
        </Form.Control>
      </div>
    </Form.Group>










        
       
        <div
  //className="w-70 mt-3 ml-5"
  //variant="primary"
  onClick={Register}
  style={{
    marginTop:'10px',

    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `url(${submitButton})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '50px', // Set a minimum height for the button
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '30px', // Adjust padding for text
    paddingRight: '30px', // Adjust padding for text
    borderRadius:'40px'
  
  }}
>
  
</div>

      </Form>
    </div>
    </div>
  );
}
