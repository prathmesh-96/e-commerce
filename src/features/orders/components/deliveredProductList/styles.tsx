import { StyleSheet } from 'react-native';

const stylesList = StyleSheet.create({
  seperator: {
    width: 8,
  },
  listContainer: {
    marginLeft: '1%',
    marginRight: '1%',
  },

  headerName: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    textTransform: 'uppercase',
    lineHeight: 22,
    letterSpacing: 0.03,
    color: '#874F4F',
    paddingLeft: 15,
    backgroundColor: '#E5E5E5',
    shadowColor: '#E5E5E5',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default stylesList;
