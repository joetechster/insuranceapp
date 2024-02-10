import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    gap: 24,
  },
  subscription: {
    padding: 20,
    backgroundColor: '#eefcf8',
    borderColor: '#c5f4e8',
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 10,
  },
  sub_name: { fontWeight: '800', fontSize: 16 },
  sub_price: { fontSize: 30, fontWeight: '800' },
  sub_duration: { opacity: 0.5, fontWeight: '400', fontSize: 16 },
  select_card: { paddingVertical: 5, paddingLeft: 5 },
  form: { borderStyle: 'dashed', borderWidth: 1, borderColor: '#d7dae0' },
  confirm_payment: { padding: 13 },
  choose_other: {
    padding: 13,
    backgroundColor: 'white',
    color: '#525c76',
    fontSize: 12,
  },
  chackbox_text: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 14,
    color: '#b2b7c2',
    textDecorationLine: 'none',
  },
  checkbox_inner: { borderWidth: 2, borderRadius: 5 },
  checkbox_outer: { borderColor: '#8c93a3', borderRadius: 5 },
  expiry_cvv_wrapper: { flexDirection: 'row', gap: 20 },

});

export default styles;
