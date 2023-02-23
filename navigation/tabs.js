import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import Main from "../screens/Main";

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (

    <Tab.Navigator screenOptions={({route})=>({
        tabBarActiveTintColor:"black",
        tabBarInactiveTintColor:"grey",
        //change to an y colors according to design
        tabBarIcon: ({focused,color,size}) =>{
            if (route.name === "Device"){
              return (
                <Icon name="videocamera" type = "antdesign" color = {focused ? "black" : "grey"}/>
              )
            }else if(route.name === "Gallery"){
              return (
                <Icon name="image" type="octicon" color = {focused ? "black" : "grey"}/>
              )
            }else if(route.name === "Screen Share"){
              return (
                <Icon name="arrow-up-box" type="material-community" color = {focused ? "black" : "grey"}/>
              )
            }else if(route.name === "Control"){
              return (
                <Icon name="home" type="material-community" color = {focused ? "black" : "grey"}/>
              )
            }
        }
    })}>
        <Tab.Screen name = "Device" component = {HomeScreen} options ={{
          headerShown:false
        }}/>
        <Tab.Screen name = "Gallery" component = {Main} options ={{
          headerShown:false
        }}/>
        <Tab.Screen name = "Control" component = {HomeScreen} options ={{
          headerShown:false
        }}/>
        <Tab.Screen name = "Screen Share" component = {HomeScreen} options ={{
          headerShown:false
        }}/>

    </Tab.Navigator>



  )
}

export default Tabs