import {Picker} from '@react-native-picker/picker';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Pickerdataset } from '../../Texte/Pickerdataset';

const Selectmenu = (props) => {
  const selectionHandler=()=>{

  }
  useEffect(()=>{ 
    
  },[])
  return (
    <>
    <Text style={styles.Textelemente}>{Pickerdataset.TopSelectboxenLabel[props.Index]}</Text>
    <View style={{borderRadius:2,borderWidth:1,borderColor:'#4b5563', width:'80%',marginLeft:'10%',paddingVertical:10,marginVertical:10,backgroundColor:'#6b728090'}}>
     <Picker style={{color:'#FFF'}}  dropdownIconColor={"#FFF"} selectedValue={0} multiline={true} numberOfLines={2} 
     onValueChange={(itemValue, itemIndex) =>selectionHandler(itemValue)}  >
      {
        Pickerdataset.SubSelectboxenLabel[props.Index].length>0&&Pickerdataset.SubSelectboxenLabel[props.Index].map((item,index)=>(
          <Picker.Item  key={'pickup'+index+item}  color="#000" label={item} value={index} />

        ))
      }
    </Picker> 
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    
  Textelemente:{
    color:'#fff',
    paddingHorizontal:80,
    marginVertical:5,
    paddingTop:20,
  },
});
export default Selectmenu