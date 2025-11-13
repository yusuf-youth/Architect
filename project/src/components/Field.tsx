interface FieldProps {
  className?: string;
  id: string;
  placeholder: string;
  type?: "text" | "email" | "tel" | "number";
  required?: boolean;
  isTextarea?: boolean;
}

const Field = ({
  className,
  id,
  placeholder,
  type = "text",
  required = false,
  isTextarea = false,
}: FieldProps) => {
  return (
    <div className={`${className} field`}>
      <label htmlFor={id} className="field__label visually-hidden">
        {placeholder}
      </label>

      {isTextarea ? (
        <textarea
          className="field__input field__input--textarea"
          id={id}
          placeholder={placeholder + (required ? "*" : "")}
          required={required}
          rows={4}
        />
      ) : (
        <input
          className="field__input"
          id={id}
          type={type}
          placeholder={placeholder + (required ? "*" : "")}
          required={required}
        />
      )}
    </div>
  );
};

export default Field;
