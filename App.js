import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Slider from '@react-native-community/slider';
import MySlider from './src/MySlider';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  useEffect(() => {
    //Gia su call api
    setLoading(true);
    setTimeout(() => {
      setA(1000);
      setB(5000);
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="small" color="#0000ff" animating={loading} />
      <MySlider
        title="Giá phòng từ:"
        value={a}
        onValueChange={(value) => setA(value)}
      />
      <MySlider
        title="Diện tích từ:"
        value={b}
        onValueChange={(value) => setB(value)}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
