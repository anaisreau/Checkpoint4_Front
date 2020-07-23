import React, { useState, useEffect } from 'react'
import { Card, Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

function FicheLieu(props) {
    const choixReserve = props.location.setCountry
    const [reserve, setReserve] = useState([])

    const getData = () => {
        Axios.get('http://localhost:5000/reserve')
            .then(res => setReserve((res.data)))
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <h2 className="destResTitle">Nom : {choixReserve}</h2>
            {reserve.filter(e => e.nom === choixReserve)
                .map(e => {
                    return (
                        <Container className='resultCont'>
                            <Card fluid id='resultCity'>
                                <Card.Content fluid >
                                    <Card.Header id='resDestHeader'>{e.nom}</Card.Header>
                                    <Card.Meta className='destAddress'>
                                        <img src ={e.image1}/>
                                        <span className='date'></span>
                                        <div className='date'>{e.nomDep}</div>
                                    </Card.Meta>
                                    <Card.Description className='destDesc'>
                                        {e.description} <br />
                                    </Card.Description>
                                </Card.Content>

                                
                                <Calendar width='25%'/>
                            </Card>
                        </Container>
                    )
                })}
            <Link to='/'><Button className='buttonReturn'>Retour à la page d'accueil </Button></Link>
        </>

    )
}

export default FicheLieu