import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    width: '100%',
    height: 40,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: 'grey',
    margin: 4,
    padding: 4,
    borderRadius: 8,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    gap: 8,
  },
});

export default styles;
