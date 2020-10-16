import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from './../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/Orphanages-map.css';

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

                <Marker
                    icon={mapIcon}
                    position={[-22.255803, -53.348739]}
                >
                    <Popup closeButton={false} maxWidth={248} minWidth={240} className="map-popup">
                        Nois
                        <Link to="/orphanage/1">
                            <FiArrowRight size={20} color="#FFF"></FiArrowRight>
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
        );
}

export default OrphanagesMap;