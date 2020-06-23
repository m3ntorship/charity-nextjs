import React from "react";
import Link from "next/link";

const Links = ({ links, title }) => {
  const allLinks = links.map(({ id, text, url }) => {
    return (
      <li key={id} className="pb-4">
        <Link href={url}>
          <a>{text}</a>
        </Link>
      </li>
    );
  });
  return (
    <div className="footer-card lg:my-0 my-6">
      <h3 className="text-c000 text-lg font-semibold mb-8">"{title}"</h3>
      <ul className="flex flex-col flex-wrap h-48">{allLinks}</ul>
    </div>
  );
};

export default Links;
