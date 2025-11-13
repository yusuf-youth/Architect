import { aboutImg1, aboutImg2, aboutImg3 } from "../../script/images";
import Button from "../Button";

function About() {
  return (
    <section className="about">
      <div className="about__images">
        <img
          className="about__image about__image--1"
          src={aboutImg1}
          alt=""
          width="270"
          height="265"
        />
        <img
          className="about__image about__image--3"
          src={aboutImg3}
          alt=""
          width="270"
          height="345"
        />
        <img
          className="about__image about__image--2"
          src={aboutImg2}
          alt=""
          width="270"
          height="140"
        />
      </div>
      <div className="about__content">
        <h2 className="about__title">About</h2>
        <p className="about__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button to="/" label="Read More" theme="dark">
          Read More
        </Button>
      </div>
    </section>
  );
}

export default About;
