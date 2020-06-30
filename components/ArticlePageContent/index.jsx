import React from 'react';
import ArticleModel from '../ArticleModel';
import { ArticlesSearch } from '../ArticlesSearch';
import { RecentArticles } from '../RecentArticles';

export const ArticlePageContent = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 row-gap-8">
      <div className="col-span-12 lg:col-span-8">
        <ArticleModel data={data.articles} />
      </div>
      <aside className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col">
        <div className="mb-8 sm:mr-8 lg:mr-0 sm:w-1/2 lg:w-full">
          <ArticlesSearch data={data.articleSearchData} />
        </div>
        <div className="sm:w-1/2 lg:w-full">
          <RecentArticles data={data.articles} />
        </div>
      </aside>
    </div>
  );
};
