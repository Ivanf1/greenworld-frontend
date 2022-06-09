import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const CandidaturaSponsor = () => {
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
    maxFiles: 1,
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
          className="block h-full w-auto"
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
            <div {...getRootProps()} className="cursor-pointer input py-2 px-3">
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Trascina qui le immagini ...</p>
              ) : (
                <p>Trascina le immagini o clicca per selezionarle</p>
              )}
              <aside className={`flex flex-wrap ${files.length !== 0 && "mt-4"}`}>
                <ul>{thumbs}</ul>
              </aside>
            </div>
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
