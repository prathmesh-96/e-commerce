import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 130,
    backgroundColor: 'white',
    width: screenWidth,
    marginTop: 10,
  },
  orderCard: {
    flexDirection: 'row',
  },
  status: {
    fontSize: 16,
    padding: 5,
    marginLeft: 15,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 21,
    letterSpacing: 0.03,
    textTransform: 'capitalize',
  },
  date: {
    fontSize: 16,
    padding: 5,
    marginLeft: 15,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 21,
    letterSpacing: 0.03,
    textTransform: 'capitalize',
  },
  orderText: {
    fontSize: 14,
    padding: 5,
    marginLeft: 15,
    color: '#261815',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
    letterSpacing: 0.03,
  },
  orderValue: {
    fontSize: 14,
    padding: 5,
    color: '#261815',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 19,
    letterSpacing: 0.03,
  },
});

export default styles;
