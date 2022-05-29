const CandidaturaSponsor = () => {
  return (
    <div className="form-background min-h-screen py-10 bg-primary-tint">
      <div className="card flex flex-col items-center p-6 md:p-[60px] max-w-[95%] md:max-w-2xl mx-auto rounded-lg">
        <form className="w-full">
          <h4 className="mb-8">Candidati come sponsor</h4>
          <div className="my-3">
            <label className="block" htmlFor="azienda">
              Nome azienda
            </label>
            <input className="input" type="text" name="azienda" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="referenze">
              Referenze
            </label>
            <input className="input" type="text" name="referenze" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="email">
              E-mail
            </label>
            <input className="input" type="email" name="email" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="telefono">
              Telefono
            </label>
            <input className="input" type="email" name="telefono" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="sitoweb">
              URL sito web
            </label>
            <input className="input" type="email" name="sitoweb" required />
          </div>
          <div className="my-3">
            <label className="block" htmlFor="logo">
              Carica il tuo logo
            </label>
            <input className="input" type="file" name="logo" />
          </div>
          <div className="flex justify-end mt-[20px]">
            <button className="primary w-full md:w-auto">Candidati</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidaturaSponsor;
