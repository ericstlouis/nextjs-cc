import React from 'react'
import Link from 'next/link'

const ArticleItem = ({article}) => {
  return (
      //as is use for optional parameter use for dynamic routing it changes the url
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a>
          <div
            key={article.id}
            className="border-solid border-2 border-black rounded-lg">
            <h3 className="text-center font-bold text-xl">{article.title} &rarr;</h3>
            <p>{article.body}</p>
          </div>
      </a>
    </Link>
  );
}

export default ArticleItem