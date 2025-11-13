import { MISSION_ITEMS } from "../../script/data";

const Mission = () => {
  return (
    <section className="mission">
      <header className="mission__header">
        <h2 className="mission__title">Main Focus/Mission Statement</h2>
      </header>

      <div className="mission__body">
        <ul className="mission__list">
          {MISSION_ITEMS.map((item) => (
            <li className="mission__item" key={item.id}>
              <span className="mission__number" aria-hidden="true">
                {item.id}
              </span>

              <p className="mission__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Mission;
