import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Textdatenset } from '../../Texte/Textdatenset';
import Kategoriehülle from '../Rohbau/Kategoriehülle';
const Freitag = () => {
  const [tabfr,settabfr]=useState(false)
  return (
    <>
    <TitelTouch show={tabfr} setshow={settabfr} T={Textdatenset.Wochentage.Fr} />
    {
      tabfr?
      <>
      <Kategoriehülle />
      </>
      :
      ""
    }
    </>
    
  )
}

export default Freitag