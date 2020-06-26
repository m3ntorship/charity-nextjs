import React from "react";
import { Widget } from "../shared/Widget";
import { SearchBar } from "../shared/SearchBar";

const ArticlesSearch = ({ data }) => {
  return (
    <Widget title={data}>
      <div className="searchbar__container pt-5 pb-10 ">
        <SearchBar />
      </div>
    </Widget>
  );
};

export { ArticlesSearch };
