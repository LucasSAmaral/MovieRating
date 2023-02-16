import logo from "../../logo-light.svg";
import "./header.css";

const Header = (): JSX.Element => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
