import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import WalletItem from './walletItem';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const WalletItemList = ({ itemList}) => (
    <View style={styles.container}>
        
        <FlatList
                data={itemList}
                renderItem={({ item }) => <WalletItem
                txid={item.txid}
                date={item.date}
                token={item.token}
                food={item.food}
                services={item.services}
                accomodation={item.accomodation}
                supplies={item.supplies}
                    
                    
                />}
            />

    </View>
);

export default WalletItemList;