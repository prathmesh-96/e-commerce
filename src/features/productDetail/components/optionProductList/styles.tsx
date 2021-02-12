import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  seperator: {
    width: 20,
  },
  listContainer: {
    marginHorizontal: '5%',
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 27,
    fontStyle: 'normal',
    marginLeft: 10,
  },
  similarOptionContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: '3%',
  },
});

export default styles;
