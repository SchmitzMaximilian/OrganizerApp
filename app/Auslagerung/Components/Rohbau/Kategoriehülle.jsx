import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'; 
import Hausarbeit from '../Kategorien/Hausarbeit';
import Termine from '../Kategorien/Termine';
import Allgemein from '../Kategorien/Allgemein';
import Sonstiges from '../Kategorien/Sonstiges';
import Geburtstage from '../Kategorien/Geburtstage';
import Formulare from '../Kategorien/Formulare';
import Reisecheckliste from '../Kategorien/Reisecheckliste';

const Kategoriehülle = (props) => {
  
  return (
    <>
    <Text>Moni moin was geht</Text>
    
    {/*<Hausarbeit       Index={0} />
    <Termine          Index={1} />
    <Allgemein        Index={3} />
    <Sonstiges        Index={4} />
    <Geburtstage      Index={5} />
    <Formulare        Index={6} />
  <Reisecheckliste  Index={7} />*/}
    </>
  )
}
const styles = StyleSheet.create({
  thema:{

  },
  placeholder:{

  },
  placeholder:{

  },
})
export default Kategoriehülle