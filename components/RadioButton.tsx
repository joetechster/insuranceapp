import { Pressable, View, StyleSheet } from 'react-native';

const RadioButton = ({ selected, setSelected, color = '#07ac85' }: any) => {
  return (
    <Pressable
      onPress={() => setSelected((prev: boolean) => !prev)}
      style={[styles.container, { borderColor: color }]}>
      {selected ? (
        <View style={[styles.inner, { backgroundColor: color }]} />
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,

    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
});
export default RadioButton;
