import { useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import Gap from '../components/Gap';
import Text from '../components/FontText';
import RadioButton from '../components/RadioButton';
import MyInput from '../components/MyInput';
import styles from '../styles/Subscribe_styles';
import app_styles from '../styles/App_styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../components/Button';
import InsurancePlanType from '../types';

const Subscribe = ({ route }: any) => {
  const plan: InsurancePlanType = route.params;
  const [monthly, setMonthly] = useState(true);
  const [selectBank, setSelectBank] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Gap height={10} />
      <View style={styles.subscription}>
        <Text style={styles.sub_name}>{plan.name}</Text>
        <Text style={styles.sub_price}>
          N{" "}
          {Math.round(plan.price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
          <Text style={styles.sub_duration}>/{plan["package"].slice(0, -2)}</Text>
        </Text>
      </View>

      <Gap height={30} />
      <Text style={app_styles.boldText}>Payment details</Text>
      <Gap height={30} />
      <View style={{ gap: 20 }}>
        <MyInput
          value=""
          style={styles.select_card}
          onPress={() => setSelectBank((prev) => !prev)}
          left={<Image source={require('../assets/bank.png')} width={20} />}
          mid={
            <Text style={{ flex: 1, fontWeight: '800' }}>
              Access master card (**2154)
            </Text>
          }
          right={
            <RadioButton selected={selectBank} setSelected={setSelectBank} />
          }
        />
        <View style={styles.form}></View>
        <MyInput
          placeholder="Card number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          left={
            <Image
              source={
                cardNumber
                  ? require('../assets/mastercard.png')
                  : require('../assets/card.png')
              }
            />
          }
          right={<Image source={require('../assets/arrow-down.png')} />}
        />
        <View style={styles.expiry_cvv_wrapper}>
          <MyInput
            onChangeText={(text) => setExpiryDate(text.slice(0, 5))}
            value={expiryDate}
            placeholder="Expity date"
          />
          <MyInput
            onChangeText={(text) => setCvv(text.slice(0, 3))}
            value={cvv}
            placeholder="CVV"
          />
        </View>

        <BouncyCheckbox
          size={24}
          fillColor={styles.checkbox_outer.borderColor}
          text="Save card for future payments"
          iconStyle={styles.checkbox_outer}
          innerIconStyle={styles.checkbox_inner}
          textStyle={styles.chackbox_text}
          onPress={(isChecked: boolean) => {
            setSaveCard(isChecked);
          }}
        />

        <Gap />

        <Button title="Confirm payment" style={styles.confirm_payment} />
        <Button
          title="Choose other payment methods"
          style={styles.choose_other}
        />
      </View>
    </ScrollView>
  );
};

export default Subscribe;
