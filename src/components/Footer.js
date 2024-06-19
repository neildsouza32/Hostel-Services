import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://instagram.com/fcrit_officialvashi?igshid=MzRlODBiNWFlZA==/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/your-twitter-profile/">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/your-facebook-page/">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; hostel.fcrit.ac.in <br /> Developed by Neil Dsouza, Om Ghadge, Aniket Kittur, Bennett Standler</p>
    </div>
  );
}

export default Footer;
