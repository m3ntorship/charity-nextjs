const Logo = ({logoData}) => {
  const {
    logo: { url: logo_url }
  } = logoData;
    return (
      <div className="logo">
        <img className="max-w-full" src={logo_url} alt="logo" />
      </div>
    );
};

export  default  Logo;
