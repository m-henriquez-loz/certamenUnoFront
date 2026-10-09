import { useState } from 'react'
import GuerrerosForm from '../components/GuerrerosForm'
import GuerrerosView from '../components/GuerrerosView'

export default function GuerrerosContainer() {
  const [tropas, setTropas] = useState([]);

  const handleCreate = (nuevoGuerrero) => {
    setTropas([...tropas, nuevoGuerrero])
  };

  const handleDelete = (guerrero) => {
    const filtrada = tropas.filter((t) => { return t?.id != guerrero?.id });
    setTropas(filtrada);
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 mb-4">
          <GuerrerosForm onCreateGuerrero={handleCreate} />
        </div>
        <div className="col-12">
          <GuerrerosView lista={tropas} onDeleteGuerrero={handleDelete} />
        </div>
      </div>
    </div>
  )
}