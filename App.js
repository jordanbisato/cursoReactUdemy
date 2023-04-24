import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PeoplePage from './src/screens/PeoplePage';
import PeopleDetailPage from './src/screens/PeopleDetailPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="People" screenOptions={{
        headerStyle: {
          backgroundColor: '#6ca2f7',
          borderBottomWidth: 1,
          borderBottomColor: "#F0F0F0"
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,

          flexGrow: 1,
          alignSelf: 'center'
        }
      }}>
        <Stack.Screen name="People" component={PeoplePage} options={{ title: 'Pessoas' }}/>
        <Stack.Screen name='PeopleDetail' component={PeopleDetailPage} 
        options={({ route, navigation }) => (
          {
          title: route.params.people.name.first,
          headerTitleStyle: {
            color: 'white',
            fontSize: 20,
          }
        })}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
 