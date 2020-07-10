import cn from 'classnames';
import LinkLocale from '../LinkLocale';

const NavigationLink = ({ url, text, linkClassName, secondaryClassName }) => {
  return (
    <li className={cn('text-center', secondaryClassName)}>
      <LinkLocale href={url}>
        <a className={cn('', linkClassName)}>{text}</a>
      </LinkLocale>
    </li>
  );
};

export default NavigationLink;
