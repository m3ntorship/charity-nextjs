import React from 'react';
import { Widget } from '../shared/Widget';
import { ListItemWithThumbnail } from '../shared/ListItemWithThumbnail';

const RecentArticles = ({ data, recentArticlesTitle }) => {
  const isMobile = false;

  return (
    <Widget title={recentArticlesTitle}>
      <div className="pt-5 pb-10">
        {data.map(articleData => {
          return (
            <ListItemWithThumbnail data={articleData} key={articleData.id} />
          );
        })}
      </div>
    </Widget>
  );
};

export { RecentArticles };
