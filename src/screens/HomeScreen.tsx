import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { CAA_SIU_BUN } from '../images/index';
import DimSumList from '../components/DimSumList';

function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<DimSumList />
		</View>
	)
}

export default HomeScreen;