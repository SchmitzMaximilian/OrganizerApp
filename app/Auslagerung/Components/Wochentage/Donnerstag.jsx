import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Textdatenset } from '../../Texte/Textdatenset';
import Kategoriehülle from '../Rohbau/Kategoriehülle';
const Donnerstag = () => {
  const [tabdo,settabdo]=useState(false)
  return (
    <>
    <TitelTouch show={tabdo} setshow={settabdo} T={Textdatenset.Wochentage.Do} />
    {
      tabdo?
      <>
      <Kategoriehülle />
      </>
      :
      ""
    }
    </>
  )
}

export default Donnerstag