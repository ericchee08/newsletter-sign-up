import { useFormik } from "formik";

const Subscribe = ({ onSubscribe }) => {
  const { values, handleChange } = useFormik({
    initialValues: {
      email: "",
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    //when user submits the onSubscribe is called with the routing logic

    //send the email to subscribed confirmation component
  };

  return (
    <form className="subscribe" onSubmit={onSubmit}>
      <label>Email Address</label>
      <input id="email" type="email" value={values.email} onChange={handleChange} />
      <input className="button" type="submit" value="Subscribe to monthly newsletter"></input>
    </form>
  );
};

export default Subscribe;
