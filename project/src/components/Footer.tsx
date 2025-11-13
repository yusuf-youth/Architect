import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  FOOTER__CONTACTS,
  FOOTER_LINKS,
  FOOTER_SOCIAL,
  type FooterContactItem,
  type FooterSocialLink,
} from "../script/data";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__main">
          <div className="footer__columns">
            <div className="footer__column footer__column--logo">
              <Logo className="footer__logo" invert width={145} height={94} />
            </div>
            <div className="footer__column footer__column--links">
              <h3 className="footer__column-title h4">Information</h3>
              <Nav />
            </div>
            <div className="footer__column footer__column--contacts">
              <h3 className="footer__column-title h4">Contacts</h3>
              <ContactsList />
            </div>
            <div className="footer__column footer__column--social">
              <h3 className="footer__column-title h4">Social Media</h3>
              <SocialList />
            </div>
          </div>
        </div>
      </div>

      <hr className="footer__divider"></hr>

      <div className="footer__extra container">
        <div className="footer__copyright">
          ©<time dateTime="2021">2021</time>
          <span>All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function Nav() {
  return (
    <nav className="footer__nav" aria-label="Footer Information Links">
      <ul className="footer__nav-list">
        {FOOTER_LINKS.map((link) => (
          <li className="footer__nav-item" key={link.title}>
            <Link className="footer__nav-link" to={link.path}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const ContactsList = () => (
  <ul className="footer__contact-list">
    {FOOTER__CONTACTS.map((contact: FooterContactItem, i: number) => (
      <li className="footer__contact-item" key={i}>
        {contact.icon}
        {contact.element}
      </li>
    ))}
  </ul>
);

const SocialList = () => (
  <ul className="footer__social-list" aria-label="Social Media Links">
    {FOOTER_SOCIAL.map((link: FooterSocialLink) => (
      <a
        className="footer__social-link"
        href="#"
        target="_blank"
        aria-label={link.ariaLabel}
        key={link.ariaLabel}
        title={link.ariaLabel}
      >
        {link.icon}
      </a>
    ))}
  </ul>
);
