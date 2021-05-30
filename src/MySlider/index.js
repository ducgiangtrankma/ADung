import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
const MySlider = ({title, value, onValueChange}) => {
  return (
    <View>
      <Text>
        {title} {value}
      </Text>
      <Slider
        style={{width: 200, height: 40}}
        value={value}
        minimumValue={0}
        step={50}
        maximumValue={10000}
        minimumTrackTintColor="red"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => onValueChange(value)}
      />
    </View>
  );
};
export default React.memo(MySlider);
