import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Item from './item';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const ItemList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <Item
                    name={item.name}
                    img={item.img}
                    
                    
                />}
            />

    </View>
);

export default ItemList;