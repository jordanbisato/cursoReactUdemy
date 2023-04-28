import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen'
import SeriesScreen from './src/screens/SeriesScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator 
          initialRouteName="People" 
          screenOptions={{
            title: 'Series',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#6ca2f7',
              borderBottomWidth: 1,
              borderBottomColor: "#F0F0F0"
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 22,
    
              // flexGrow: 1,
              // alignSelf: 'center'
            }
          }}>
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
            <Stack.Screen name="Series" component={SeriesScreen} options={{ title: 'Series' }}/>
            {/* <Stack.Screen name='PeopleDetail' component={PeopleDetailPage} 
            options={({ route, navigation }) => (
              {
              title: route.params.people.name.first,
              headerTitleStyle: {
                color: 'white',
                fontSize: 20,
              }
            })}></Stack.Screen> */}
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default App;