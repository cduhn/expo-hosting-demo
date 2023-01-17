import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// A screen that presents a list of items
export default function ListScreen() {
    const navigation = useNavigation();
    const titles = {
        'native-detail': 'Native Detail',
        'expo-detail': 'Expo Detail',
    }

    return (
        <View>
            <FlatList
                data={[
                {key: 'native-detail'},
                {key: 'expo-detail'},
                ]}
                renderItem={({item}) => 
                <TouchableOpacity onPress={() => navigation.navigate(item.key, { item })}>
                    <Text style={styles.item}>{titles[item.key]}</Text>
                </TouchableOpacity>}
            />
        </View> 
    );
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  
  