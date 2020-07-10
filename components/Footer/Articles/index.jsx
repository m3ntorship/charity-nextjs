import React from 'react';
import { parseISO, format } from 'date-fns';
import LinkLocale from '../../shared/LinkLocale';

const Articles = ({ articles, title }) => {
  const getDate = myDate => {
    const theDate = parseISO(myDate);

    return {
      time: format(theDate, 'hh:mm a').toLowerCase(),
      day: format(theDate, 'dd'),
      month: format(theDate, 'MMM'),
      year: format(theDate, 'yyyy')
    };
  };
  const getArticles = articles.map(
    ({ date, id, thumbnail: { url, alternativeText }, description }) => {
      const formattedDate = getDate(date);
      return (
        <LinkLocale key={id} href={`/articles/[id]`} as={`/articles/${id}`}>
          <a className="flex flex-col flex-grow my-2">
            <article className="flex">
              <img
                className="news__image_footer"
                width="72"
                height="72"
                src={url}
                alt={alternativeText}
              />
              <div className="pl-4 flex flex-col justify-between">
                <p className="text-c300 text-xs">
                  {formattedDate.day}-{formattedDate.month}-{formattedDate.year}
                </p>
                <p>{description}</p>
              </div>
            </article>
          </a>
        </LinkLocale>
      );
    }
  );
  return (
    <div className="footer-card flex flex-col lg:my-0 my-6">
      <h3 className="text-c000 text-lg font-semibold mb-8">{title}</h3>
      {getArticles}
    </div>
  );
};

export default Articles;
