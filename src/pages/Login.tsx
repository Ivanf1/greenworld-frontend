import { Formik } from "formik";
import { useCurrentUser } from "../context/userContext";
import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { fetchCurrentUser } = useCurrentUser();
  const initialFormValues: FormValues = {
    email: "",
    password: "",
  };

  return (
    <div className="form-background min-h-full py-10 bg-primary-tint">
      <div className="card flex flex-col items-center p-6 md:p-[60px] max-w-[95%] md:max-w-2xl md:w-2xl mx-auto rounded-lg">
        <h4 className="self-start mb-8">Effettua il login</h4>
        <Formik
          initialValues={initialFormValues}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};
            if (!values.email) {
              errors.email = "Inserisci l'email";
            }
            if (!values.password) {
              errors.password = "Inserisci la password";
            }
            return errors;
          }}
          onSubmit={() => {
            AuthService.login();
            fetchCurrentUser();
            navigate("/");
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mt-3">
                <label className="flex required" htmlFor="email">
                  Email
                </label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  aria-errormessage="emailError"
                  aria-required="true"
                />
              </div>
              {errors.email && touched.email && errors.email && (
                <div className="form-error" id="emailError">
                  {errors.email}
                </div>
              )}
              <div className="mt-3">
                <label className="flex required" htmlFor="password">
                  Password
                </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  aria-errormessage="passwordError"
                  aria-required="true"
                />
              </div>
              {errors.password && touched.password && errors.password && (
                <div className="form-error" id="passwordError">
                  {errors.password}
                </div>
              )}
              <div className="flex justify-end mt-10">
                <button className="primary w-full md:w-auto" type="submit">
                  Login
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
