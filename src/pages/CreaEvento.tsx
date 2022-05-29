import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const CreaEvento = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
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

  const [selected, setSelected] = useState([]);

  return (
    <div className="form-background min-h-full py-10 bg-primary-tint">
      <div className="card flex flex-col items-center p-6 md:p-[60px] max-w-[95%] md:max-w-2xl md:w-2xl mx-auto rounded-lg">
        <form className="w-full">
          <h4 className="mb-8">Crea un evento</h4>
          <div className="my-3">
            <label className="block" htmlFor="nome">
              Nome evento
            </label>
            <input className="input" type="text" name="nome" required />
          </div>
          <div className="my-3 md:grid md:grid-cols-2 md:gap-5">
            <div className="my-3 md:my-0">
              <label className="block" htmlFor="data">
                Data
              </label>
              <input className="input" type="date" name="data" required />
            </div>
            <div className="my-3 md:my-0">
              <label className="block" htmlFor="ora">
                Ora
              </label>
              <input className="input" type="time" name="ora" required />
            </div>
          </div>
          <div className="my-3">
            <label className="block" htmlFor="partecipanti">
              Numero partecipanti
            </label>
            <input className="input" type="number" name="partecipanti" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="sponsor">
              Elenco sponsor
            </label>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Seleziona gli sponsor"
              overrideStrings={selectLocals}
            />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="foto">
              Carica foto
            </label>
            <input className="input" type="file" name="foto" />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="citta">
              Città
            </label>
            <input className="input" type="text" name="citta" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="via">
              Via
            </label>
            <input className="input" type="text" name="via" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="civico">
              Civico
            </label>
            <input className="input" type="text" name="civico" required />
          </div>
          <div className="flex justify-end mt-10">
            <button className="primary w-full md:w-auto">Crea evento</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreaEvento;
