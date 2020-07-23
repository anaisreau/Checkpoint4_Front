import React, { useState, useEffect } from 'react';
import './Maps.css'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import Axios from 'axios'
import { latLng } from 'leaflet';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'


function Maps () {
   
const [position, setPosition] = useState([])
const lat = position.map(e => {return (
    [e.lat, e.longi,e.nom, e.description, e.image1, e.image2]
    )})
    const [choix, setChoix] = useState('')

console.log(lat)

const getposition= () =>{
        Axios.get('http://localhost:5000/all')
            .then(res => setPosition((res.data)))
    }


    useEffect(() => {
        getposition()
        
    }, [])  

    return (
        
    <>

    <div id='mapHeader'>
        <h1 id='maph1'>Cliquez sur la carte pour decouvrir les réserves</h1>
 
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
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='right chevron' />
      </Button>
    </Modal.Actions>
  </Modal>
  </Popup>
    </Marker> 
    )})}

   
                    

                
    </LeafletMap>
        </>
    )
    
};
export default Maps

// import React, { useState, useEffect } from 'react';
// import './Maps.css'
// import {Modal } from 'semantic-ui-react'
// import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
// import axios from 'axios'
// import Iframe from "react-iframe";




// // const reserves = [
// // [43.0574322886,-0.140313550731],
// // [43.9408677207,4.41213535461],
// // [42.8581660609,0.244078953569],
// // [43.9671087594,3.72121528422],
// // [44.6574118739,2.51985699944],
// // [43.5833236959,2.13490339311],
// // [44.8194518438,1.79470924446],
// // [42.8363783288,1.85093119565],
// // [43.611349139,4.34014676127],
// // [43.5094951107,1.42029998299],
// // [42.4922895665,2.27599672629],
// // [43.045559886,3.05899074206],
// // [43.5996744176,4.23299531548]
// // ]


// const APIKey = '7ESCVeg0KgkQwgRo1PtacPmPisCPQwvP'


// function LandingPage () {
//     const [Cam, setCam] = useState([])
//     const [trizz, setTrizz] = useState()
//     let [plantedTrizz, setPlantedTrizz] = useState()

//     function getData() {
//         setTrizz(localStorage.getItem('trizz'))
//         setPlantedTrizz(localStorage.getItem('plantedTrizz'))
//     }

//     useEffect(() => {
//         getData()
//     }, [])
    

//     function plantTrizz() {
//         if (trizz - plantedTrizz > 0) {
//             plantedTrizz += 1
//             alert('your trizz will be plant in this area')
//         } else {
//             alert('you have not trizz enough')
//         }
//         localStorage.setItem('plantedTrizz', plantedTrizz)
//         window.location.reload(false)
//     }
//     return (
//     <>

//     <div id='mapHeader'>
//         <h1 id='maph1'>Cliquez sur la carte pour rechercher les lieux à decouvrir</h1>
     
//     </div>
//     <LeafletMap className='map' center={[46.227638, 2.213749]} zoom={5} zoomControl={false}>
//         <TileLayer className ='cadreMap'
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {plantations.map(plantation => {
//             function getCam() {
//                 axios.get(`https://api.windy.com/api/webcams/v2/list/category=forest/nearby=${plantations[0]},${plantations[1]},1000/limit=1?show=webcams:location,image,player&key=${APIKey}`)
//                     .then(response => setCam(response.data.result.webcams))
//             }
            
//             return (
//               <Marker onClick={() => getCam()} position={plantations}>
//                 <Popup>
//                   <div className="spanCss">
//                     <h5>{plantations[2]}</h5>
//                     <br />
//                     <br />
//                     <p>trizz to plant: {trizz - plantedTrizz > 0 ? trizz - plantedTrizz : 0}<br/>
//                     Are you sure to plant here ?</p>
//                     <button onClick={() => plantTrizz()}>Oui !</button>
//                     <Modal
//                       id="webcam"
//                       trigger={<button>Show Webcam</button>}
//                       header={Cam.map(cam => { return <p>{cam.title}</p>})}
//                       content={Cam[0] !== undefined ? Cam.map((cam) => {
//                           return <Iframe url={cam.player.lifetime.embed} />})
//                           : <p>There is no webcam here</p>
//                       }
//                       actions={[
//                         { key: "done", content: "Close", positive: true },
//                       ]} 
//                     />
//                   </div>
//                 </Popup>
//               </Marker>
//             );
//         }
//         )}
//     </LeafletMap>
//         </>
//     )
    
// };
// export default LandingPage