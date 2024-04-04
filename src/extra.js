// import React from "react";
// import axios from "axios";
// import Dropdown from "react-bootstrap/Dropdown";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Screen2() {
//   const navigate = useNavigate();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [nation, setNation] = useState("");
//   const [day ,setDay] = useState("");
//   const [month, setMonth]= useState("");
//   const [year , setYear] = useState("");


//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleFirstNameChange = (event) => {
//     setFirstName(event.target.value);
//   };
//   const handleLastNameChange = (event) => {
//     setLastName(event.target.value);
//   };


//   const handleCountrySelect = (eventKey) => {
//     setNation(eventKey);
//   };

//   const handleDaySelect=()=>{

//   }
//   const handleMonthSelect=()=>{

//   }
// const handleYearSelect=()=>{

// }

//   const Register = () => {
//     const user = {
//       firstName: firstName,
//       lastName :lastName,
//       //dateOfBirth:
//       //password: password,
//       email: email,
//       country: nation,
//     };
//     axios
//       .post("http://localhost:5000/users/register", user)
//       .then(() => {
//         // console.log("User registered successfully");
        
//       })
//       .catch(() => {
//         console.log("User cannot be created");
//         alert("Email already registered");
//       });
//       navigate("/third");
//   };

//   return (
//     <div>
//       <h2 style={{ marginLeft: 500, marginTop: 100, color: "#add8e6" }}>
//         Registeration Form
//       </h2>
//       <Form style={{ width: 400, marginLeft: 500, marginTop: 50 }}>
//       {[ 'radio'].map((type) => (
//         <div key={`inline-${type}`} className="mb-3">
//           <Form.Check
//             inline
//             label="Ms"
//             name="group1"
//             type={type}
//             id={`inline-${type}-1`}
//           />
//           <Form.Check
//             inline
//             label="Mrs"
//             name="group1"
//             type={type}
//             id={`inline-${type}-2`}
//           />
//           <Form.Check
//             inline
//             name="group1"
//             label="Mr"
//             type={type}
//             id={`inline-${type}-3`}
//           />
//         </div>
//       ))}
//         <Form.Group className="mb-3" controlId="formBasicEmail">

//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>
//         <Form.Label>First Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Name"
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//         <Form.Label>Last Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter Name"
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </Form.Group>
//         <Dropdown onSelect={handleCountrySelect}>
//           <Dropdown.Toggle
//             className="mb-3 w-100"
//             variant="success"
//             id="dropdown-basic"
//           >
            
//             Select Country
//           </Dropdown.Toggle>
//           <Dropdown.Menu style={{overflowY:'auto', maxHeight:'200px'}} >
            
