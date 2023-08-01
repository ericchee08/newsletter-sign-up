import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import SharedButton from "../SharedButton";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

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
      <Link className="success-link" to="/success">
        <SharedButton disabled={isSubmitting} value={"Subscribe to monthly newsletter"} />
      </Link>
    </form>
  );
};

export default Subscribe;
