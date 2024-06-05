import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Textdatenset } from '../../Texte/Textdatenset';
import Kategoriehülle from '../Rohbau/Kategoriehülle';
const Sonntag = () => {
  const [tabso,settabso]=useState(false)
  return (
    <>
    <TitelTouch show={tabso} setshow={settabso} T={Textdatenset.Wochentage.So} />
    {
      tabso?
      <>
      <Kategoriehülle />
      </>
      :
      ""
    }
    </>
  )
}

export default Sonntag