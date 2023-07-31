import iconSuccess from "../assets/images/icon-success.svg";

const Information = () => {
  return (
    <div className="information">
      <h1>Stay updated!</h1>
      <p id="sub-heading">Join 60,000+ product managers receiving monthly updates on: </p>
      <p>
        <img className="icon-success" src={iconSuccess} alt="Success Icon" />
        Product discovery and building what matters
      </p>
      <p>
        <img className="icon-success" src={iconSuccess} alt="Success Icon" />
        Measuring to ensure updates are a success
      </p>
      <p>
        <img className="icon-success" src={iconSuccess} alt="Success Icon" />
        And much more!
      </p>
    </div>
  );
};

export default Information;
