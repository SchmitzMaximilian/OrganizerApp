import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Textdatenset } from '../../Texte/Textdatenset';
import Kategoriehülle from '../Rohbau/Kategoriehülle';

const Dienstag = () => {
  const [tabdi,settabdi]=useState(false)
  return (
    <>
    <TitelTouch show={tabdi} setshow={settabdi} T={Textdatenset.Wochentage.Di} />
    {
      tabdi?
      <>
      <Kategoriehülle />
      </>
      :
      ""
    }
    </>
  )
}

export default Dienstag