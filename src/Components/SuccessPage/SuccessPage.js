import SharedButton from "../SharedButton";
import { Link, useLocation } from "react-router-dom";
import iconList from "../assets/images/icon-list.svg";

const SuccessPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email") || "No email entered";

  return (
    <div className="success-container">
      <div className="success-header">
        <div className="success-header-text">
          <img className="icon-list" src={iconList} alt="" />
          Thanks for subscribing!
        </div>
      </div>
      <div className="success-info">
        <div className="success-info-text">
          A confirmation email has been sent to <br /> <span style={{ fontWeight: "bold" }}>{email}</span> Please open it and click the button inside to confirm your
          subscription
        </div>
      </div>
      <div className="dismiss-button">
        <Link to="/">
          <SharedButton value={"Dismiss message"}></SharedButton>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
