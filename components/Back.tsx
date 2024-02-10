import { Pressable, Image, StyleSheet } from 'react-native';

const Back = ({ navigation }: any) => {
  return (
    <Pressable onPress={() => navigation.goBack(null)} style={styles.container}>
      <Image source={require('../assets/arrow-left.png')} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d7d8de',
    padding: 10,
    marginLeft: 20,
  },
});
export default Back;
