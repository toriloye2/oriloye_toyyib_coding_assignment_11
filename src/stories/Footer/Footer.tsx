import React from 'react';
import styled from 'styled-components';
import type { FooterProps } from "./Footer.types"; // Relative path to the types file


// Styled components for footer elements
const FooterContainer = styled.footer`
  background-color: #f1f1f1;
  padding: 30px 0;
  text-align: center;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`;

const StyledLink = styled.a`
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  }
`;



class Footer extends React.Component<FooterProps> {
  render() {
    const { copyrightText = '© 2024 Your Name', socialLinks = [] } = this.props;

    return (
      <FooterContainer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="footer-contact">
                <h3>Contact Me</h3>
                <p>
                  <a href="mailto:youremail@domain.com">
                    <i className="fa fa-envelope" /> EMAIL:taiyeolabamiji@gmail.com
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/socialmediatoday/?hl=en">
                    <i className="fa fa-instagram" /> INSTA:thoib_98
                  </a>
                </p>
                <p>
                  <a href="https://www.github.com/socialmediatoday/?hl=en">
                    <i className="fa fa-github" /> GITHUB:toriloye2
                  </a>
                </p>
                {/* ... other contact details (if any) */}
                {socialLinks.map((link) => (
                  <StyledLink key={link.url} href={link.url}>
                    <i className={link.icon} /> {link.label}
                  </StyledLink>
                ))}
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="footer-links">
                <h3>Site Map</h3>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="footer-address">
                <h3>My CV</h3>
                <p>
                  <a href="/cv">Download CV</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <CopyrightText>{copyrightText}</CopyrightText>
      </FooterContainer>
    );
  }
}

export default Footer;
