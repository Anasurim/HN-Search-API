import React from 'react';
import styled from 'styled-components';

const ArticleUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ArticleListItem = styled.li`
  margin-bottom: 8px;

  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export function ArticleList({ articles }) {
  return (
    <ArticleUl>
      {articles.map(({ objectID, story_url, story_title }) => {
        return (
          <ArticleListItem key={objectID}>
            <a href={story_url} target="_blank" rel="noreferrer noopener">
              {story_title}
            </a>
          </ArticleListItem>
        );
      })}
    </ArticleUl>
  );
}
