import Button from "../components/Button";
import TitleBlock from "../components/TitleBlock";
import { mapImg } from "../script/images";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__info-column">
        <header className="contacts__header">
          <TitleBlock pretitle="Contact" title="Information" />
        </header>

        <div className="contacts__group">
          <h3 className="contacts__group-title">Company Name</h3>
          <address className="contacts__group-text">
            1234 Sample Street Austin Texas 76401
          </address>
        </div>

        <div className="contacts__group">
          <h3 className="contacts__group-title">512.333.2222</h3>
          <a
            href="mailto:sampleemail@gmail.com"
            className="contacts__group-text"
          >
            sampleemail@gmail.com
          </a>
        </div>

        <Button label="Contact US" to="/contacts" theme="dark">
          Contact US
        </Button>
      </div>

      <img className="contacts__img" src={mapImg} alt="Map of location" />
    </section>
  );
};

export default Contacts;
