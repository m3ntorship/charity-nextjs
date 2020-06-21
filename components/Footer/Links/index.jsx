import React from 'react';
import Link from 'next/link'

export default class Links extends React.Component {
  render() {
    const links = this.props.links.map(link => {
      return (
        <li key={link.id} className="pb-4">
          <Link href={link.url}>
          <a>
            {link.text}
            </a>
            </Link>
        </li>
      );
    });
    return (
      <div className="footer-card lg:my-0 my-6">
        <h3 className="text-c000 text-lg font-semibold mb-8">
          {this.props.title}
        </h3>
        <ul className="flex flex-col flex-wrap h-48">{links}</ul>
      </div>
    );
  }
}
