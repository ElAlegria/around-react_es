import headerLogo from '../../images/logo.png';

function AppHeader() {
  return (
    <div>
      <header className="header">
        <img
          src={headerLogo}
          alt="Logo Around the US"
          className="header__logo"
        />
      </header>
    </div>
  );
}
export default AppHeader;
