import profileImg from "../assets/profilo.png";

const InserimentoTestimonianza = () => {
  return (
    <div className="form-background min-h-full py-10 bg-primary-tint">
      <div className="card flex flex-col items-center p-6 md:p-[60px] max-w-[95%] md:max-w-2xl md:w-2xl mx-auto rounded-lg">
        <form className="w-full">
          <h3 className="mb-8">Inserisci una testimonianza</h3>
          <div className="flex space-x-5 items-center my-10">
            <img className="w-[100px] h-[100px]" src={profileImg} alt="" />
            <span className="text-sm font-semibold">Francesca Brignano</span>
          </div>
          <div className="my-3">
            <label className="block" htmlFor="testimonianza">
              Testimonianza
            </label>
            <textarea className="input" name="testimonianza"></textarea>
          </div>
          <div className="my-3">
            <label className="block" htmlFor="foto">
              Carica foto
            </label>
            <input className="input" type="file" name="foto" />
          </div>
          <div className="flex justify-end mt-10">
            <button className="primary w-full md:w-auto">Pubblica testimonianza</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InserimentoTestimonianza;
