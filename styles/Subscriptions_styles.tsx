import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    gap: 24,
  },
  toggle_wrapper: {
    flexDirection: 'row',
    backgroundColor: '#eeeff2',
    borderRadius: 8,
  },
  package_toggle: {
    padding: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  package_toggle_text: { fontWeight: '800', fontSize: 16 },
});

export default styles;
