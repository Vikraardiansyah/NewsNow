import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {formatDate} from '../../../../utils/formatDate';
import {IArticles} from '../../../../types.ts/newsType';

const NewsCard = ({articles}: {articles: IArticles}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: articles.urlToImage}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.author}>{articles.author}</Text>
        <Text style={styles.title}>{articles.title}</Text>
        <Text style={styles.description}>
          {formatDate(articles.publishedAt)}
        </Text>
      </View>
    </View>
  );
};

export default NewsCard;
