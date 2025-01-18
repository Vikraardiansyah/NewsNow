import {INews} from '../types/newsType';

export async function getTopNews() {
  try {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=183daca270264bad86fc5b72972fb82a',
    );
    const data: INews = await response.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
}

export async function getSearchNews({query}: {query: string}) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=183daca270264bad86fc5b72972fb82a`,
    );
    const data: INews = await response.json();
    return data;
  } catch (error) {
    return console.error(error);
  }
}
