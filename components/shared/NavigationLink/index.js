import cn from 'classnames';
import LinkNoPrefetch from '../LinkNoPrefetch';

const NavigationLink = ({ url, text, linkClassName, secondaryClassName }) => {
  return (
    <li className={cn('text-center', secondaryClassName)}>
      <LinkNoPrefetch href={url}>
        <a className={cn('', linkClassName)}>{text}</a>
      </LinkNoPrefetch>
    </li>
  );
};

export default NavigationLink;
