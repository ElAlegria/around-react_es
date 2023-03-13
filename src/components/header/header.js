import headerLogo from '../../images/logo.png';

function AppHeader() {
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
export default AppHeader;
