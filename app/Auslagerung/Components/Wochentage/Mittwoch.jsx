import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Textdatenset } from '../../Texte/Textdatenset';
import Kategoriehülle from '../Rohbau/Kategoriehülle';

const Mittwoch = () => {
  const [tabmi,settabmi]=useState(false)
  return (
    <>
    <TitelTouch show={tabmi} setshow={settabmi} T={Textdatenset.Wochentage.Mi} />
    {
      tabmi?
      <>
      <Kategoriehülle />
      </>
      :
      ""
    }
    </>
  )
}

export default Mittwoch