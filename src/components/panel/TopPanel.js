import Logo from "../../images/logo-light.png";

const TopPanel = () => {
  return (
    <div>
      <div className="padding-top-20px panelColor center">
        <div className="padding-top-20px"></div>
            <img src={Logo} alt="Moneyview" className="logo" />
        </div>
    </div>
  );
};

export default TopPanel;
