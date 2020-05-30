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

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function HomeNavigator({navigation}) {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: 'My home',
					headerLeft: () => (
						<Button
						  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
						  title="Info"
						  color="#00cc00"
						/>
					  ),
				}}/>
			<Stack.Screen name="Details" component={DetailsScreen} />
      	</Stack.Navigator>
	)
}


function CustomDrawerContent(props) {
	return (
	  <DrawerContentScrollView {...props}>
		<DrawerItemList {...props} />
		<DrawerItem
		  label="Close drawer"
		  onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
		/>
		<DrawerItem
		  label="Toggle drawer"
		  onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
		/>
	  </DrawerContentScrollView>
	);
}

function Feed({ navigation }) {
	return (
	  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>Feed Screen</Text>
		<Button
		  title="Open drawer"
		  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
		/>
		<Button
		  title="Toggle drawer"
		  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
		/>
	  </View>
	);
  }
  
  function Notifications() {
	return (
	  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Text>Notifications Screen</Text>
	  </View>
	);
  }


function MyDrawer() {
	return (
	  	<Drawer.Navigator initialRouteName="Feed" drawerContent={props => <CustomDrawerContent {...props} />}>
			  <Drawer.Screen
				  name="Feed" component={Feed}
			  />
      		<Drawer.Screen name="Notifications" component={Notifications} />
			<Drawer.Screen name="Home Screen" component={HomeNavigator} />
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
