import { Text, TextStyle, FlexStyle } from 'react-native';

interface FontTextProps{ 
  style?: TextStyle | TextStyle[] 
  children?: any 
}

const FontText = (props: FontTextProps) => {
  return (
    <Text {...props} style={[{ fontFamily: 'JosefinSans-Regular', color: "black" }, props.style]}>
      {props.children}
    </Text>
  );
};

export default FontText;
