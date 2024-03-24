"use client"
import React from 'react'
import "../card/Card.css"

export const Card = (props) => {

  return (
    <>
      <div className='cards'>
        <p>Horario Local</p>
        <p>{props.ciudad}  </p>
        <b>{props.fecha}</b>
        <br />
      </div>
    </>

  )
}
