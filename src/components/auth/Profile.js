import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const Profile = () => {


    const [details, setDetails] = useState({
        first_name : '',
        last_name : '',
        email : ''
    })

    useEffect(() => {
        getProfil()

    }, [])

    const getProfil = () => {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        setDetails({
            first_name : decoded.first_name,
            last_name : decoded.last_name,
            email : decoded.email
        })

        // setCheckDetails({
        //     first_name: decoded.first_name,
        //     last_name: decoded.last_name,
        //     email: decoded.email
        // })
        // setFirstName(decoded.first_name)
        // setLastName(decoded.last_name)
        // setEmail(decoded.email)
    }

    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">PROFIL UTILISATEUR</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <tbody>
                        <tr>
                            <td>Prénom</td>
                            <td>{details.first_name}</td>
                        </tr>
                        <tr>
                            <td>Nom</td>
                            <td>{details.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{details.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Profile