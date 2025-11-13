interface TitleBlockProps {
  pretitle: string;
  title: string;
  className?: string;
}

const TitleBlock = ({ pretitle, title, className = "" }: TitleBlockProps) => {
  const blockClass = `title-block ${className}`;

  return (
    <hgroup className={blockClass}>
      <p className="title-block__pretitle h2">{pretitle}</p>
      <h2 className="title-block__title">{title}</h2>
    </hgroup>
  );
};

export default TitleBlock;
