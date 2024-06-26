import CoreSectionTitle from '@/components/core/CoreSectionTitle';

const AboutSection: React.FC = () => {
  return (
    <div id="hireme" className="h-screen flex flex-col justify-center">
      <CoreSectionTitle title="About Me" />
      <p className="mt-5 my-2">
        I&apos;m a Front-End engineer, with 5+ years of experience, specializing
        in Nuxt (Vue.js) and Next (React.js) frameworks.
      </p>
      <p className="my-2">
        I&apos;m passionate to work as a web developer, since kid. I like
        simplicity and very well organized.
      </p>
      <p className="my-2">
        I&apos;m meticulous in my approach, ensuring clear documentation and
        descriptive Git commit messages.
      </p>
      <p className="my-2">
        Problem-solving is a core part of what I enjoy about development, and I
        thrive on finding elegant solutions.
      </p>
      <p className="my-2">
        My preference for simplicity guides my work, ensuring user-friendly and
        maintainable web experiences.
      </p>
    </div>
  );
};

export default AboutSection;
