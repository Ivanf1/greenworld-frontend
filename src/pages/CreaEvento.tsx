import { useState } from "react";
import { Formik } from "formik";
import { MultiSelect } from "react-multi-select-component";
import FileInput from "../components/FileInput";

interface FormValues {
  nome: string;
  data: string;
  ora: string;
  numeroPartecipanti: string;
  sponsors: string;
  citta: string;
  via: string;
  civico: string;
  files: string;
}

interface MultiselectOption {
  value: any;
  label: string;
  key?: string;
  disabled?: boolean;
}

const CreaEvento = () => {
  const [files, setFiles] = useState<{ preview: string }[]>([]);
  const initialFormValues = {
    nome: "",
    data: "",
    ora: "",
    numeroPartecipanti: "",
    sponsors: "",
    citta: "",
    via: "",
    civico: "",
    files: "",
  };

  const options = [
    { value: "peroni", label: "Peroni" },
    { value: "bmw", label: "BMW" },
    { value: "ciro", label: "Pizzeria Ciro" },
  ];

  const selectLocals = {
    allItemsAreSelected: "Tutti gli elementi selezionati",
    clearSearch: "Annulla",
    clearSelected: "Deseleziona tutto",
    noOptions: "Nessuna opzione",
    search: "Cerca",
    selectAll: "Seleziona tutto",
    selectAllFiltered: "Seleziona tutto (filtro)",
    selectSomeItems: "Seleziona gli sponsor...",
    create: "Crea",
  };

  const [selected, setSelected] = useState<MultiselectOption[]>([]);

  return (
    <div className="form-background min-h-full py-10 bg-primary-tint">
      <div className="card flex flex-col items-center p-6 md:p-[60px] max-w-[95%] md:max-w-2xl md:w-2xl mx-auto rounded-lg">
        <h4 className="self-start mb-8">Crea un evento</h4>
        <Formik
          initialValues={initialFormValues}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};
            if (!values.nome) {
              errors.nome = "Inserisci il nome dell'evento";
            }
            if (!values.data) {
              errors.data = "Inserisci la data";
            } else if (!values.data.match(/^\d{4}-\d{2}-\d{2}$/)) {
              errors.data = "Inserisci una data valida";
            }
            if (!values.ora) {
              errors.ora = "Inserisci l'ora";
            } else if (!values.ora.match(/^\d{2}:\d{2}$/)) {
              errors.ora = "Inserisci un'ora valida";
            }
            if (!values.numeroPartecipanti) {
              errors.numeroPartecipanti = "Inserisci il massimo numero di partecipanti";
            } else {
              if (parseInt(values.numeroPartecipanti) < 10) {
                errors.numeroPartecipanti =
                  "Inserici un numero di partecipanti valido (maggiore o uguale a 10)";
              }
            }
            if (!values.citta) {
              errors.citta = "Inserisci la città";
            }
            if (!values.via) {
              errors.via = "Inserisci la via";
            }
            if (values.sponsors.length === 0) {
              errors.sponsors = "Seleziona almeno uno sponsor";
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
                <label className="flex required" htmlFor="nome">
                  Nome evento
                </label>
                <input
                  className="input"
                  type="text"
                  name="nome"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nome}
                />
                {errors.nome && touched.nome && errors.nome && (
                  <div className="form-error">{errors.nome}</div>
                )}
              </div>
              <div className="my-3 md:grid md:grid-cols-2 md:gap-5">
                <div className="my-3 md:my-0">
                  <label className="flex required" htmlFor="data">
                    Data
                  </label>
                  <input
                    className="input"
                    type="date"
                    name="data"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.data}
                  />
                  {errors.data && touched.data && errors.data && (
                    <div className="form-error">{errors.data}</div>
                  )}
                </div>
                <div className="my-3 md:my-0">
                  <label className="flex required" htmlFor="ora">
                    Ora
                  </label>
                  <input
                    className="input"
                    type="time"
                    name="ora"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.ora}
                  />
                  {errors.ora && touched.ora && errors.ora && (
                    <div className="form-error">{errors.ora}</div>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <label className="flex required" htmlFor="numeroPartecipanti">
                  Massimo numero di partecipanti
                </label>
                <input
                  className="input"
                  type="number"
                  name="numeroPartecipanti"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.numeroPartecipanti}
                />
                {errors.numeroPartecipanti &&
                  touched.numeroPartecipanti &&
                  errors.numeroPartecipanti && (
                    <div className="form-error">{errors.numeroPartecipanti}</div>
                  )}
              </div>
              <div className="my-3">
                <label className="flex required" htmlFor="sponsor">
                  Elenco sponsor
                </label>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Seleziona gli sponsor"
                  overrideStrings={selectLocals}
                />
                {errors.sponsors && touched.sponsors && errors.sponsors && selected.length < 1 && (
                  <div className="form-error">{errors.sponsors}</div>
                )}
              </div>
              <div className="mt-3">
                <label className="flex required" htmlFor="foto">
                  Carica foto
                </label>
                <FileInput files={files} setFiles={setFiles} maxFiles={1} />
                {errors.files && touched.files && errors.files && files.length < 1 && (
                  <div className="form-error">{errors.files}</div>
                )}
              </div>
              <div className="mt-3">
                <label className="flex required" htmlFor="citta">
                  Città
                </label>
                <input
                  className="input"
                  type="text"
                  name="citta"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.citta}
                />
                {errors.citta && touched.citta && errors.citta && (
                  <div className="form-error">{errors.citta}</div>
                )}
              </div>
              <div className="mt-3">
                <label className="flex required" htmlFor="via">
                  Via
                </label>
                <input
                  className="input"
                  type="text"
                  name="via"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.via}
                />
                {errors.via && touched.via && errors.via && (
                  <div className="form-error">{errors.via}</div>
                )}
              </div>
              <div className="mt-3">
                <label className="block" htmlFor="civico">
                  Civico
                </label>
                <input
                  className="input"
                  type="text"
                  name="civico"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.civico}
                />
                {errors.civico && touched.civico && errors.civico && (
                  <div className="form-error">{errors.civico}</div>
                )}
              </div>

              <div className="flex justify-end mt-10">
                <button className="primary w-full md:w-auto" type="submit" disabled={isSubmitting}>
                  Crea
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreaEvento;
