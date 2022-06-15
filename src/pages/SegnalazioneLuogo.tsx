import { useState } from "react";
import { Formik } from "formik";
import FileInput from "../components/FileInput";

interface FormValues {
  citta: string;
  strada: string;
  commenti: string;
  files: string;
}

const SegnalazioneLuogo = () => {
  const [files, setFiles] = useState<{ preview: string }[]>([]);
  const initialFormValues: FormValues = {
    citta: "",
    strada: "",
    commenti: "",
    files: "",
  };

  return (
    <div className="form-background min-h-full py-10 bg-primary-tint">
      <div className="card flex flex-col items-center p-6 md:p-[60px] max-w-[95%] md:max-w-2xl md:w-2xl mx-auto rounded-lg">
        <h4 className="self-start mb-8">Segnala un luogo</h4>
        <Formik
          initialValues={initialFormValues}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};
            if (!values.citta) {
              errors.citta = "Inserisci la citta";
            }
            if (!values.strada) {
              errors.strada = "Inserisci la strada";
            }
            if (files.length < 1) {
              errors.files = "Carica almeno un file";
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
                <label className="flex required" htmlFor="citta">
                  Città
                </label>
                <input
                  className="input"
                  type="text"
                  name="citta"
                  id="citta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.citta}
                  aria-errormessage="cittaError"
                  aria-required="true"
                />
              </div>
              {errors.citta && touched.citta && errors.citta && (
                <div className="form-error" id="cittaError">
                  {errors.citta}
                </div>
              )}
              <div className="mt-3">
                <label className="flex required" htmlFor="strada">
                  Strada
                </label>
                <input
                  className="input"
                  type="text"
                  name="strada"
                  id="strada"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.strada}
                  aria-errormessage="stradaError"
                  aria-required="true"
                />
              </div>
              {errors.strada && touched.strada && errors.strada && (
                <div className="form-error" id="stradaError">
                  {errors.strada}
                </div>
              )}
              <div className="mt-3">
                <label className="block" htmlFor="commenti">
                  Commenti
                </label>
                <textarea
                  className="input"
                  name="commenti"
                  id="commenti"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.commenti}
                />
              </div>
              <div className="mt-3">
                <label className="flex required" htmlFor="foto">
                  Carica foto
                </label>
                <FileInput
                  files={files}
                  setFiles={setFiles}
                  maxFiles={10}
                  id="foto"
                  aria-required="true"
                  aria-errormessage="fotoError"
                />
                {errors.files && touched.files && errors.files && files.length < 1 && (
                  <div className="form-error" id="fotoError">
                    {errors.files}
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-10">
                <button className="primary w-full md:w-auto" type="submit" disabled={isSubmitting}>
                  Invia segnalazione
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SegnalazioneLuogo;
