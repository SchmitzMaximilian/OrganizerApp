import React from 'react'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from '../TitelTouch'
import { Textdatenset } from '../../Texte/Textdatenset';
import Kategoriehülle from '../Rohbau/Kategoriehülle';
const Samstag = () => {
  const [tabsa,settabsa]=useState(false)
  return (
    <>
    <TitelTouch show={tabsa} setshow={settabsa} T={Textdatenset.Wochentage.Sa} />
    {
      tabsa?
      <>
      <Kategoriehülle />
      </>
      :
      ""
    }
    </>
  )
}

export default Samstag