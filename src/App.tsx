import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ItemsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Items Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function ItemDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function ItemNavigator({navigation}) {
	return (
		<Stack.Navigator initialRouteName="Items">
			<Stack.Screen
				name="Items"
				component={ItemsScreen}
				options={{
					title: 'Dim Sum',
					headerLeft: () => (
						<Button
						  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
						  title="Menu"
						  color="#00cc00"
						/>
					  ),
				}}/>
			<Stack.Screen name="Details" component={ItemDetailsScreen} />
      	</Stack.Navigator>
	)
}

function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	)
}

function HomeNavigator({navigation}) {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: 'Home',
					headerLeft: () => (
						<Button
						  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
						  title="Menu"
						  color="#00cc00"
						/>
					  ),
				}}/>
			<Stack.Screen name="Details" component={ItemDetailsScreen} />
      	</Stack.Navigator>

	);
}




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
