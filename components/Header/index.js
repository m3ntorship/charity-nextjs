const Header = ({ socialMediasData }) => {
  return (
    <header>
      <section className="contact-top p-0 items-center bg-c100 hidden md:flex">
        <div className="container px-20 w-full max-w-full md:flex justify-between">
          <div className="welcome-text text-sm">
            Welcome to the best{" "}
            <span className="text-c300 underline italic">Lovims</span> charity
            platform
          </div>
          <div className="social flex text-sm">
            <div>Follow us:</div>
            <div className="ml-1">
              <ul className="inline-block ">
                {socialMediasData.map(({ id, url, fontawesome_icons }) => {
                  return (
                    <li key={id} className="inline px-3 hover:text-c000">
                      <a href={url}>
                        <i className={fontawesome_icons}></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <button
          onClick={() => {}} // here The function when click button
          className="btn w-2/12 h-full text-c100 text-sm font-bold bg-c300"
        >
          Start Donation
        </button>
      </section>
    </header>
  );
};
export default Header;
