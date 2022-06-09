import React, { useState } from "react";
import { Formik } from "formik";
import FileInput from "../components/FileInput";

interface FormValues {
  nomeAzienda: string;
  referenze: string;
  email: string;
  telefono: string;
  url: string;
  files: string;
}

const CandidaturaSponsor = () => {
  const [files, setFiles] = useState<{ preview: string }[]>([]);
  const initialFormValues: FormValues = {
    nomeAzienda: "",
    referenze: "",
    email: "",
    telefono: "",
    url: "",
    files: "",
  };

  return (
    <div className="form-background min-h-full py-10 bg-primary-tint">
      <div className="card flex flex-col items-center p-6 md:p-[60px] max-w-[95%] md:max-w-2xl md:w-2xl mx-auto rounded-lg">
        <h4 className="self-start mb-8">Candidati come sponsor</h4>
        <Formik
          initialValues={initialFormValues}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};
            if (!values.nomeAzienda) {
              errors.nomeAzienda = "Inserisci il nome della tua azienda";
            }
            if (!values.referenze) {
              errors.referenze = "Inserisci le tue referenze";
            }
            if (!values.email) {
              errors.email = "Inserisci l'email della tua azienda";
            }
            if (!values.telefono) {
              errors.telefono = "Inserisci il telefono della tua azienda";
            }
            if (!values.url) {
              errors.url = "Inserisci l'url del sito web della tua azienda";
            }
            if (files.length < 1) {
              errors.files = "Carica il file del tuo logo";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {}}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mt-3">
                <label className="flex required" htmlFor="nomeAzienda">
                  Nome azienda
                </label>
                <input
                  className="input"
                  type="text"
                  name="nomeAzienda"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nomeAzienda}
                />
              </div>
              {errors.nomeAzienda && touched.nomeAzienda && errors.nomeAzienda && (
                <div className="form-error">{errors.nomeAzienda}</div>
              )}
              <div className="mt-3">
                <label className="flex required" htmlFor="referenze">
                  Referenze
                </label>
                <input
                  className="input"
                  type="text"
                  name="referenze"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.referenze}
                />
              </div>
              {errors.referenze && touched.referenze && errors.referenze && (
                <div className="form-error">{errors.referenze}</div>
              )}
              <div className="mt-3">
                <label className="flex required" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email && (
                  <div className="form-error">{errors.email}</div>
                )}
              </div>
              <div className="mt-3">
                <label className="flex required" htmlFor="telefono">
                  Telefono
                </label>
                <input
                  className="input"
                  type="text"
                  name="telefono"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telefono}
                />
                {errors.telefono && touched.telefono && errors.telefono && (
                  <div className="form-error">{errors.telefono}</div>
                )}
              </div>
              <div className="mt-3">
                <label className="flex required" htmlFor="url">
                  URL sito web
                </label>
                <input
                  className="input"
                  type="text"
                  name="url"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.url}
                />
                {errors.url && touched.url && errors.url && (
                  <div className="form-error">{errors.url}</div>
                )}
              </div>
              <div className="mt-3">
                <label className="flex required" htmlFor="logo">
                  Carica il tuo logo
                </label>
                <FileInput files={files} setFiles={setFiles} maxFiles={1} />
                {errors.files && touched.files && errors.files && files.length < 1 && (
                  <div className="form-error">{errors.files}</div>
                )}
              </div>
              <div className="flex justify-end mt-10">
                <button className="primary w-full md:w-auto" type="submit" disabled={isSubmitting}>
                  Candidati
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CandidaturaSponsor;
