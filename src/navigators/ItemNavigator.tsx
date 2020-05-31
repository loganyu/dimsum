import * as React from 'react';
import { Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemsScreen from '../screens/ItemsScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';

const Stack = createStackNavigator();

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

export default ItemNavigator;