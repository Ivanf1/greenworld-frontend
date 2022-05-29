const SegnalazioneLuogo = () => {
  return (
    <div className="form-background min-h-full py-10 bg-primary-tint">
      <div className="card flex flex-col items-center p-6 md:p-[60px] max-w-[95%] md:max-w-2xl md:w-2xl mx-auto rounded-lg">
        <form className="w-full">
          <h4 className="mb-8">Segnala un luogo</h4>
          <div className="my-3">
            <label className="block" htmlFor="citta">
              Città
            </label>
            <input className="input" type="text" name="citta" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="strada">
              Strada
            </label>
            <input className="input" type="text" name="strada" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="civico">
              Civico
            </label>
            <input className="input" type="text" name="civico" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="commenti">
              Commenti
            </label>
            <textarea className="input" name="commenti"></textarea>
          </div>
          <div className="my-3">
            <label className="block" htmlFor="foto">
              Carica foto
            </label>
            <input className="input" type="file" name="foto" />
          </div>
          <div className="flex justify-end mt-10">
            <button className="primary w-full md:w-auto">Segnala</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SegnalazioneLuogo;
