import React from 'react';
import { View, Text, StyleSheet } from "react-native";

import { Button } from 'react-native-elements';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
            <Button
                title="Go to Meals" onPress={() => {
                    props.navigation.navigate('CategoryMeals')
                }}
                type="outline"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen;