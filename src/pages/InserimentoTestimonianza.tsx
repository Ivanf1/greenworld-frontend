import { useState } from "react";
import profileImg from "../assets/profilo.png";
import { Formik } from "formik";
import FileInput from "../components/FileInput";

interface FormValues {
  testimonianza: string;
  files: { preview: string }[];
}

const InserimentoTestimonianza = () => {
  const [files, setFiles] = useState<{ preview: string }[]>([]);
  const initialFormValues: FormValues = {
    testimonianza: "",
    files,
  };

  return (
    <div className="form-background min-h-full py-10 bg-primary-tint">
      <div className="card flex flex-col items-center p-6 md:p-[60px] max-w-[95%] md:max-w-2xl md:w-2xl mx-auto rounded-lg">
        <div className="flex items-start flex-col self-start">
          <h3 className="mb-8">Inserisci una testimonianza</h3>
          <div className="flex space-x-5 items-center my-10">
            <img className="w-[100px] h-[100px]" src={profileImg} alt="" />
            <span className="text-sm font-semibold">Francesca Brignano</span>
          </div>
        </div>

        <Formik
          initialValues={initialFormValues}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};
            if (!values.testimonianza) {
              errors.testimonianza = "Inserisci la testimonianza";
            }
            return errors;
          }}
          onSubmit={(values, { validateForm }) => {
            validateForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mt-3">
                <label className="flex required" htmlFor="testimonianza">
                  Testimonianza
                </label>
                <textarea
                  className="input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.testimonianza}
                  name="testimonianza"
                  id="testimonianza"
                  aria-errormessage="testimonianzaError"
                  aria-required="true"
                />
              </div>
              {errors.testimonianza && touched.testimonianza && errors.testimonianza && (
                <div className="form-error" id="testimonianzaError">
                  {errors.testimonianza}
                </div>
              )}
              <div className="my-3">
                <label className="block" htmlFor="foto">
                  Carica foto
                </label>
                <FileInput files={files} setFiles={setFiles} maxFiles={10} id="foto" />
              </div>
              <div className="flex justify-end mt-10">
                <button className="primary w-full md:w-auto" type="submit" disabled={isSubmitting}>
                  Pubblica testimonianza
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default InserimentoTestimonianza;
