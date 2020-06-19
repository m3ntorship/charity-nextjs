import Link from "next/link";
import cn from "classnames";

const NavigationLink = ({ url, text, linkClassName, secondaryClassName }) => {
  return (
    <li className={cn("text-center", secondaryClassName)}>
      <Link href={url}>
        <a className={cn("", linkClassName)}>{text}</a>
      </Link>
    </li>
  );
};

export default NavigationLink;
