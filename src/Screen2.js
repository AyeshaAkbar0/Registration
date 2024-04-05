



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

import con1 from './asset/page1/con1.png';
import con2 from './asset/page1/con2.png';
import tik from './asset/page2/tik.png';


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
  const [title, setTitle] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible1, setIsVisible1] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };


  
  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];
const years = Array.from({ length: 100 }, (_, i) => 2022 - i);

const countryCodes = [
  "+1", // United States
  "+1-242", // Bahamas
  "+1-246", // Barbados
  "+1-264", // Anguilla
  "+1-268", // Antigua and Barbuda
  "+1-284", // British Virgin Islands
  "+1-345", // Cayman Islands
  "+1-441", // Bermuda
  "+1-473", // Grenada
  "+1-649", // Turks and Caicos Islands
  "+1-664", // Montserrat
  "+1-670", // Northern Mariana Islands
  "+1-671", // Guam
  "+1-684", // American Samoa
  "+1-721", // Sint Maarten
  "+1-758", // Saint Lucia
  "+1-767", // Dominica
  "+1-784", // Saint Vincent and the Grenadines
  "+1-809", // Dominican Republic
  "+1-868", // Trinidad and Tobago
  "+1-869", // Saint Kitts and Nevis
  "+1-876", // Jamaica
  "+7", // Russia
  "+20", // Egypt
  "+27", // South Africa
  "+30", // Greece
  "+31", // Netherlands
  "+32", // Belgium
  "+33", // France
  "+34", // Spain
  "+36", // Hungary
  "+39", // Italy
  "+40", // Romania
  "+41", // Switzerland
  "+43", // Austria
  "+44", // United Kingdom
  "+45", // Denmark
  "+46", // Sweden
  "+47", // Norway
  "+48", // Poland
  "+49", // Germany
  "+51", // Peru
  "+52", // Mexico
  "+53", // Cuba
  "+54", // Argentina
  "+55", // Brazil
  "+56", // Chile
  "+57", // Colombia
  "+58", // Venezuela
  "+60", // Malaysia
  "+61", // Australia
  "+62", // Indonesia
  "+63", // Philippines
  "+64", // New Zealand
  "+65", // Singapore
  "+66", // Thailand
  "+81", // Japan
  "+82", // South Korea
  "+84", // Vietnam
  "+86", // China
  "+90", // Turkey
  "+91", // India
  "+92", // Pakistan
  "+93", // Afghanistan
  "+94", // Sri Lanka
  "+95", // Myanmar
  "+98", // Iran
  "+212", // Morocco
  "+213", // Algeria
  "+216", // Tunisia
  "+218", // Libya
  "+220", // Gambia
  "+221", // Senegal
  "+222", // Mauritania
  "+223", // Mali
  "+224", // Guinea
  "+225", // Ivory Coast
  "+226", // Burkina Faso
  "+227", // Niger
  "+228", // Togo
  "+229", // Benin
  "+230", // Mauritius
  "+231", // Liberia
  "+232", // Sierra Leone
  "+233", // Ghana
  "+234", // Nigeria
  "+235", // Chad
  "+236", // Central African Republic
  "+237", // Cameroon
  "+238", // Cape Verde
  "+239", // Sao Tome and Principe
  "+240", // Equatorial Guinea
  "+241", // Gabon
  "+242", // Republic of the Congo
  "+243", // Democratic Republic of the Congo
  "+244", // Angola
  "+245", // Guinea-Bissau
  "+246", // Diego Garcia
  "+247", // Ascension Island
  "+248", // Seychelles
  "+249", // Sudan
  "+250", // Rwanda
  "+251", // Ethiopia
  "+252", // Somalia
  "+253", // Djibouti
  "+254", // Kenya
  "+255", // Tanzania
  "+256", // Uganda
  "+257", // Burundi
  "+258", // Mozambique
  "+260", // Zambia
  "+261", // Madagascar
  "+262", // Reunion
  "+263", // Zimbabwe
  "+264", // Namibia
  "+265", // Malawi
  "+266", // Lesotho
  "+267", // Botswana
  "+268", // Eswatini
  "+269", // Comoros
  "+290", // Saint Helena
  "+291", // Eritrea
  "+297", // Aruba
  "+298", // Faroe Islands
  "+299", // Greenland
  "+350", // Gibraltar
  "+351", // Portugal
  "+352", // Luxembourg
  "+353", // Ireland
  "+354", // Iceland
  "+355", // Albania
  "+356", // Malta
  "+357", // Cyprus
  "+358", // Finland
  "+359", // Bulgaria
  "+370", // Lithuania
  "+371", // Latvia
  "+372", // Estonia
  "+373", // Moldova
  "+374", // Armenia
  "+375", // Belarus
  "+376", // Andorra
  "+377", // Monaco
  "+378", // San Marino
  "+379", // Vatican City
  "+380", // Ukraine
  "+381", // Serbia
  "+382", // Montenegro
  "+383", // Kosovo
  "+385", // Croatia
  "+386", // Slovenia
  "+387", // Bosnia and Herzegovina
  "+389", // North Macedonia
  "+420", // Czech Republic
  "+421", // Slovakia
  "+423", // Liechtenstein
  "+500", // Falkland Islands
  "+501", // Belize
  "+502", // Guatemala
  "+503", // El Salvador
  "+504", // Honduras
  "+505", // Nicaragua
  "+506", // Costa Rica
  "+507", // Panama
  "+508", // Saint Pierre and Miquelon
  "+509", // Haiti
  "+590", // Guadeloupe
  "+591", // Bolivia
  "+592", // Guyana
  "+593", // Ecuador
  "+594", // French Guiana
  "+595", // Paraguay
  "+596", // Martinique
  "+597", // Suriname
  "+598", // Uruguay
  "+599", // Caribbean Netherlands
  "+670", // Timor-Leste
  "+672", // Norfolk Island
  "+673", // Brunei
  "+674", // Nauru
  "+675", // Papua New Guinea
  "+676", // Tonga
  "+677", // Solomon Islands
  "+678", // Vanuatu
  "+679", // Fiji
  "+680", // Palau
  "+681", // Wallis and Futuna
  "+682", // Cook Islands
  "+683", // Niue
  "+685", // Samoa
  "+686", // Kiribati
  "+687", // New Caledonia
  "+688", // Tuvalu
  "+689", // French Polynesia
  "+690", // Tokelau
  "+691", // Micronesia
  "+692", // Marshall Islands
  "+850", // North Korea
  "+852", // Hong Kong
  "+853", // Macau
  "+855", // Cambodia
  "+856", // Laos
  "+880", // Bangladesh
  "+886", // Taiwan
  "+960", // Maldives
  "+961", // Lebanon
  "+962", // Jordan
  "+963", // Syria
  "+964", // Iraq
  "+965", // Kuwait
  "+966", // Saudi Arabia
  "+967", // Yemen
  "+968", // Oman
  "+970", // Palestine
  "+971", // United Arab Emirates
  "+972", // Israel
  "+973", // Bahrain
  "+974", // Qatar
  "+975", // Bhutan
  "+976", // Mongolia
  "+977", // Nepal
  "+992", // Tajikistan
  "+993", // Turkmenistan
  "+994", // Azerbaijan
  "+995", // Georgia
  "+996", // Kyrgyzstan
  "+998", // Uzbekistan
];

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

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    console.log("new value of title is :", e.target.value);
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
      title:title,
      phone:`${countryCode} ${phoneNumber}`,
      dateOfBirth: `${selectedDay} ${selectedMonth} ${selectedYear}`

     // country: nation,
    };
    axios
      .post("http://localhost:5000/users/register", user)
      .then(() => {
        console.log("user values are : ", user);
        // console.log("User registered successfully");
      })
      .catch(() => {
        console.log("user values are : ", user);
        console.log("User cannot be created");
        
      });
    navigate("/image");
  };

  return (
   
    <div style={{ 
      //backgroundImage: `url(${bg})`,
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // minHeight: '100vh',
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center'
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '190vh',
     // maxHeight:'150vh',
      minWidth:'100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'relative'
    }}>
    <div>
    <img
      src={logo}
      alt="Registration"
      style={{
        width: '60%', // Make the image take up the full width of the container
        height: '60%',
        marginTop:"10%" ,
        marginLeft:'20%'// Maintain aspect ratio
      }}
    />
      <Form style={{ maxWidth: 400, margin: "0 auto", marginTop: 50 }}>
      <Form.Label style={{ color: 'white', marginBottom: '0%', fontWeight:"bold" }}>TITLE</Form.Label>
      <div style={{ backgroundColor: 'black', padding: '10px', borderRadius: '5px', marginBottom: '20px', height: '50px',border: '1px solid white' }}>

        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Ms"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              style={{ color: 'white' }}
              onChange={handleTitleChange}
              value="Ms"
              checked={title === 'Ms'}
            />
            <Form.Check
              inline
              label="Mrs"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              style={{ color: 'white' }}
              onChange={handleTitleChange}
              value="Mrs"
              checked={title === 'Mrs'}
            />
            <Form.Check
              inline
              name="group1"
              label="Mr"
              type={type}
              id={`inline-${type}-3`}
              style={{ color: 'white' }}
              onChange={handleTitleChange}
              value="Mr"
              checked={title === 'Mr'}
            />
          </div>
        ))}
      </div>
        
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label style={{ color: 'white' ,marginBottom: '0%', fontWeight:"bold" }}>FIRST NAME</Form.Label>
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
          <Form.Label style={{ color: 'white',marginBottom: '0%', fontWeight:"bold"  }}>LAST NAME</Form.Label>
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
  <Form.Label style={{ color: 'white',marginBottom: '0%', fontWeight:"bold"  }}>PHONE NUMBER</Form.Label>
  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid white', borderRadius: '5px', backgroundColor: 'black', padding: '5px' }}>
    <Form.Control
              value={countryCode}
              onChange={handleCountryCodeChange}
      as="select"
      style={{ width: '30%', color: 'white', backgroundColor: 'black', border: 'none', marginRight: '5px' }}
    >
      {countryCodes.map(country => (
      <option key={country}>{country}</option>
    ))}
    </Form.Control>
    <Form.Control
      type="text"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
      placeholder="Enter phone number"
      style={{ flex: 1, color: 'white', backgroundColor: 'black', border: 'none' }}
    />
  </div>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ color: 'white',marginBottom: '0%', fontWeight:"bold"  }}>EMAIL ADDRESS</Form.Label>
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




