import SliderButtons from "../components/SliderButtons";
import { SliderPagination } from "../components/SliderPagination";
import TitleBlock from "../components/TitleBlock";
import { PHOTO_GALLERY_DATA } from "../script/data";

const Gallery = () => {
  return (
    <section className="gallery">
      <header className="gallery__header">
        <TitleBlock
          className="gallery__title-block"
          pretitle="Photo"
          title="Gallery"
        />
      </header>

      <div className="gallery__body">
        <ul className="gallery__list">
          {PHOTO_GALLERY_DATA.map((image) => (
            <li className="gallery__item" key={image.id}>
              <img
                className="gallery__img"
                src={image.img}
                alt={image.alt}
                width={210}
                height={260}
              />
            </li>
          ))}
        </ul>

        <div className="gallery__controls">
          <SliderPagination
            className="gallery__pagination"
            current={1}
            total={5}
          />

          <SliderButtons className="gallery__slider-buttons" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
