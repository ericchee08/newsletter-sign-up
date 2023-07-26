import { useState } from "react";

const Subscribe = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    //when user submits the onSubscribe is called with the routing logic

    //send the email to subscribed confirmation component

    setEmail("");
  };

  return (
    <form className="subscribe" onSubmit={onSubmit}>
      <label>Email Address</label>
      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="button" type="submit" value="Subscribe to monthly newsletter"></input>
    </form>
  );
};

export default Subscribe;
