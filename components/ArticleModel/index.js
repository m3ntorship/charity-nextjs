import React from "react";
import ReactMarkdown from "react-markdown";
import useI18n from "../../hooks/use-i18n";

const ArticleModel = ({ data }) => {
  const {
    image_main,
    title,
    body,
    author: { username },
  } = data;
  return (
    <div className="article-model grid grid-cols-1 row-gap-8 lg:grid-cols-12 lg:gap-8">
      <ArticleImg url={image_main[0].url} />{" "}
      <Headline title={title} username={username} />{" "}
      <div className="text-content col-start-1 col-span-1 lg:col-span-12 sm:grid-rows-1">
        <ReactMarkdown className="markdown grid" source={body} />
      </div>
    </div>
  );
};

// article headline
const Headline = ({ title, username }) => {
  const i18n = useI18n();
  const comments = `${i18n.t("comments")}`;
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
    <div className="col-start-1 col-span-1 lg:col-span-12">
      <img src={url} alt="Cover" width="100%" height="100%" />
    </div>
  );
};

export default ArticleModel;
