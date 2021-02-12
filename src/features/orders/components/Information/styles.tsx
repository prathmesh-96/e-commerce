import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  layoutContainer: {
    borderRadius: 5,
    alignContent: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    marginRight: 10,
    marginLeft: 10,
    paddingBottom: 10,
  },

  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
  },
  imagecontainer: {
    paddingLeft: '1%',
  },
  mainContainer: {
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    paddingLeft: '2%',
  },
  headerName: {
    color: '#874F4F',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22,
    textTransform: 'uppercase',
  },
  textName: {
    color: '#261815',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Open Sans',
    fontSize: 14,
    lineHeight: 19,
    marginTop: 5,
  },
});

export default styles;
