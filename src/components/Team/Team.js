import React, { useState, useEffect } from 'react'

export const Team = () => {

    // eslint-disable-next-line no-undef
    const [team, setTeam ] = useState(null)
    console.log(team)

    useEffect(() => { // En el montaje del componente hace el fetch
        
        fetch('https://rickandmortyapi.com/api/character/1')
            .then((res) => res.json()) //then que hace un json de la respuesta
            .then((data) => { // then que captura la data
                setTeam(data)
            })
    }, []) //[] significa que se ejecuta al montaje del componente

    return (
        <div className="container my-5">
            <h2>Nuestro equipo</h2>
            <hr/>

            {/* Estados de carga */}
            { team !== null && // ...Si tengo algo distinto de null, renderiza esto...
                <>
                    <h3>{team.name}</h3>
                    <img src={team.image} alt={team.name}/>
                </>
            }
            
            {/* Es lo mismo que este ternario */}
            {/* { team ? // ...Si tengo algo distinto de null, renderiza esto...
                <>
                <h3>{team.name}</h3>
                <img src={team.image} alt={team.name}/>
                </>
                :
                'obteniendo info del servidor'
            } */}
        </div>
    )
}
