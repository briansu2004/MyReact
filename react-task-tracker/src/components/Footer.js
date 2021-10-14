import { Link } from "react-router-dom";

const Footer = () => {
  // <!-- a href="/about">About</a -->
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <p>
        <Link to="/about">About</Link>
      </p>
    </footer>
  );
};

export default Footer;
