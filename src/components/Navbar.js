import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

function Navb({ lang, lan, Mode, mode }) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Check if the user is scrolling down
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setShowNavbar(false); // Hide navbar
    } else {
      setShowNavbar(true);
    }

    // Update last scroll position
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`fixed-top ${showNavbar ? 'show' : 'hide'}`}
      style={{
        transition: 'top 0.7s', // Smooth transition
        top: showNavbar ? '0' : '-100px', // Hide or show the navbar based on scroll
        padding: "0",
        background: mode==="Dark"?"linear-gradient(rgb(105, 117, 101, 0.3) 20%, rgba(255, 255, 255, 0))":"linear-gradient( rgba(0, 0, 0, 0.2) 20%, rgba(255, 255, 255, 0))",
      }}
    >
      <Container style={{ marginLeft: "0" }}>
        <Navbar.Brand href="/">
          <img
            src={"../../images/logo.png"}
            alt="Agribits"
            style={{ height: '100px', marginLeft: "20px" }} // Adjust the height as needed
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link 
              href="/" 
              style={{ 
                fontWeight: 'bold', 
                fontSize: '22px', 
                color: mode === "Light" ? "white" : "black" 
              }}
            >
              {lan === "العربية" ? "Home":"الصفحة الرئيسية" }
            </Nav.Link>
            <Nav.Link 
              style={{ 
                fontWeight: 'bold', 
                fontSize: '22px', 
                color: mode === "Light" ? "white" : "black" 
              }}
            >
              {lan === "العربية" ? "About":"خدمات" }
            </Nav.Link>
         
            <NavDropdown 
              title={
                <span 
                  style={{ 
                    fontWeight: 'bold', 
                    fontSize: '22px', // Increased font size for the title
                    color: mode === "Light" ? "white" : "black" 
                   
                  }}
                >
                  {lan === "العربية" ?  "Product":"خدمات"}
                </span>
              } 
              id="collapsible-nav-dropdown"
            >
                <NavDropdown.Item 
                  href="Product" 
                  style={{ 
                    fontSize: '16px', 
                    color: mode === "Light" ? "black":"white", 
                    backgroundColor: mode === "Light" ?  "#f8f9fa":"#3C3D37" 
                    ,  textAlign: lan === "العربية" ?  "left":"right" ,// Change item background color
                  }}
                >
                  {lan === "العربية" ?  "Poultry":"الدواجن" } <i class="bi bi-feather"></i>
                </NavDropdown.Item>
              <NavDropdown.Item 
                href="/" 
                style={{ 
                  fontSize: '16px', 
                  color: mode === "Light" ? "black":"white", 
                  backgroundColor: mode === "Light" ? "#f8f9fa":"#3C3D37" 
                  ,  textAlign: lan === "العربية" ? "left":"right" ,// Change item background color
                }}
              >
               {lan === "العربية" ?  "Cattle (soon)":"(قريبا)الماشية" } 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link 
              onClick={lang} 
              style={{ 
                fontWeight: 'bold', 
                fontSize: '18px', 
                color: mode === "Light" ? "white" : "black" 
              }}
            >
              {lan}
            </Nav.Link>
            <Nav.Link 
              eventKey={2} 
              onClick={Mode} 
              style={{ 
                fontWeight: 'bold', 
                fontSize: '18px', 
                color: mode === "Dark" ? "white" : "black" 
              }}
            >
              {mode === "Dark" ? (
                <i className="bi bi-sun" style={{ fontSize: '25px',marginLeft:"10px" }} /> // Sun icon
              ) : (
                <i className="bi bi-moon" style={{ fontSize: '25px',marginLeft:"10px" }} /> // Moon icon
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
