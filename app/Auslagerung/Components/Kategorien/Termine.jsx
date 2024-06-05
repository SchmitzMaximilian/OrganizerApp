import React,{ useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'; 
import { Beschriftungsdatenset } from '../../Texte/Beschriftungsdatenset';
import Justchecking from '../../functionen/Justchecking';


const Termine = (props) => {
  return (
  <>
    <View>
      <Text>{Beschriftungsdatenset.Kategorienamen[props.Index].Name}</Text>
    {(Beschriftungsdatenset.Kategorienamen[props.Index].Boxen.length>0)&&Beschriftungsdatenset.Kategorienamen[props.Index].Boxen.map((item,index)=>(
      <Justchecking Item={item} />

    ))}
    </View>
  </>
  )
}

export default Termine