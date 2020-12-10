import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonExample from './components/Jeans';
import ButtonCardigans from './components/Cardigans';
import ButtonWinterBoots from './components/WinterBoots';


function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text><h1>Passion Fashions </h1></Text>
 <Button
        title="Jeans"
        onPress={() => props.navigation.navigate("Jeans" )}
      />
   <Button
        title="Cardigans"
        onPress={() => props.navigation.navigate("Cardigans")}
      />
      <Button
        title="WinterBoots"
        onPress={() => props.navigation.navigate("WinterBoots")}
      />  
</View>
);
}

function JeanScreen (props) {
return(
  <View>
<Text>Jeans</Text>
<ButtonExample />
<Button 
  title="Back to Home"
  onPress={() => props.navigation.navigate('Home')}
  />
  </View>
);
}

function CardigansScreen (props) {
  return(
    <View>
  <Text>Cardigans</Text>
  <ButtonCardigans />
  <Button 
    title="Back to Home"
    onPress={() => props.navigation.navigate('Home')}
    />
    </View>
  );
  }

  function WinterBootsScreen (props) {
    return(
      <View>
    <Text>WinterBootsScreen</Text>
    <ButtonWinterBoots/>
    <Button 
      title="Back to Home"
      onPress={() => props.navigation.navigate('Home')}
      />
      </View>
    );
    }

    function SweaterScreen (props) {
      return(
        <View>
      <Text>WinterBootsScreen</Text>
      <ButtonWinterBoots/>
      <Button 
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        />
        </View>
      );
      }
  


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jeans" component={JeanScreen} />
        <Stack.Screen name="Cardigans" component={CardigansScreen} />
        <Stack.Screen name="WinterBoots" component={WinterBootsScreen} />
        <Stack.Screen name="Sweater" component={SweaterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
