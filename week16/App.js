import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ButtonExample from './components/Jeans';
import ButtonCardigans from './components/Cardigans';
import ButtonWinterBoots from './components/WinterBoots';
import ButtonCoolBeanies from './components/CoolBeanies';
import ButtonInfinityScarves from './components/InfinityScarves';
import ButtonSweaters from './components/Sweaters';


function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text><h1>Passion Fashions </h1></Text>
      <Text><p>Shop our Fall Collection!</p></Text>
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
        <Button
        title="CoolBeanies"
        onPress={() => props.navigation.navigate("CoolBeanies")}
      />  
         <Button
        title="Sweaters"
        onPress={() => props.navigation.navigate("Sweaters")}
      />  
      <Button
        title="InfinityScarves"
        onPress={() => props.navigation.navigate("InfinityScarves")}
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
    <Text>WinterBoots</Text>
    <ButtonWinterBoots/>
    <Button 
      title="Back to Home"
      onPress={() => props.navigation.navigate('Home')}
      />
      </View>
    );
    }

    function SweatersScreen (props) {
      return(
        <View>
      <Text>Sweaters</Text>
      <ButtonSweaters/>
      <Button 
        title="Back to Home"
        onPress={() => props.navigation.navigate('Home')}
        />
        </View>
      );
      }
      function CoolBeaniesScreen (props) {
        return(
          <View>
        <Text>CoolBeanies</Text>
        <ButtonCoolBeanies/>
        <Button 
          title="Back to Home"
          onPress={() => props.navigation.navigate('Home')}
          />
          </View>
        );
        }
        function InfinityScarvesScreen (props) {
          return(
            <View>
          <Text>InfinityScarves</Text>
          <ButtonInfinityScarves/>
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
        <Stack.Screen name="Sweaters" component={SweatersScreen} />
        <Stack.Screen name="CoolBeanies" component={CoolBeaniesScreen} />
        <Stack.Screen name="InfinityScarves" component={InfinityScarvesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
