import { Text, TextStyle, FlexStyle } from 'react-native';

interface FontTextProps{ 
  style?: TextStyle 
  children?: any 
}

const FontText = (props: FontTextProps) => {
  return (
    <Text {...props} style={[{ fontFamily: 'JosefinSans-Regular' }, props.style]}>
      {props.children}
    </Text>
  );
};

export default FontText;
