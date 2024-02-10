import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
  card: {
    borderWidth: 1, 
    borderStyle: "solid", 
    borderRadius: 12, 
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row", 
    gap: 10,
    alignItems: "center",
  }, 
  cardTextWrapper: { 
    gap: 5, 
    flex: 1
  },
});

export default styles;