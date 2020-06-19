import React from 'react';
import ArticleModel from '../ArticleModel';
import { ArticlesSearch } from '../ArticlesSearch';
import { RecentArticlesContainer } from '../../containers/Articles/recentArticles';
import { useCharityAPI } from '../../clients/index';
import { useParams } from 'react-router-dom';

const articleSearchData = {
  title: 'Find Article'
};
export const ArticlePageContent = () => {
  const { id } = useParams();

  const {
    data: articleData,
    loading: articleLoading,
    dataError: error
  } = useCharityAPI(`/articles?id=${id}`);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 row-gap-8">
      <div className="col-span-12 lg:col-span-8">
        <ArticleModel
          data={articleData}
          loading={articleLoading}
          error={error}
        />
      </div>
      <aside className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col">
        <div className="mb-8 sm:mr-8 lg:mr-0 sm:w-1/2 lg:w-full">
          <ArticlesSearch data={articleSearchData} />
        </div>
        <div className="sm:w-1/2 lg:w-full">
          <RecentArticlesContainer />
        </div>
      </aside>
    </div>
  );
};