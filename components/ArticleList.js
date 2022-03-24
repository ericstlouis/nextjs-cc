import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({article}) => {
  return (
    <div className="grid grid-cols-3 gap-3 ">
      {article.map((news) => {
        return (
          <ArticleItem key={news.id} article={news} />
        );
      })}
    </div>
  );
}

export default ArticleList
