import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardPlaneta from '../../componentes/CardPlaneta/CardPlaneta';



const Home = () => {

  const [info, setInfo] = useState([]);

  const obtenerData = async () => {
    const response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=PvvdvZAKNogJgIodc5WPBkTFvGDkaSK2Va8dQUzV')
    setInfo(response.data.photos)

  }

  useEffect(() => {
    obtenerData()
  }, [])

  return (
    <div className='container mb-5 d-flex-column text-center'>
      <h1>Fotos de marte</h1>
      <div className='d-flex flex-wrap justify-content-between mt-5'>
        {
          info.length > 0 ?
            info.map(informacion => (
              <CardPlaneta key={informacion.id} {...informacion} />
            ))
            :
            <div class="spinner-border text-danger container" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        }
      </div>
    </div>
  )
}

export default Home