import React, { useState, useEffect } from 'react';
import './Maps.css'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import Axios from 'axios'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function Maps () {
   
const [position, setPosition] = useState([])
const [meteo, setMeteo]= useState()
const lat = position.map(e => {return (
 [e.lat, e.longi,e.nom, e.description, e.image1, e.image2]
  )})	    

const getposition= () =>{
        Axios.get('http://localhost:5000/all')
            .then(res => setPosition(res.data))
    }



 useEffect(() => {
        getposition()
    }, [])  
   

    return (
        
    <>

    <div id='mapHeader'>
        <h5 id='maph1'>Cliquez sur la carte pour decouvrir les réserves</h5>
 
    </div>

    <LeafletMap className='map' center={[46.227638, 2.213749]} zoom={5} zoomControl={true}>
        <TileLayer className ='cadreMap'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
{lat.map(e => {
return(
       <Marker position={[e[0],e[1]]}>
    <Popup>{[e[2]]}<br/> 
    <Modal trigger={<button>Voir ce lieu ?</button>}>
    <Modal.Header>{[e[2]]}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={[e[4]]} />
      <Modal.Description>
        <Header>Présentation</Header>
        <p>
        {[e[3]]}
      
      
        </p>
      </Modal.Description>
    </Modal.Content>
   
  </Modal>
  </Popup>
    </Marker> 
    )})}

   
                    

                
    </LeafletMap>
        </>
    )
    
};
export default Maps
