import BottomSheet from '@gorhom/bottom-sheet';
import { Icon } from "@rneui/themed";
import React, { useMemo } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import * as Animatable from "react-native-animatable";
import { SelectList } from 'react-native-dropdown-select-list';





const HomeScreen = () => {


  const snapPoints = useMemo(() => [//"3%",
  "35%"], [])

  const [Height, onChangeHeight] = React.useState('70%');
  const [Vertical, onChangeV] = React.useState('70%');
  const [Width, onChangeWidth] = React.useState('80%');
  const [Horizontal, onChangeH] = React.useState('80%');
  const [selected,setSelected]= React.useState("");
  const data = [
    {key:"1",value:"16 : 9",
    key:"2",value:"16 : 9",
    key:"3",value:"16 : 9",
    key:"4",value:"16 : 9"
  
  }
  ]

  


return (

 
    <BottomSheet snapPoints= {snapPoints}>
      <Animatable.View style = {styles.container}>
     
        <Animatable.View style = {styles.Section1}>
    
          <Animatable.Text style = {{paddingLeft:20,paddingTop:5,fontFamily:"fantasy",fontWeight:"bold"}}>
              Screen Height
          </Animatable.Text>  
  

          <Animatable.View style = {{paddingLeft:34,paddingRight:35,paddingTop:10}}>
          <TextInput style = {styles.TextInput}  onChangeText={onChangeHeight}value={Height} underlineColorAndroid = "transparent"/>
          </Animatable.View>

          <Animatable.Text style = {{paddingLeft:40,paddingTop:15,fontFamily:"fantasy",fontWeight:"bold"}}>
              Vertical
          </Animatable.Text>  

          <Animatable.View style = {{paddingLeft:34,paddingRight:35,paddingTop:10}}>
          <TextInput style = {styles.TextInput}  onChangeText={onChangeV}value={Vertical} underlineColorAndroid = "transparent"/>
          </Animatable.View>

          

        </Animatable.View> 
      


        <Animatable.View style = {styles.Section2}>
          <Animatable.Text style = {{paddingTop:43,fontWeight:"bold"}}>
              Aspect Ratio
          </Animatable.Text>    
          <Animatable.View>
            <SelectList data = {data} setSelected={setSelected} 
            boxStyles ={{marginVertical:30,borderRadius:5,height:50,width:130,paddingHorizontal:12,backgroundColor:"transparent"}}
            inputStyles={{fontSize:15,fontWeight:"bold"}}
            dropdownItemStyles = {{}} 
            dropdownTextStyles ={{color:"grey"}}
            placeholder ="16 : 9"
            arrowicon={ 
            <Icon name="arrow-down" type="simple-line-icon" color = "white" size={20} backgroundColor="dodgerblue"/>} />
          </Animatable.View>
        </Animatable.View>



        <Animatable.View style = {styles.Section3}>


        <Animatable.Text style =  {{paddingLeft:25,paddingTop:5,fontFamily:"fantasy",fontWeight:"bold"}}>
              Screen Width
          </Animatable.Text>    

          
          <Animatable.View style = {{paddingLeft:35,paddingRight:34,paddingTop:10}}>
          <TextInput style = {styles.TextInput}  onChangeText={onChangeWidth}value={Width} underlineColorAndroid = "transparent"/>
          </Animatable.View>

          <Animatable.Text style = {{paddingLeft:33,paddingTop:15,fontFamily:"fantasy",fontWeight:"bold"}}>
              Horizontal
          </Animatable.Text>  

          <Animatable.View style = {{paddingLeft:35,paddingRight:34,paddingTop:10}}>
          <TextInput style = {styles.TextInput}  onChangeText={onChangeH}value={Horizontal} underlineColorAndroid = "transparent"/>
          </Animatable.View>

        </Animatable.View>


      </Animatable.View>
    </BottomSheet>
   
  )
}


const styles = StyleSheet.create({
  container: {
    flex:3,
    flexDirection:"row",
  },
  Section1: {
    flex:1,
    backgroundColor:"transparent",

  },
  Section2: {
    flex:1,
    backgroundColor:"transparent",
    alignItems:"center"
  },
  Section3: {
    flex:1,
    backgroundColor:"transparent",
  },
  TextInput:{
    borderWidth:1,
    borderRadius:5,
    paddingLeft:17,
    paddingTop:10,
    paddingBottom:10,
    paddingRight:10,
    fontWeight:"bold"
  }
});

export default HomeScreen;