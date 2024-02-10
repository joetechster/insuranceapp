import { View, Image, Pressable } from 'react-native';
import styles from '../styles/ImageCard_styles';
import app_styles from '../styles/App_styles'
import Text from "../components/FontText"

interface ImageCardProps {
  image: any; // Change to appropriate type
  title: string; 
  text: string;
  borderColor?: string;
  backgroundColor?: string;
  onPress?: () => void
}

const ImageCard = ({
  image,
  title,
  text, 
  onPress, 
  borderColor = '#e3fbc8',
  backgroundColor = '#f4fde7',
}: ImageCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.card, { borderColor, backgroundColor }]}>
        <Image source={image} />
        <View style={styles.cardTextWrapper}>
          <Text style={app_styles.boldText}>{title}</Text>
          <Text style={app_styles.faintText}>{text}</Text>
        </View>
        <Image source={require("../assets/arrow-right.png")} />
      </View>
    </Pressable>
  );
};

export default ImageCard;
