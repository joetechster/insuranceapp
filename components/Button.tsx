import { Text, Pressable, ViewStyle, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  style?: ViewStyle & { color?: string };
  onPress?: () => void
}

const Button = ({ style, title, onPress }: ButtonProps) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Text
        style={[styles.text, { color: style?.color ? style.color : 'white' }]}>
        {title}
      </Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    backgroundColor: '#07ac85',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
  },
});

export default Button;
