import "./footer.css";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-conter">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo harum
            assumenda veniam fugit exercitationem natus molestias autem earum
            corporis! Sit ad ratione nesciunt blanditiis quod voluptate quam
            doloribus suscipit laboriosam!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedIn_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>company</h2>
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right ">
          <h2>get in touch</h2>
          <ul>
            <li>+234 708 456 3424</li>
            <li>contactus@foodie@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">copyright@2024 all right reserved</p>
    </div>
  );
};

export default Footer;
