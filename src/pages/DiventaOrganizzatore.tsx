const DiventaOrganizzatore = () => {
  const numEventi = 12;
  const minEventi = 20;

  return (
    <div className="min-w-full min-h-[calc(100vh-80px)] bg-light-grey py-10">
      <div className="card mx-auto px-4 py-10 w-[95%] max-w-[95%] md:max-w-[1200px] md:p-10">
        <h2>Diventa Organizzatore</h2>
        <div className="mt-10">
          <h4>Ricorda, un organizzatore deve:</h4>
          <div className="mt-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h4>Per diventare un organizzatore devi aver partecipato ad almeno 20 eventi</h4>
          <div className="mt-2">
            <p>
              Quando avrai partecipato a 20 eventi, ti sarà resa disponibile la possibilità di
              diventare organizzatore
            </p>
            <div className="flex space-x-5 md:space-x-20 items-center mt-2">
              <span>12/20</span>
              <div className="w-[90%] xl:w-full h-[14px] rounded-lg bg-accent-purple-tint">
                <div
                  className="h-[14px] rounded-lg bg-accent-purple"
                  style={{ width: `${numEventi / (minEventi / 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiventaOrganizzatore;
