import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, Text, TextInput, View} from 'react-native';
import {getSearchNews, getTopNews} from '../../api/newsApi';

import styles from './styles';
import {IArticles, INews} from '../../types.ts/newsType';
import NewsCard from './components/NewsCard';

const Home = () => {
  const [news, setNews] = useState<INews | void>();
  const [searchText, setSearchText] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<INews | void>();
  useEffect(() => {
    getTopNews().then(data => setNews(data));
  }, []);

  const renderItem = ({item}: {item: IArticles}) => {
    return <NewsCard articles={item} />;
  };

  const handleSearch = () => {
    setSearch(searchText);
    getSearchNews({query: searchText}).then(data => setSearchResults(data));
  };

  const onSearch = (text: string) => {
    if (text) {
      setSearchText(text);
    } else {
      setSearch('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          onChangeText={onSearch}
          placeholder="Search News"
        />
        <Pressable style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </Pressable>
      </View>
      <Text style={styles.title}>{search ? 'Search Results' : 'Top News'}</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={search ? searchResults?.articles : news?.articles}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
      />
    </View>
  );
};

export default Home;
