import React from 'react'
import { Beschriftungsdatenset } from '../../Texte/Beschriftungsdatenset'

const Anzeigefeld = (props) => {
  //Secure storage einfügen und beim mapping einbinden anstatt datenset
  return (
    <>
    {(Beschriftungsdatenset.VorratsArtikel[props.Index].Lager.length>0)&&Beschriftungsdatenset.VorratsArtikel[props.Index].Lager.map((item,index)=>(
      <View>
      <Text>{Beschriftungsdatenset.VorratsArtikel[props.Index].Artikelname}</Text>
      <Text>{item[1]}</Text>
      <Plus/>
      <Text>{item[3]}</Text>
      <Minus/>
      </View>
      ))}
    </>
  )
}

export default Anzeigefeld