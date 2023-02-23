import { Icon } from "@rneui/themed";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main = () => {




  return (
    <View style = {styles.container}>

        
        <View style = {styles.Top}>

        
            <View style = {{backgroundColor:"transparent",height:"100%",width:55}}>
            <Icon name="equalizer" type="fontisto" color = "#1e90ff" style = {{paddingTop:3,paddingLeft:10,marginVertical:3}}/>
            </View>

            <View style = {{backgroundColor:"transparent",height:"100%",width:55,marginLeft:10}}>
           <Text style = {{fontSize:16,fontWeight:"bold", borderRadius:5,borderWidth:1.5,marginVertical:3,paddingLeft:4,paddingRight:3,paddingVertical:2,color:"red",borderColor:"red"}}>L I V E</Text>
            </View>
     
            <View style = {{backgroundColor:"#1e90ff",height:"60%",marginLeft:204,borderRadius:3,marginTop:7}}>
           <Text style = {{fontSize:10,fontWeight:"bold",color:"white",paddingHorizontal:7,paddingVertical:2,borderColor:"red"}}>1</Text>
            </View>
     
            <View style = {{height:"60%",marginTop:4,marginLeft:12}}>
            <Icon name="arrow-up" type="simple-line-icon" color = "grey" size={28} style = {{}}/>
            </View>
     

        </View>


        <View style = {styles.First}>


            <View style = {styles.one}>
                <View style = {{backgroundColor:"transparent",width:"50%"}}>
                    <Icon name="radio" type="feather" color = "#dc143c" size={45} style = {{paddingTop:10}}  />
                </View>
                <View>
                    <Icon name="connected-tv" type="materialicons" color = "dimgrey" size={45} style = {{paddingTop:10,paddingLeft:5}}  />
                </View> 
            </View>
        


            <View style = {{backgroundColor:"#dcdcdc",width:70,height:70,borderRadius:125/2,marginHorizontal:27,marginVertical:20,paddingTop:11,paddingLeft:6}}>

                <Icon name="play" type="feather" color = "dimgrey" size={45} style = {{}}  />

            </View>



            <View style = {styles.two}>
                <View style = {{backgroundColor:"transparent",width:"50%"}}>
                    <Icon name="mute" type="octicon" color = "black" size={40} style = {{paddingTop:12}}  />
                </View>
                <View>
                    <Icon name="arrow-projectile-multiple" type="material-community" color = "black" size={45} style = {{paddingTop:10}}  />
                </View> 
            </View>

        </View>





        <View style = {styles.Second}>

            <View style = {{backgroundColor:"#dcdcdc",width:70,height:70,borderRadius:0,marginHorizontal:27,marginVertical:77,marginLeft:58,paddingTop:11}}>

                <Icon name="skip-back" type="feather" color = "dimgrey" size={45} style = {{}}  />

            </View>

            <View style = {{backgroundColor:"#dcdcdc",width:70,height:70,borderRadius:125/2,marginLeft:12,marginRight:3,marginVertical:77,paddingTop:11.5}}>

                <Icon name="pause" type="feather" color = "dimgrey" size={45} style = {{}}  />

           </View>

           <View style = {{backgroundColor:"#dcdcdc",width:70,height:70,borderRadius:0,marginVertical:77,marginLeft:35,paddingTop:11}}>

                <Icon name="skip-forward" type="feather" color = "dimgrey" size={45} style = {{}}  />

           </View>

        
        </View>








        <View style = {styles.Third}>

            <View style = {styles.three}>
                
                <View style = {{backgroundColor:"transparent",width:"50%",marginHorizontal:25,marginTop:12}}>
                    <Icon name="moon" type="feather" color = "dimgrey" size={45} style = {{paddingTop:10}}  />
                </View>
                <View style = {{backgroundColor:"transparent",width:"50%",marginHorizontal:22,marginTop:15}}>
                    <Icon name="sun" type="feather" color = "dimgrey" size={45} style = {{paddingTop:10,paddingLeft:5}}  />
                </View> 

            </View>


            <View style ={{height:530,width:193,backgroundColor:"transparent"}}>
                
                 <View style = {{backgroundColor:"#dcdcdc",width:70,height:70,borderRadius:125/2,marginLeft:67,marginRight:3,paddingTop:14}}>

                    <Icon name="crop-square" type="materialicon" color = "dimgrey" size={40} style = {{}}  />

                </View>

                <Text style={{marginLeft:73,marginTop:57,fontWeight:"bold",fontSize:16}}>Volume</Text>

                <View style ={{backgroundColor:"transparent",width:"100%",height:100,flexDirection:"row"}}>
                    <View style ={{backgroundColor:"transparent",width:65,height:100,paddingTop:20,paddingLeft:20}}>
                         <Icon name="minus" type="feather" color = "dimgrey" size={30} style = {{}}  />
                    </View>   
                    <View style ={{backgroundColor:"transparent",width:65,height:100,paddingLeft:24.5,paddingTop:24}}>
                        <Text style = {{fontWeight:"bold"}}>80+</Text>
                    </View>
                    <View style ={{backgroundColor:"transparent",width:65,height:100,paddingTop:20,paddingRight:20}}>
                        <Icon name="plus" type="feather" color = "dimgrey" size={30} style = {{}}  />
                    </View>
                </View>

            </View>



            <View style = {styles.four}>

                   
                  <View style = {{backgroundColor:"transparent",width:"50%",marginHorizontal:25,marginTop:12}}>
                    <Icon name="folder-plus" type="feather" color = "dimgrey" size={45} style = {{paddingTop:10}}  />
                </View>
                <View style = {{backgroundColor:"transparent",width:"50%",marginHorizontal:22,marginTop:15}}>
                    <Icon name="hearto" type="antdesign" color = "dimgrey" size={45} style = {{paddingTop:10,paddingLeft:5}}  />
                </View> 


            </View>

        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:4,  
        flexDirection:"column",     
        backgroundColor:"white"
    },
    Top:{
        backgroundColor:"white",
        height:32,
        flexDirection:"row"
    },
    First:{
        flexDirection:"row",
        backgroundColor:"transparent",
        height:36,
    },
    one:{
        backgroundColor:"#dcdcdc",
        width:140,
        height:70,
        marginRight:0,
        flexDirection:"row"
    },
    two:{
        backgroundColor:"#dcdcdc", 
        width:140,
        height:70,
        flexDirection:"row"

    },
    Second:{
        backgroundColor:"transparent",
        height:176,
        flexDirection:"row",

    },
    Third:{
        flexDirection:"row",
        backgroundColor:"transparent",
        height:580,
    },
    three:{
        backgroundColor:"#dcdcdc",
        width:100,
        marginRight:0

    },
    four:{
        backgroundColor:"#dcdcdc",
        width:100,
    },

})

export default Main











