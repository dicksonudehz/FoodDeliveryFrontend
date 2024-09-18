import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <div className="header-contents">
        <h2>order your favorite food here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sed
          laborum ab nesciunt similique mollitia, incidunt excepturi vitae natus
          pariatur quae enim distinctio, repellat asperiores qui optio ratione
          facere eaque! 
        </p>
        <button onClick={() => navigate("/myorders")}>view order</button>
      </div>
    </div>
  );
};

export default Header;