<Form.Group className="mb-3" controlId="formBasicDOB">
      <Form.Label style={{ color: 'white',marginBottom: '0%', fontWeight:"bold"  }}>DATE OF BIRTH</Form.Label>
      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid white', borderRadius: '5px', backgroundColor: 'black', padding: '5px' }}>
        <Form.Control
          as="select"
          value={selectedDay}
          onChange={handleDayChange}
          style={{ width: '30%', color: 'white', backgroundColor: 'black', border: 'none', marginRight: '5px' }}
        >
          {days.map(day => (
      <option key={day}>{day}</option>
    ))}
          
          {/* Add other day options */}
        </Form.Control>
        <Form.Control
          as="select"
          value={selectedMonth}
          onChange={handleMonthChange}
          style={{ width: '30%', color: 'white', backgroundColor: 'black', border: 'none', marginRight: '5px' }}
        >
          {months.map(month => (
      <option key={month}>{month}</option>
    ))}
       
        </Form.Control>
        <Form.Control
          as="select"
          value={selectedYear}
          onChange={handleYearChange}
          style={{ width: '30%', color: 'white', backgroundColor: 'black', border: 'none' }}
        >
            {years.map(year => (
      <option key={year}>{year}</option>
    ))}
       
        </Form.Control>
      </div>
    </Form.Group>




    <div style={{width:"450px", height:"90px"}}>
      <img
        src={con1}
        alt="Background"
        style={{ position: 'absolute', zIndex: 0,width:"450px", height:"60px" }}
      />
      {isVisible && (
        <img
          src={tik}
          alt="Top"
          style={{  position: 'absolute', zIndex: 1,width: '25px', height: '20px'}}
          onClick={toggleVisibility}
        />
      )}
      {!isVisible && (
        <div
          onClick={toggleVisibility}
          style={{  position: 'absolute', zIndex: 1,width: '25px', height: '20px' }}
        />
      )}
    </div>
    <div style={{marginTop:'0%', marginBottom:"0%",width:"450px", height:"90px"}}>
      <img
        src={con2}
        alt="Background"
        style={{ position: 'absolute', zIndex: 0,width:"450px", height:"60px" }}
      />
      {isVisible1 && (
        <img
          src={tik}
          alt="Top"
          style={{  position: 'absolute', zIndex: 1,width: '25px', height: '20px'}}
          onClick={toggleVisibility1}
        />
      )}
      {!isVisible1 && (
        <div
          onClick={toggleVisibility1}
          style={{  position: 'absolute', zIndex: 1,width: '25px', height: '20px' }}
        />
      )}
    </div>

   



        
       
        <div
  //className="w-70 mt-3 ml-5"
  //variant="primary"
  onClick={Register}
  style={{
   // marginTop:'40%',

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
