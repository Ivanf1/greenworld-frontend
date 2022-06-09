import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const SegnalazioneLuogo = () => {
  const [files, setFiles] = useState<{ preview: string }[]>([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    maxFiles: 10,
  });

  const thumbs = files.map((file) => (
    <div className="inline-flex">
      <div>
        <img
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt=""
          className="block h-full w-[260px]"
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

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
            <div {...getRootProps()} className="cursor-pointer input py-2 px-3">
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Trascina qui le immagini ...</p>
              ) : (
                <p>Trascina le immagini o clicca per selezionarle</p>
              )}
              <aside
                className={`grid grid-cols-[repeat(2,auto)] gap-2 ${files.length !== 0 && "mt-4"} `}
              >
                {thumbs}
              </aside>
            </div>
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
