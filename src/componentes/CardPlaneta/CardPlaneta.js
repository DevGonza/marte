import React from 'react'

const CardPlaneta = (props) => {
    const {id,img_src,earth_date, rover} = props;
    return (
        <div className="card mb-3" style={{width: "18rem"}}>
        <img src={img_src} className="card-img-top" alt={id} />
        <div className="card-body">
            <h5 className="card-title">Nombre: {rover.name}</h5>
            <h6 className="card-title">Foto numero: {id}</h6>
            <p className="card-text mb-1">Fecha en la tierra: {earth_date}</p>
            {/* <p className="card-text">Status: {status === "Alive" ? "Vivo" : props.status === "unknown" ? "desconocido" : "muerto"}</p> */}
        </div>
    </div>
  )
}

export default CardPlaneta

