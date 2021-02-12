import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 130,
    width: 92,
    borderRadius: 3,
    paddingTop: 10,
  },
  CategoryNameImage: {
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 80,
    color: '#837e7c',
    textAlign: 'center',
  },
  viewConatiner: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    borderRadius: 70 / 2,
    shadowColor: '#BDBAB9',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: '#fff',
  },

  textStyle: {
    color: '#959595',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textContiner: {
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    alignSelf: 'center',
  },
});

export default styles;
