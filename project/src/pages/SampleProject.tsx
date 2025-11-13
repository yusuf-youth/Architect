import TitleBlock from "../components/TitleBlock";
import {
  sampleProjectImg1,
  sampleProjectImg2,
  sampleProjectImg3,
} from "../script/images";

const SampleProject = () => {
  return (
    <section className="sample-project">
      <header className="sample-project__header">
        <TitleBlock
          className="sample-project__title-block"
          pretitle="Sample"
          title="Project 2"
        />
      </header>

      <div className="sample-project__body">
        <img
          className="sample-project__img"
          src={sampleProjectImg1}
          alt="Modern office workstations with computers"
          width={1170}
          height={435}
        />
        <img
          className="sample-project__img"
          src={sampleProjectImg2}
          alt="Glass-walled meeting room in an office"
          width={419}
          height={428}
        />
        <p className="sample-project__text">{text}</p>
        <img
          className="sample-project__img"
          src={sampleProjectImg3}
          alt="Floor plan of octagonal office layout"
          width={1170}
          height={435}
        />
      </div>
    </section>
  );
};

export default SampleProject;

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.`;
