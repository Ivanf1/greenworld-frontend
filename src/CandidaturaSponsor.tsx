const CandidaturaSponsor = () => {
  return (
    <div className="form-background">
      <div className="form-card">
        <form className="">
          <h4 className="mb-8">Candidati come sponsor</h4>
          <div className="form-field">
            <label className="form-label" htmlFor="azienda">
              Nome azienda
            </label>
            <input className="text-input" type="text" name="azienda" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="referenze">
              Referenze
            </label>
            <input className="text-input" type="text" name="referenze" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input className="text-input" type="email" name="email" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="telefono">
              Telefono
            </label>
            <input className="text-input" type="email" name="telefono" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="sitoweb">
              URL sito web
            </label>
            <input className="text-input" type="email" name="sitoweb" />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="logo">
              Carica il tuo logo
            </label>
            <input className="text-input" type="file" name="logo" />
          </div>
          <div className="flex justify-end mt-[20px]">
            <button className="primary">Candidati</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidaturaSponsor;
