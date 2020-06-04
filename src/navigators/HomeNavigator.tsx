import * as React from 'react';
import { Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';

const Stack = createStackNavigator();

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

export default HomeNavigator;