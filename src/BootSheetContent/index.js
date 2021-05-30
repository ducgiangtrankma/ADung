import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
export default function BootSheetContent({data, onSelect}) {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
        <Text>{item.value}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      contentContainerStyle={{flex: 1}}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${index}`}
    />
  );
}
const styles = StyleSheet.create({
  item: {
    height: 30,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
