import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'


import mapMarkerImg from './../images/map-marker.svg'

import 'leaflet/dist/leaflet.css'
import '../styles/pages/Orphanages-map.css'

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                
                <footer>
                    <strong>Nova Andradina</strong>
                    <span>Mato Grosso do Sul</span>
                </footer>
            </aside>

            <Map
                center={[-22.2542338,-53.3582231]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
        );
}

export default OrphanagesMap;