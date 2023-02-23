import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import Tabs from "./tabs";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (

    <RootStack.Navigator>
        <RootStack.Group>
            <RootStack.Screen name = "Media Remote" component = {Tabs} options ={{
                headerTitleStyle:{fontWeight: "bold",fontSize:30},}}/>
        </RootStack.Group>
    </RootStack.Navigator>

  )
}

export default RootNavigator