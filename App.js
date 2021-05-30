import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MySlider from './src/MySlider';
import {ModalTitle, ModalContent, BottomModal} from 'react-native-modals';
import BootSheetContent from './src/BootSheetContent';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const [tinh, setTinh] = useState('Chưa chọn');
  const [huyen, setHuyen] = useState('Chưa chọn');

  const [isModal1, setIsModal1] = useState(false);
  const [isModal2, setIsModal2] = useState(false);

  useEffect(() => {
    //Gia su call api
    setLoading(true);
    setTimeout(() => {
      setA(1000);
      setB(5000);
      setLoading(false);
    }, 2000);
  }, []);
  const onSelectTinh = (value) => {
    setTinh(value.value);
    setHuyen('Chưa chọn');
    setIsModal1(false);
  };
  const onSelectHuyen = (value) => {
    setHuyen(value.value);
    setIsModal2(false);
  };
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
      <View style={styles.base1}>
        <Text>Tỉnh/thành phố:</Text>
        <View style={styles.base2}>
          <Text>{tinh}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsModal1(true);
          }}>
          <Text>Icon</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.base1}>
        <Text>Huyện/thị xã:</Text>
        <View style={styles.base2}>
          <Text>{huyen}</Text>
        </View>
        <TouchableOpacity onPress={() => setIsModal2(true)}>
          <Text>Icon</Text>
        </TouchableOpacity>
      </View>

      {/* Modal chon tinh */}
      <BottomModal
        visible={isModal1}
        onTouchOutside={() => setIsModal1(false)}
        height={0.7}
        width={1}
        onSwipeOut={() => setIsModal1(false)}
        modalTitle={<ModalTitle title="Lựa chọn" hasTitleBar />}>
        <ModalContent
          style={{
            flex: 1,
            backgroundColor: 'fff',
          }}>
          <View style={{flex: 1}}>
            <BootSheetContent data={dataTinh} onSelect={onSelectTinh} />
          </View>
        </ModalContent>
      </BottomModal>
      {/* Modal chon huyen */}
      <BottomModal
        visible={isModal2}
        onTouchOutside={() => setIsModal2(false)}
        height={0.7}
        width={1}
        onSwipeOut={() => setIsModal2(false)}
        modalTitle={<ModalTitle title="Lựa chọn" hasTitleBar />}>
        <ModalContent
          style={{
            flex: 1,
            backgroundColor: 'fff',
          }}>
          <View style={{flex: 1}}>
            <BootSheetContent data={dataHuyen} onSelect={onSelectHuyen} />
          </View>
        </ModalContent>
      </BottomModal>
    </SafeAreaView>
  );
}
const dataTinh = [
  {
    id: 1,
    key: 'HN',
    value: 'Hà Nội',
  },
  {
    id: 2,
    key: 'HP',
    value: 'Hải Phòng',
  },
  {
    id: 3,
    key: 'HD',
    value: 'Hải Dương',
  },
  {
    id: 4,
    key: 'ĐN',
    value: 'Đà Nẵng',
  },
];
const dataHuyen = [
  {
    id: 1,
    key: 'HN',
    value: 'Huyen 1',
  },
  {
    id: 2,
    key: 'HP',
    value: 'Huyen 2',
  },
  {
    id: 3,
    key: 'HD',
    value: 'Huyen 3',
  },
  {
    id: 4,
    key: 'ĐN',
    value: 'Huyen 4',
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  base1: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  base2: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: 200,
    marginHorizontal: 10,
  },
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
