import headerLogo from '../images/logo.png';

function Header() {
  return (
    <>
      <header className="header">
        <img
          src={headerLogo}
          alt="Logo Around the US"
          className="header__logo"
        />
      </header>
    </>
  );
}
export default Header;