//             <Dropdown.Item eventKey="UAE">UAE</Dropdown.Item>
//             <Dropdown.Item eventKey="Qatar">Qatar</Dropdown.Item>
//             <Dropdown.Item eventKey="Saudi Arabia">Saudi Arabia</Dropdown.Item>
//             <Dropdown.Item eventKey="Afghanistan">Afghanistan</Dropdown.Item>
//             <Dropdown.Item eventKey="Albania">Albania</Dropdown.Item>
//             <Dropdown.Item eventKey="Algeria">Algeria</Dropdown.Item>
//             <Dropdown.Item eventKey="Andorra">Andorra</Dropdown.Item>
//             <Dropdown.Item eventKey="Angola">Angola</Dropdown.Item>
//             <Dropdown.Item eventKey="Antigua and Barbuda">
//               Antigua and Barbuda
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Argentina">Argentina</Dropdown.Item>
//             <Dropdown.Item eventKey="Armenia">Armenia</Dropdown.Item>
//             <Dropdown.Item eventKey="Australia">Australia</Dropdown.Item>
//             <Dropdown.Item eventKey="Austria">Austria</Dropdown.Item>
//             <Dropdown.Item eventKey="Azerbaijan">Azerbaijan</Dropdown.Item>
//             <Dropdown.Item eventKey="Bahamas">Bahamas</Dropdown.Item>
//             <Dropdown.Item eventKey="Bahrain">Bahrain</Dropdown.Item>
//             <Dropdown.Item eventKey="Bangladesh">Bangladesh</Dropdown.Item>
//             <Dropdown.Item eventKey="Barbados">Barbados</Dropdown.Item>
//             <Dropdown.Item eventKey="Belarus">Belarus</Dropdown.Item>
//             <Dropdown.Item eventKey="Belgium">Belgium</Dropdown.Item>
//             <Dropdown.Item eventKey="Belize">Belize</Dropdown.Item>
//             <Dropdown.Item eventKey="Benin">Benin</Dropdown.Item>
//             <Dropdown.Item eventKey="Bhutan">Bhutan</Dropdown.Item>
//             <Dropdown.Item eventKey="Bolivia">Bolivia</Dropdown.Item>
//             <Dropdown.Item eventKey="Bosnia and Herzegovina">
//               Bosnia and Herzegovina
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Botswana">Botswana</Dropdown.Item>
//             <Dropdown.Item eventKey="Brazil">Brazil</Dropdown.Item>
//             <Dropdown.Item eventKey="Brunei">Brunei</Dropdown.Item>
//             <Dropdown.Item eventKey="Bulgaria">Bulgaria</Dropdown.Item>
//             <Dropdown.Item eventKey="Burkina Faso">Burkina Faso</Dropdown.Item>
//             <Dropdown.Item eventKey="Burundi">Burundi</Dropdown.Item>
//             <Dropdown.Item eventKey="Cabo Verde">Cabo Verde</Dropdown.Item>
//             <Dropdown.Item eventKey="Cambodia">Cambodia</Dropdown.Item>
//             <Dropdown.Item eventKey="Cameroon">Cameroon</Dropdown.Item>
//             <Dropdown.Item eventKey="Canada">Canada</Dropdown.Item>
//             <Dropdown.Item eventKey="Central African Republic">
//               Central African Republic
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Chad">Chad</Dropdown.Item>
//             <Dropdown.Item eventKey="Chile">Chile</Dropdown.Item>
//             <Dropdown.Item eventKey="China">China</Dropdown.Item>
//             <Dropdown.Item eventKey="Colombia">Colombia</Dropdown.Item>
//             <Dropdown.Item eventKey="Comoros">Comoros</Dropdown.Item>
//             <Dropdown.Item eventKey="Congo">Congo</Dropdown.Item>
//             <Dropdown.Item eventKey="Costa Rica">Costa Rica</Dropdown.Item>
//             <Dropdown.Item eventKey="Croatia">Croatia</Dropdown.Item>
//             <Dropdown.Item eventKey="Cuba">Cuba</Dropdown.Item>
//             <Dropdown.Item eventKey="Cyprus">Cyprus</Dropdown.Item>
//             <Dropdown.Item eventKey="Czech Republic">
//               Czech Republic
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Denmark">Denmark</Dropdown.Item>
//             <Dropdown.Item eventKey="Djibouti">Djibouti</Dropdown.Item>
//             <Dropdown.Item eventKey="Dominica">Dominica</Dropdown.Item>
//             <Dropdown.Item eventKey="Dominican Republic">
//               Dominican Republic
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Ecuador">Ecuador</Dropdown.Item>
//             <Dropdown.Item eventKey="Egypt">Egypt</Dropdown.Item>
//             <Dropdown.Item eventKey="El Salvador">El Salvador</Dropdown.Item>
//             <Dropdown.Item eventKey="Equatorial Guinea">
//               Equatorial Guinea
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Eritrea">Eritrea</Dropdown.Item>
//             <Dropdown.Item eventKey="Estonia">Estonia</Dropdown.Item>
//             <Dropdown.Item eventKey="Eswatini">Eswatini</Dropdown.Item>
//             <Dropdown.Item eventKey="Ethiopia">Ethiopia</Dropdown.Item>
//             <Dropdown.Item eventKey="Fiji">Fiji</Dropdown.Item>
//             <Dropdown.Item eventKey="Finland">Finland</Dropdown.Item>
//             <Dropdown.Item eventKey="France">France</Dropdown.Item>
//             <Dropdown.Item eventKey="Gabon">Gabon</Dropdown.Item>
//             <Dropdown.Item eventKey="Gambia">Gambia</Dropdown.Item>
//             <Dropdown.Item eventKey="Georgia">Georgia</Dropdown.Item>
//             <Dropdown.Item eventKey="Germany">Germany</Dropdown.Item>
//             <Dropdown.Item eventKey="Ghana">Ghana</Dropdown.Item>
//             <Dropdown.Item eventKey="Greece">Greece</Dropdown.Item>
//             <Dropdown.Item eventKey="Grenada">Grenada</Dropdown.Item>
//             <Dropdown.Item eventKey="Guatemala">Guatemala</Dropdown.Item>
//             <Dropdown.Item eventKey="Guinea">Guinea</Dropdown.Item>
//             <Dropdown.Item eventKey="Guinea-Bissau">
//               Guinea-Bissau
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Guyana">Guyana</Dropdown.Item>
//             <Dropdown.Item eventKey="Haiti">Haiti</Dropdown.Item>
//             <Dropdown.Item eventKey="Honduras">Honduras</Dropdown.Item>
//             <Dropdown.Item eventKey="Hungary">Hungary</Dropdown.Item>
//             <Dropdown.Item eventKey="Iceland">Iceland</Dropdown.Item>
//             <Dropdown.Item eventKey="India">India</Dropdown.Item>
//             <Dropdown.Item eventKey="Indonesia">Indonesia</Dropdown.Item>
//             <Dropdown.Item eventKey="Iran">Iran</Dropdown.Item>
//             <Dropdown.Item eventKey="Iraq">Iraq</Dropdown.Item>
//             <Dropdown.Item eventKey="Ireland">Ireland</Dropdown.Item>
//             <Dropdown.Item eventKey="Israel">Israel</Dropdown.Item>
//             <Dropdown.Item eventKey="Italy">Italy</Dropdown.Item>
//             <Dropdown.Item eventKey="Jamaica">Jamaica</Dropdown.Item>
//             <Dropdown.Item eventKey="Japan">Japan</Dropdown.Item>
//             <Dropdown.Item eventKey="Jordan">Jordan</Dropdown.Item>
//             <Dropdown.Item eventKey="Kazakhstan">Kazakhstan</Dropdown.Item>
//             <Dropdown.Item eventKey="Kenya">Kenya</Dropdown.Item>
//             <Dropdown.Item eventKey="Kiribati">Kiribati</Dropdown.Item>
//             <Dropdown.Item eventKey="Korea, North">Korea, North</Dropdown.Item>
//             <Dropdown.Item eventKey="Korea, South">Korea, South</Dropdown.Item>
//             <Dropdown.Item eventKey="Kosovo">Kosovo</Dropdown.Item>
//             <Dropdown.Item eventKey="Kuwait">Kuwait</Dropdown.Item>
//             <Dropdown.Item eventKey="Kyrgyzstan">Kyrgyzstan</Dropdown.Item>
//             <Dropdown.Item eventKey="Laos">Laos</Dropdown.Item>
//             <Dropdown.Item eventKey="Latvia">Latvia</Dropdown.Item>
//             <Dropdown.Item eventKey="Lebanon">Lebanon</Dropdown.Item>
//             <Dropdown.Item eventKey="Lesotho">Lesotho</Dropdown.Item>
//             <Dropdown.Item eventKey="Liberia">Liberia</Dropdown.Item>
//             <Dropdown.Item eventKey="Libya">Libya</Dropdown.Item>
//             <Dropdown.Item eventKey="Liechtenstein">
//               Liechtenstein
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Lithuania">Lithuania</Dropdown.Item>
//             <Dropdown.Item eventKey="Luxembourg">Luxembourg</Dropdown.Item>
//             <Dropdown.Item eventKey="Madagascar">Madagascar</Dropdown.Item>
//             <Dropdown.Item eventKey="Malawi">Malawi</Dropdown.Item>
//             <Dropdown.Item eventKey="Malaysia">Malaysia</Dropdown.Item>
//             <Dropdown.Item eventKey="Maldives">Maldives</Dropdown.Item>
//             <Dropdown.Item eventKey="Mali">Mali</Dropdown.Item>
//             <Dropdown.Item eventKey="Malta">Malta</Dropdown.Item>
//             <Dropdown.Item eventKey="Marshall Islands">
//               Marshall Islands
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Mauritania">Mauritania</Dropdown.Item>
//             <Dropdown.Item eventKey="Mauritius">Mauritius</Dropdown.Item>
//             <Dropdown.Item eventKey="Mexico">Mexico</Dropdown.Item>
//             <Dropdown.Item eventKey="Micronesia">Micronesia</Dropdown.Item>
//             <Dropdown.Item eventKey="Moldova">Moldova</Dropdown.Item>
//             <Dropdown.Item eventKey="Monaco">Monaco</Dropdown.Item>
//             <Dropdown.Item eventKey="Mongolia">Mongolia</Dropdown.Item>
//             <Dropdown.Item eventKey="Montenegro">Montenegro</Dropdown.Item>
//             <Dropdown.Item eventKey="Morocco">Morocco</Dropdown.Item>
//             <Dropdown.Item eventKey="Mozambique">Mozambique</Dropdown.Item>
//             <Dropdown.Item eventKey="Myanmar">Myanmar</Dropdown.Item>
//             <Dropdown.Item eventKey="Namibia">Namibia</Dropdown.Item>
//             <Dropdown.Item eventKey="Nauru">Nauru</Dropdown.Item>
//             <Dropdown.Item eventKey="Nepal">Nepal</Dropdown.Item>
//             <Dropdown.Item eventKey="Netherlands">Netherlands</Dropdown.Item>
//             <Dropdown.Item eventKey="New Zealand">New Zealand</Dropdown.Item>
//             <Dropdown.Item eventKey="Nicaragua">Nicaragua</Dropdown.Item>
//             <Dropdown.Item eventKey="Niger">Niger</Dropdown.Item>
//             <Dropdown.Item eventKey="Nigeria">Nigeria</Dropdown.Item>
//             <Dropdown.Item eventKey="North Macedonia">
//               North Macedonia
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Norway">Norway</Dropdown.Item>
//             <Dropdown.Item eventKey="Oman">Oman</Dropdown.Item>
//             <Dropdown.Item eventKey="Pakistan">Pakistan</Dropdown.Item>
//             <Dropdown.Item eventKey="Palau">Palau</Dropdown.Item>
//             <Dropdown.Item eventKey="Panama">Panama</Dropdown.Item>
//             <Dropdown.Item eventKey="Papua New Guinea">
//               Papua New Guinea
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Paraguay">Paraguay</Dropdown.Item>
//             <Dropdown.Item eventKey="Peru">Peru</Dropdown.Item>
//             <Dropdown.Item eventKey="Philippines">Philippines</Dropdown.Item>
//             <Dropdown.Item eventKey="Poland">Poland</Dropdown.Item>
//             <Dropdown.Item eventKey="Portugal">Portugal</Dropdown.Item>
//             <Dropdown.Item eventKey="Qatar">Qatar</Dropdown.Item>
//             <Dropdown.Item eventKey="Romania">Romania</Dropdown.Item>
//             <Dropdown.Item eventKey="Russia">Russia</Dropdown.Item>
//             <Dropdown.Item eventKey="Rwanda">Rwanda</Dropdown.Item>
//             <Dropdown.Item eventKey="Saint Kitts and Nevis">
//               Saint Kitts and Nevis
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Saint Lucia">Saint Lucia</Dropdown.Item>
//             <Dropdown.Item eventKey="Saint Vincent and the Grenadines">
//               Saint Vincent and the Grenadines
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Samoa">Samoa</Dropdown.Item>
//             <Dropdown.Item eventKey="San Marino">San Marino</Dropdown.Item>
//             <Dropdown.Item eventKey="Sao Tome and Principe">
//               Sao Tome and Principe
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Saudi Arabia">Saudi Arabia</Dropdown.Item>
//             <Dropdown.Item eventKey="Senegal">Senegal</Dropdown.Item>
//             <Dropdown.Item eventKey="Serbia">Serbia</Dropdown.Item>
//             <Dropdown.Item eventKey="Seychelles">Seychelles</Dropdown.Item>
//             <Dropdown.Item eventKey="Sierra Leone">Sierra Leone</Dropdown.Item>
//             <Dropdown.Item eventKey="Singapore">Singapore</Dropdown.Item>
//             <Dropdown.Item eventKey="Slovakia">Slovakia</Dropdown.Item>
//             <Dropdown.Item eventKey="Slovenia">Slovenia</Dropdown.Item>
//             <Dropdown.Item eventKey="Solomon Islands">
//               Solomon Islands
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Somalia">Somalia</Dropdown.Item>
//             <Dropdown.Item eventKey="South Africa">South Africa</Dropdown.Item>
//             <Dropdown.Item eventKey="South Sudan">South Sudan</Dropdown.Item>
//             <Dropdown.Item eventKey="Spain">Spain</Dropdown.Item>
//             <Dropdown.Item eventKey="Sri Lanka">Sri Lanka</Dropdown.Item>
//             <Dropdown.Item eventKey="Sudan">Sudan</Dropdown.Item>
//             <Dropdown.Item eventKey="Suriname">Suriname</Dropdown.Item>
//             <Dropdown.Item eventKey="Sweden">Sweden</Dropdown.Item>
//             <Dropdown.Item eventKey="Switzerland">Switzerland</Dropdown.Item>
//             <Dropdown.Item eventKey="Syria">Syria</Dropdown.Item>
//             <Dropdown.Item eventKey="Taiwan">Taiwan</Dropdown.Item>
//             <Dropdown.Item eventKey="Tajikistan">Tajikistan</Dropdown.Item>
//             <Dropdown.Item eventKey="Tanzania">Tanzania</Dropdown.Item>
//             <Dropdown.Item eventKey="Thailand">Thailand</Dropdown.Item>
//             <Dropdown.Item eventKey="Timor-Leste">Timor-Leste</Dropdown.Item>
//             <Dropdown.Item eventKey="Togo">Togo</Dropdown.Item>
//             <Dropdown.Item eventKey="Tonga">Tonga</Dropdown.Item>
//             <Dropdown.Item eventKey="Trinidad and Tobago">
//               Trinidad and Tobago
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Tunisia">Tunisia</Dropdown.Item>
//             <Dropdown.Item eventKey="Turkey">Turkey</Dropdown.Item>
//             <Dropdown.Item eventKey="Turkmenistan">Turkmenistan</Dropdown.Item>
//             <Dropdown.Item eventKey="Tuvalu">Tuvalu</Dropdown.Item>
//             <Dropdown.Item eventKey="Uganda">Uganda</Dropdown.Item>
//             <Dropdown.Item eventKey="Ukraine">Ukraine</Dropdown.Item>
//             <Dropdown.Item eventKey="United Arab Emirates">
//               United Arab Emirates
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="United Kingdom">
//               United Kingdom
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="United States">
//               United States
//             </Dropdown.Item>
//             <Dropdown.Item eventKey="Uruguay">Uruguay</Dropdown.Item>
//             <Dropdown.Item eventKey="Uzbekistan">Uzbekistan</Dropdown.Item>
//             <Dropdown.Item eventKey="Vanuatu">Vanuatu</Dropdown.Item>
//             <Dropdown.Item eventKey="Vatican City">Vatican City</Dropdown.Item>
//             <Dropdown.Item eventKey="Venezuela">Venezuela</Dropdown.Item>
//             <Dropdown.Item eventKey="Vietnam">Vietnam</Dropdown.Item>
//             <Dropdown.Item eventKey="Yemen">Yemen</Dropdown.Item>
//             <Dropdown.Item eventKey="Zambia">Zambia</Dropdown.Item>
//             <Dropdown.Item eventKey="Zimbabwe">Zimbabwe</Dropdown.Item>
//           </Dropdown.Menu>
//         </Dropdown>
//         <Button
//           className="w-100"
//           variant="primary"
//           type="submit"
//           onClick={Register}
//         >
//           Submit
//         </Button>
       
//       </Form>
//     </div>
//   );
// }
