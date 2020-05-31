import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './navigators/HomeNavigator';
import ItemNavigator from './navigators/ItemNavigator';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
	return (
	  	<Drawer.Navigator initialRouteName="Home">
      		<Drawer.Screen name="Home" component={HomeNavigator} />
  	        <Drawer.Screen name="Favorites" component={ItemNavigator} />
			<Drawer.Screen name="All Dim Sum" component={ItemNavigator} />
			<Drawer.Screen name="Popular" component={ItemNavigator} />
			<Drawer.Screen name="Teas" component={ItemNavigator} />
			<Drawer.Screen name="Steamed" component={ItemNavigator} />
			<Drawer.Screen name="Savory" component={ItemNavigator} />
			<Drawer.Screen name="Buns" component={ItemNavigator} />
			<Drawer.Screen name="Desserts" component={ItemNavigator} />
			<Drawer.Screen name="Dumplings" component={ItemNavigator} />
			<Drawer.Screen name="Rice Noodle Rolls" component={ItemNavigator} />
			<Drawer.Screen name="Congee and Rice" component={ItemNavigator} />
	  	</Drawer.Navigator>
	);
}

function App() {
  return (
    <NavigationContainer>
		<MyDrawer />
    </NavigationContainer>
  );
}

export default App;
