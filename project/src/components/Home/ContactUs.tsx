import { CONTACT_FORM_FIELDS } from "../../script/data";
import { ArrowRight } from "../../script/icons";
import { personImg } from "../../script/images";
import Field from "../Field";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <header className="contact-us__header">
        <h2 className="contact-us__title">Contact Us</h2>
      </header>

      <div className="contact-us__body">
        <form className="contact-us__form">
          {CONTACT_FORM_FIELDS.map((field) => {
            if (field.isTextarea) {
              return (
                <Field
                  className="contact-us__field contact-us__field--textarea"
                  key="message"
                  id="message"
                  placeholder="Message"
                  required
                  isTextarea
                />
              );
            }

            if (field.isSelect) {
              return (
                <select
                  className="field field--select contact-us__field"
                  defaultValue=""
                  key={field.id}
                >
                  {field.options?.map((option) => (
                    <option
                      className="field__option"
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              );
            }

            return (
              <Field
                className="contact-us__field"
                type={field.type}
                key={field.id}
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
              />
            );
          })}

          <button
            type="submit"
            className="contact-us-form__button button button--dark"
          >
            SEND EMAIL <ArrowRight />
          </button>
        </form>

        <div className="contact-us__image-area">
          <img
            className="contact-us__image"
            src={personImg}
            alt="Man speaking on the phone in bright sunlight"
            width="749"
            height="369"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
