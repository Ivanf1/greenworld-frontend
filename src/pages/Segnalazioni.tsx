import { useMutation, useQuery, useQueryClient } from "react-query";
import SegnalazioneCard from "../components/SegnalazioneCard";

import { getSegnalazioni, removeSegnalazione } from "../services/segnalazioneService";

const Segnalazioni = () => {
  const queryClient = useQueryClient();

  const segnalazioniQuery = useQuery("segnalazioniQuery", () => {
    return getSegnalazioni();
  });

  const removeSegnalazioneMutation = useMutation(
    async (data: string) => {
      return removeSegnalazione(data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("segnalazioniQuery");
      },
    }
  );

  const removeSegnalazioneHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let id = e.currentTarget.dataset.segnalazioneid;
    if (id) {
      removeSegnalazioneMutation.mutate(id);
    }
  };

  if (segnalazioniQuery.isLoading || !segnalazioniQuery.data) {
    return <div className="h-full"></div>;
  }

  return (
    <div className="w-full h-full bg-light-grey py-10">
      <main className="flex flex-col mx-auto items-center space-y-20">
        {segnalazioniQuery.data.map((segnalazione, i) => {
          return (
            <SegnalazioneCard key={i} {...segnalazione} onRemove={removeSegnalazioneHandler} />
          );
        })}
      </main>
    </div>
  );
};

export default Segnalazioni;
