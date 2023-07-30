import React, { useState } from 'react';
import { Logo, Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarEle';
import { FaChevronDown } from 'react-icons/fa'; // Import the dropdown icon

const Navbar = () => {
  // State to track the selected language
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  // Function to handle language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <>
      <Nav>
        <Bars />
        <Logo>UP School</Logo>
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/learning' activeStyle>
            Learning Program
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/admission' activeStyle>
            Admission
          </NavLink>
          {/* Dropdown Menu */}
          <div style={{ position: 'relative' }}>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              style={{
                appearance: 'none', // Remove default styling
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#808080',
                cursor: 'pointer',
                padding: '0 1rem', // Adjust padding for the arrow space
                fontSize: '16px',
                alignItems: 'flex-end'
              }}
            >
              <option value="English" disabled>
                {selectedLanguage}
              </option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <FaChevronDown
              style={{
                alignItems: 'flex-end',
                position: 'absolute',
                top: '50%',
                right: '0.5rem',
                transform: 'translateY(-50%)',
                color: '#808080', // Set arrow color to match the text color
              }}
            />
          </div>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Log In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;



// import React from 'react';
// import { Logo,
// Nav,
// NavLink,
// Bars,
// NavMenu,
// NavBtn,
// NavBtnLink,
// } from './NavbarEle';

// const Navbar = () => {
// return (
// 	<>
// 	<Nav>
// 		<Bars />
//         <Logo>UP School</Logo>
// 		<NavMenu>
// 		<NavLink to='/home' activeStyle>
// 			Home
// 		</NavLink>
// 		<NavLink to='/learning' activeStyle>
// 			Learning Program
// 		</NavLink>
// 		<NavLink to='/about' activeStyle>
// 			About Us
// 		</NavLink>
// 		<NavLink to='/admission' activeStyle>
// 			Admission
// 		</NavLink>
// 		{/* Second Nav */}
// 		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
// 		</NavMenu>
// 		<NavBtn>
// 		<NavBtnLink to='/login'>Log In</NavBtnLink>
// 		</NavBtn>
// 	</Nav>
// 	</>
// );
// };

// export default Navbar;
