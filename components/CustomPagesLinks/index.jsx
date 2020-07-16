import LinkLocale from '../shared/LinkLocale';
import useI18n from '../../hooks/use-i18n';

const CustomPagesLinks = ({ data }) => {
  const i18n = useI18n();
  const pagesLinksTitle = `${i18n.t('otherPages.title')}`;
  return (
    <>
      {/* changed order of grid child element in mobile */}
      <div className="custom_pages_links_wrapper row-start-2 row-end-3">
        <h1 className="text-c000 text-lg font-semibold mb-8 align-baseline">
          {pagesLinksTitle}
        </h1>
        <ul className="custom_pages_links">
          {data.map(({ id, title }) => {
            return (
              <LinkLocale key={id} href={`/pages/[id]`} as={`/pages/${id}`}>
                <a className="flex justify-right items-center pb-4">{title}</a>
              </LinkLocale>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CustomPagesLinks;
