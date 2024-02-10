import { TextInput, ViewStyle, StyleSheet, Pressable } from 'react-native';

interface MyInputProps {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  right?: React.ReactNode;
  left?: React.ReactNode;
  mid?: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}
const MyInput = ({
  right,
  left,
  mid,
  style,
  placeholder,
  value,
  onChangeText,
  onPress,
}: MyInputProps) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      {left ? left : null}
      {mid ? (
        mid
      ) : (
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={styles.container.borderColor}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      )}
      {right ? right : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#e2e4e8',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
  },
  input: { flex: 1, fontWeight: '800', height: 50, color: "black" },
});

export default MyInput;
