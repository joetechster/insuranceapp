import { View, Pressable, StyleSheet } from 'react-native';
import Text from './FontText';
import Button from './Button';
import InsurancePlanType from '../types';
import { styles as button_styles } from './Button';
interface SubscriptionCardProps {
  new_sub?: boolean;
  plan?: InsurancePlanType;
  onPress?: () => void;
}

const default_plan: InsurancePlanType = {
  name: 'Standard',
  package: 'monthly',
  description:
    'This plans covers for your most basic needs and regular treatments',
  price: 6000.0,
  createdAt: '2024-02-05T14:02:59.037140+00:00',
  updatedAt: '2024-02-05T14:02:59.037165+00:00',
};

const SubscriptionCard = ({
  onPress,
  plan = default_plan,
  new_sub = true,
}: SubscriptionCardProps) => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 5 }}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={styles.sub_name_bg}>
            <Text style={styles.sub_name}>
              {plan.name}
              {plan.name === 'Standard' && new_sub && ' - Recommended'}
            </Text>
          </View>
          {!new_sub && (
            <View style={styles.sub_duration}>
              <Text style={styles.sub_duration_text}>{plan.package}</Text>
            </View>
          )}
        </View>

        <Text style={styles.sub_price}>
          N{' '}
          {Math.round(plan.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          {new_sub && (
            <Text style={styles.new_sub_duration}>
              {' '}
              /{plan['package'].slice(0, -2)}
            </Text>
          )}
        </Text>

        <View style={styles.description_wrapper}>
          <Text style={styles.description}>{plan.description}</Text>
          {!new_sub && (
            <Text style={styles.days_left_outer}>
              Days left
              <Text style={styles.days_left_inner}> 24</Text>
            </Text>
          )}
        </View>
      </View>

      {new_sub ? (
        <Button
          title="Subscribe"
          style={{
            backgroundColor:
              plan.name !== 'Standard'
                ? 'white'
                : button_styles.container.backgroundColor,
            color: plan.name !== 'Standard' ? '#525c76' : undefined,
            borderColor:
              plan.name !== 'Standard'
                ? '#cacdd5'
                : button_styles.container.backgroundColor,
            borderWidth: 1,
            borderStyle: 'solid',
          }}
          onPress={onPress}
        />
      ) : (
        <Button
          title="Renew"
          style={{ backgroundColor: '#e2e4e8', color: '#b2b7c2' }}
          onPress={onPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eefcf8',
    borderColor: '#cdf5eb',
    borderStyle: 'solid',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
    gap: 8,
    borderRadius: 12,
  },
  sub_name_bg: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#0f1d40',
  },
  sub_name: {
    textTransform: 'uppercase',
    color: '#ffffff',
    fontWeight: '700',
  },
  sub_duration: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#0f1d40',
    borderStyle: 'solid',
    borderRadius: 5,
  },
  sub_duration_text: { textTransform: 'capitalize' },
  new_sub_duration: { opacity: 0.5, fontWeight: '400', fontSize: 16 },
  sub_price: { fontSize: 30, fontWeight: '900' },
  description_wrapper: { flexDirection: 'row', flex: 1, gap: 8 },
  description: { flexWrap: 'wrap', flex: 1 },
  days_left_outer: { opacity: 0.5, alignSelf: 'flex-end', fontSize: 12 },
  days_left_inner: { fontWeight: '800', opacity: 1 },
});

export default SubscriptionCard;
