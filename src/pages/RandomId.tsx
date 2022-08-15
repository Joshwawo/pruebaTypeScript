import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const RandomId = () => {

    const { id } = useParams()
    console.log(id)

  return (
    <div>Desde RandomId</div>
  )
}

export default RandomId