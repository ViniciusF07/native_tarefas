import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tarefa from "./src/pages/Tarefa/";
import NovaTarefa from "./src/pages/NovaTarefa/";
import Detalhes from "./src/pages/Detalhes/";



const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefa">
        <Stack.Screen
          name="Tarefas"
          component={Tarefa}
          options={{
            headerTintColor:"#f92e6a"
          }}/>
        <Stack.Screen
          name="Nova Tarefa"
          component={NovaTarefa}
          options={{
            headerTintColor:"#f92e6a"
          }}/>
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            headerTintColor:"#f92e6a"
          }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

