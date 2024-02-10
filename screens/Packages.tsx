import { View, ScrollView } from 'react-native';
import Text from '../components/FontText';
import styles from '../styles/Packages_styles';
import app_styles from '../styles/App_styles';
import ImageCard from '../components/ImageCard';
import Gap from '../components/Gap';
import SubscriptionCard from '../components/SubscriptionCard';

const Packages = ({navigation}: any) => {
  const subscription = {};

  return (
    <ScrollView style={styles.container}>
      <Gap />
      <ImageCard
        image={require('../assets/heart-tick.png')}
        title="Healt Insurance"
        text="Subscribe to your preferred insurance packages"
        backgroundColor="#f4fde7"
        borderColor="#e9fcd5"
        onPress={() => navigation.navigate("Subscriptions")}
      />
      <Gap />
      <ImageCard
        image={require('../assets/call-calling.png')}
        title="Consultation"
        text="Book sessions with pathologist to review and prescribe drugs"
        backgroundColor="#e6f0fe"
        borderColor="#b2d0fe"
      />
      <Gap />
      <ImageCard
        image={require('../assets/health.png')}
        title="Prescription"
        text="View and manage all your prescriptions here."
        backgroundColor="#fffae5"
        borderColor="#ffedaf"
      />
      <Gap height={40} />
      <Text style={app_styles.boldText}>Current Subscription</Text>
      <Gap height={10} />
      {subscription ? (
        <SubscriptionCard new_sub={false} />
      ) : (
        <Text style={app_styles.faintText}>No active plan</Text>
      )}
    </ScrollView>
  );
};

export default Packages;
