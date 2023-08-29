import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RickAndMortyService from '../../Services/RickAndMorty.service';


export const DetailRM = () => {
  const [mascota, setMascota] = useState({});
  const { id } = useParams();
  useEffect(() => {
    RickAndMortyService.getCharacterByID(id)
      .then((data) => setMascota(data))
  }, [])
  console.log(mascota);
  const detailCard = {
    width: '80%', margin: 'auto', background: 'white'
  }
  return (
    <div className="card mb-3" style={{ 'background': 'gainsboro' }}>
      <div className="row g-0 mt-4 mb-4" style={detailCard}>
        <div className="col-md-3">
          <img src={mascota.image} className="img-fluid rounded-start imgDetalle" alt="Character's image" />
        </div>
        <div className="col-md-8 detallePersonaje">
          <div className="card-body">
            <h5 className="card-title">{mascota.name}</h5>
            <p className="card-text"><small>Specie: {mascota.species}</small></p>
            <p className="card-text"><small>Status: {mascota.status}</small></p>
            <p className="card-text"><small>Gender: {mascota.gender}</small></p>
            <p className="card-text"><small>Created: {mascota.created}</small></p>
          </div>
          <div className="btn-group" style={{ 'marginLeft': '15px' }}>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <Link to={'/'} className="nav-link px-2 text-success">Inicio</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
