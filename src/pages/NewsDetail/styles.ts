import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 8,
    gap: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  descriptionContent: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default styles;
