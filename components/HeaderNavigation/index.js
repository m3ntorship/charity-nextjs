import Logo from "../Logo";
import NavigationLink from '../shared/NavigationLink'

const HeaderNavigation = ({logoData,ContactsData,pagesData}) => {
  return (
    <section className="header-nav py-5 px-0">
      <div className="container sm:flex sm:justify-between">
        <div className="logo-links-container sm:justify-between sm:w-full">
          <div className="flex items-center px-10 py-4 justify-between">
            <div className="w-26">
              {/* <Link href="/"> */}
                <Logo  logoData = {logoData}/>
              {/* </Link> */}
            </div>
            <div className="toggle-btn">
              <button
                type="button"
                className="text-gray-600 block"
                // onClick={() => {
                //   setOpen(!isOpen);
                // }}
              >
                {/* {isOpen ? (
                  <i className="fas fa-times text-c100"></i>
                ) : (
                  <i className="fas fa-bars text-c100"></i>
                )} */}
              </button>
            </div>
          </div>
          <ul
            // className={cn("block nav-links", {
            //   hidden: !isOpen,
            // })}
          >
            {/* {pagesData
              .filter((page) => page.show_in_navigation)
              .map(({id,link :{url,text}}) => (
                <NavigationLink
                  key={id}
                  url={url}
                  text={text}
                  secondaryClassName="sm:mx-4 sm:font-bold nav-link"
                  linkClassName="text-c600 hover:text-c100 p-2 mx-1 block"
                />
              ))} */}
          </ul>
        </div>
        <div className="hidden lg:block contacts text-sm mx-6">
          {ContactsData
            .filter(
              (contact) =>
                contact.sub_title === "Email address" ||
                contact.sub_title === "Phone line"
            )
            .map(
              ({
                _id,
                title,
                url,
                sub_title,
                icon: { url: iconUrl, name: IconName },
              }) => {
                return (
                  <div key={_id} className="contact px-5 lg:my-5">
                    <div className="contact-icon">
                      <img className="h-auto" src={iconUrl} alt={IconName} />
                    </div>
                    <div className="information">
                      <a
                        className="block text-c100 font-bold hover:text-c100"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                      <small className="information-small font-bold leading-normal text-c600">
                        {sub_title}
                      </small>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};
export default HeaderNavigation;
