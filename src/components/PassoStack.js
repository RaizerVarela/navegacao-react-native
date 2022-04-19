import React from 'react'
import { View, Button } from 'react-native'

export default props => (
  <View style={{flex: 1}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {props.avancar
        ? <Button 
          title='Avancar'
          onPress={()=>{
            props.navigation.navigate(props.avancar)
          }}
        />
        : false
      }
      {props.voltar
        ? <Button 
          title='Voltar'
          onPress={()=>{
            props.navigation.goBack()
          }}
        />
        : false
      }
    </View>
    <View style={{flex: 1}}>
      {props.children}
    </View>
  </View>
)