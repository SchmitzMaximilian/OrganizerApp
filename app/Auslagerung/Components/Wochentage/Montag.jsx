import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
import { useContext, useEffect, useState } from 'react';
import TitelTouch from "../TitelTouch"
import Kategoriehülle from '../Rohbau/Kategoriehülle';
import { Textdatenset } from '../../Texte/Textdatenset';
//
const Montag = () => {
  const [tabmo,settabmo]=useState(false)
  return (
    <>

    <TitelTouch show={tabmo} setshow={settabmo} T={Textdatenset.Wochentage.Mo} />
    {
      tabmo?
      <>
      <Kategoriehülle />
      </>
      :
      ""
    }
    </>
  )
}

export default Montag