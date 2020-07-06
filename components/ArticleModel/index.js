import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CarouselProvider, Slide, Slider, DotGroup } from 'pure-react-carousel';

import useI18n from '../../hooks/use-i18n';
import { useDirectionalValue } from '../../hooks/useDirectionalValue';

const ArticleModel = ({ data }) => {
  const {
    image_main,
    title,
    body,
    author: { username }
  } = data;

  return (
    <div className="article-model grid grid-cols-1 row-gap-3 lg:grid-cols-12 ">
      {image_main && image_main.length === 1 ? (
        <ArticleImg url={image_main[0].url} />
      ) : (
        <MainImagesCarousel images={image_main} />
      )}
      <Headline title={title} username={username} />{' '}
      <div className="text-content col-start-1 col-span-1 lg:col-span-12 sm:grid-rows-1">
        <ReactMarkdown className="markdown grid" source={body} />
      </div>
    </div>
  );
};

// article headline
const Headline = ({ title, username }) => {
  const i18n = useI18n();
  const comments = `${i18n.t('comments')}`;
  return (
    <header className="col-start-1 col-end-13 mt-auto">
      <div className="content-info text-center md:text-left">
        <span className="text-c600 mr-2 text-xxs">
          <i className="fas fa-user-tie mr-1 text-c500"></i>
          {username}
        </span>
        <span className="text-c600 mr-2 text-xxs">
          <i className="fas fa-comments mr-1 text-c500"></i>
          43 {comments}
        </span>
        <h4 className="text-c100 font-bold text-large">{title}</h4>
      </div>
    </header>
  );
};

const ArticleImg = ({ url }) => {
  return (
    <div
      style={{ height: '100%', transform: `scaleX(${useDirectionalValue(1)})` }}
      className="col-start-1 col-span-1 lg:col-span-12"
    >
      <img
        src={url}
        alt="Cover"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

const MainImagesCarousel = ({ images }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={480}
      totalSlides={images.length}
      isIntrinsicHeight="true"
      isPlaying="true"
      lockOnWindowScroll="true"
      className="causes__carousel causes__carousel__grid text-center col-span-12 grid"
    >
      <Slider className=" col-span-6 " style={{ transform: `scaleX(1)` }}>
        {images.map(image => {
          const { _id, url } = image;
          return (
            <Slide className="grid grid-cols-12 " key={_id}>
              <ArticleImg url={url}></ArticleImg>
            </Slide>
          );
        })}
      </Slider>

      <div className="flex items-center justify-center text-lg col-start-1 col-end-6 row-start-2 row-end-3 pt-2">
        <DotGroup className="causes_dots_group" />
      </div>
    </CarouselProvider>
  );
};

export default ArticleModel;
