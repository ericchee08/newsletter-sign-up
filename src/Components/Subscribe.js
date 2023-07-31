import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  //when user submits the onSubscribe is called with the routing logic

  //send the email to subscribed confirmation component

  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Subscribe = ({ onSubscribe }) => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <form className="subscribe" onSubmit={handleSubmit}>
      <div className="email-label">
        <label>Email Address</label>
        {errors.email && touched.email && <span className="error">Valid email required</span>}
      </div>
      <input id="email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : ""} />
      <input disabled={isSubmitting} className="button" type="submit" value="Subscribe to monthly newsletter"></input>
    </form>
  );
};

export default Subscribe;
