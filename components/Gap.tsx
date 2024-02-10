import { View } from 'react-native';

interface GapProps {
  height?: number;
}

const Gap = ({ height = 8 }: GapProps) => {
  return (
    <View style={{ backgroundColor: 'transparent', paddingTop: height }}></View>
  );
};

export default Gap;
