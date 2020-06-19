import React from 'react';
import { Loader, ChevronLoader, ListItemLoader } from './myLoader';
import { Widget } from '../shared/Widget';
import { ListItemWithThumbnail } from '../shared/ListItemWithThumbnail';

const RecentArticles = ({ data }) => {
  const isMobile = false

    const title = 'Recent Articles';
    return (
      <Widget title={title}>
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
