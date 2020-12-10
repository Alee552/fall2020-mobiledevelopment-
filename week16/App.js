import 'react-native-gesture-handler';
import React,  {useState} from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


// or any pure javascript modules available in npm
function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
 <Button
        title="Steps"
        onPress={() => props.navigation.navigate("Steps Tracker" )}
      />
    
  );
   <Button
        title="Swim Laps"
        onPress={() => props.navigation.navigate("Swim Laps Tracker")}
      />
        
</View>
);
}

function StepsTracker  (props) {

  let [steps, changeSteps] = useState(0);

return(
  <View style={{flex:1,  alignItems: 'center', justifyContent: 'center' }}>
    <Text> Steps: {steps} </Text>
    <Button title="Increase" onPress={( ) => {
        changeSteps(steps + 1);}} />
    <Button title="Reset" onPress={() => {
      changeSteps(0);
    }} />
    <Button
        title="Tap Go Back Home"
        onPress={() => props.navigation.navigate('Home')}
      />
</View>

);
}



function SwimLapsTracker (props) {

let [swimlaps, changeSwimLaps]= useState(0);

return(
  <View style={{flex:1,  alignItems: 'center', justifyContent: 'center' }}>
    <Text> SwimLaps: {swimlaps} </Text>
    <Button title="Increase" onPress={( ) => {
        changeSwimLaps(swimlaps + 1);}} />
    <Button title="Reset" onPress={() => {
      changeSwimLaps(0);
    }} />
    <Button
        title="Tap Go Back Home"
        onPress={() => props.navigation.navigate('Home')}
      />
</View>

);
}
const Drawer= createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Steps Tracker" component={StepsTracker} />
          <Drawer.Screen name="Swim Laps Tracker" component={SwimLapsTracker} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App();
