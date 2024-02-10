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
    <View style={{borderRadius: styles.card.borderRadius, overflow: "hidden"}}>
      <Pressable onPress={onPress} style={[styles.card, { borderColor, backgroundColor }]} android_ripple={{color: "#bbbbbb11", borderless: true}}>
        <Image source={image} style={{height: 40, width: 40}}/>
        <View style={styles.cardTextWrapper}>
          <Text style={app_styles.boldText}>{title}</Text>
          <Text style={[app_styles.faintText, {fontSize: 12}]}>{text}</Text>
        </View>
        <Image source={require("../assets/arrow-right.png")} />
      </Pressable>
    </View>
  );
};

export default ImageCard;
