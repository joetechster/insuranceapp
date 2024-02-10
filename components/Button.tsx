import { Text, Pressable,View, ViewStyle, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  style?: ViewStyle & { color?: string };
  onPress?: () => void
}

const Button = ({ style, title, onPress }: ButtonProps) => {
  const color = style?.color ? style.color : 'white'
  const backgroundColor = style?.backgroundColor
  return (
    <View style={[{borderRadius: 5, overflow: "hidden"}, style, {padding: 0}]}>
    <Pressable style={[styles.container, style]} onPress={onPress} android_ripple={{color: "#bbbbbb11", borderless: true}}>
      <Text
        style={[styles.text, { color }]}>
        {title}
      </Text>
    </Pressable>
    </View>
          
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#07ac85',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
  },
});

export default Button;
