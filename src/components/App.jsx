import React, { Component } from 'react';
import { fetchArticles } from 'services/api';
import { ArticleList } from './ArticleList/ArticleList';
import { ThreeDots } from 'components/Loader/Loadeer';

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const response = await fetchArticles('react');
      this.setState({ articles: response });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <>
        {error && <p>Oops, something went wrong: {error.message}</p>}
        {isLoading && <ThreeDots></ThreeDots>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </>
    );
  }
}
