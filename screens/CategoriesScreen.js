import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../data/dummy-data'
import HeaderButton from "../components/HeaderButton";

import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                bgColor={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })
                }} />
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='menu' style={styles.headerBtn} onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerBtn: {
        paddingHorizontal: 15
    }
})

export default CategoriesScreen;