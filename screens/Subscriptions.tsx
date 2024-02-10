import { useState } from 'react';
import { ScrollView, View, Pressable } from 'react-native';
import Gap from '../components/Gap';
import Text from '../components/FontText';
import styles from '../styles/Subscriptions_styles';
import SubscriptionCard from '../components/SubscriptionCard';
import { gql, useQuery } from '@apollo/client';
import InsurancePlan, { packages, packagesType } from '../types';

const GET_PLANS = gql`
  query {
    insurancePlans {
      name, 
      description, 
      price, 
      package, 
      createdAt, 
      updatedAt
    }
  }
`;
const Subscriptions = ({navigation}: any) => {
  const [insurancePackage, setPackage] = useState<packagesType>(
    packages.monthly
  );
  const { loading, error, data } = useQuery(GET_PLANS);
  const insurancePlans: InsurancePlan[] = data?.insurancePlans;

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! {error.message}</Text>;

  return (
    <ScrollView style={styles.container}>
      <Gap height={10} />
      <Text style={{ textAlign: 'center' }}>
        Subscribe to your preferred insurance packages
      </Text>
      <Gap />
      <View style={styles.toggle_wrapper}>
        <Pressable
          onPress={() => setPackage('monthly')}
          style={[
            styles.package_toggle,
            {
              backgroundColor:
                insurancePackage === 'monthly' ? '#cacdd5' : 'transparent',
            },
          ]}>
          <Text style={styles.package_toggle_text}>Monthly</Text>
        </Pressable>
        <Pressable
          onPress={() => setPackage('yearly')}
          style={[
            styles.package_toggle,
            {
              backgroundColor:
                insurancePackage === 'yearly' ? '#cacdd5' : 'transparent',
            },
          ]}>
          <Text style={styles.package_toggle_text}>Annually</Text>
        </Pressable>
      </View>
      <View style={{gap: 10, paddingVertical: 20}}>
        {insurancePackage === packages.monthly
          ? insurancePlans
          .filter((plan) => plan['package'] === packages.monthly)
          .map((plan, i) => (
            <SubscriptionCard key={i} plan={plan} onPress={() => navigation.navigate("Subscribe", plan)}/>
          ))
          : insurancePlans
          .filter((plan) => plan['package'] === packages.yearly)
          .map((plan, i) => (
            <SubscriptionCard plan={plan} key={i} onPress={() => navigation.navigate("Subscribe", plan)} />
          ))}
      </View>
    </ScrollView>
  );
};

export default Subscriptions;
