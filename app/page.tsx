import Link from "next/link";
import moment from "moment";
import { Mooli } from "next/font/google";
import {
  BiChevronDown,
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGitlab,
} from 'react-icons/bi';

import { highlights, expertises, educations, careers, sideProjects } from './constant'

const mooli = Mooli({ weight: '400', subsets: ["latin"] });

const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return <div className="flex items-center gap-4">
    <h2 className={`${mooli.className} text-nowrap text-4xl w-fit`}> { title } </h2>
    <div className="border-b-2 border-primary w-full"></div>
  </div>
};
interface TimelineContentObject {
  time: string;
  title: string;
  lists?: string[];
  hideList?: boolean;
}
const TimelineContent: React.FC<TimelineContentObject> = ({
  time,
  title,
  lists,
  hideList = false,
}) => {
  return <div className="my-2">
    <label className="font-semibold text-secondary">{ time }</label>
    <h4 className="text-2xl">{ title }</h4>
    {lists?
      <ul className={`mt-2 ${hideList ? 'list-none' : 'list-disc'}`}>
        {lists.map((list, listIndex) => {
          return <li key={listIndex}> { list } </li>
        })}
      </ul>
    : <></>}
  </div>
};

// Section Components
const ProfileSection: React.FC = () => {
  return <div className="h-screen flex flex-col justify-center">
    <h1 className={`${mooli.className} text-5xl`}> Hans Cahya </h1>
    <h3 className="mt-2 text-3xl"> Frontend Engineer </h3>

    <div className="mt-10 text-lg">
      <div>
        <span className="font-semibold">Phone</span>
        <span>&nbsp; +62-856-1142-982</span>
      </div>
      <div>
        <span className="font-semibold">Email</span>
        <span>&nbsp; mail@hanscahya.com</span>
      </div>
      <div>
        <span className="font-semibold">Address</span>
        <span>&nbsp; Tangerang, Banten</span>
      </div>
    </div>

    <div className="mt-5 flex gap-4">
      <Link className="hover:underline" href={`https://linkedin.com`}>LinkedIn</Link>
      <Link className="hover:underline" href={`https://github.com`}>Github</Link>
      <Link className="hover:underline" href={`https://gitlab.com`}>Gitlab</Link>
    </div>

    <Link
      className="mt-10 flex items-center cursor-pointer"
      href="#gohere"
    >
      Get to know me better
      <BiChevronDown size={20} />
    </Link>
  </div>
};
const AboutSection: React.FC = () => {
  return <div id="gohere" className="h-screen flex flex-col justify-center">
    <SectionTitle title="About Me" />
    <p className="mt-5 my-2">I&apos;m a frontend engineer, with 5+ years of experience, specializing in Nuxt (Vue.js) and Next (React.js) frameworks.</p>
    <p className="my-2">I&apos;m passionate to work as a web developer, since kid. I like simplicity and very well organized.</p>
    <p className="my-2">I&apos;m meticulous in my approach, ensuring clear documentation and descriptive Git commit messages.</p>
    <p className="my-2">Problem-solving is a core part of what I enjoy about development, and I thrive on finding elegant solutions.</p>
    <p className="my-2">My preference for simplicity guides my work, ensuring user-friendly and maintainable web experiences.</p>
  </div>
};
const EducationSection: React.FC = () => {
  return <div className="flex flex-col justify-center pb-5">
    <SectionTitle title="Education" />
    <div className="mt-5 flex flex-col gap-y-5">
      {educations.map((item, itemIndex) => {
        return <TimelineContent
          key={itemIndex}
          time={item.time}
          title={item.title}
          lists={item.lists}
          hideList={true}
        />
      })}
    </div>
  </div>
};
const HighlightSection: React.FC = () => {
  return <div className="flex flex-col justify-center pb-5">
    <SectionTitle title="Highlights" />
    <ul className="mt-5 list-disc">
      {highlights.map((item, itemIndex) => {
        return <li key={itemIndex} className="my-2">
          {item}
        </li>
      })}
    </ul>
  </div>
};
const ExpertiseSection: React.FC = () => {
  return <div className="flex flex-col justify-center pb-5">
    <SectionTitle title="Area of Expertise" />
    <ul className="mt-5 list-disc">
      {expertises.map((item, itemIndex) => {
        return <li key={itemIndex} className="my-2">
          <h4 className="text-lg">{item.label}</h4>
          <ul className="ml-5 mb-5 list-disc">
            {item.items.map((subitem, subitemIndex) => {
              return <li key={subitemIndex} className="my-2">
                {subitem}
              </li>
            })}
          </ul>
        </li>
      })}
    </ul>
  </div>
};
const CareerSection: React.FC = () => {
  return <div className="flex flex-col justify-center pb-5">
    <SectionTitle title="Careers" />
    <div className="mt-5 flex flex-col gap-y-5">
      {careers.map((career, careerIndex) => {
        return <TimelineContent
          key={careerIndex}
          time={career.time}
          title={career.title}
          lists={career.lists}
        />
      })}
    </div>
  </div>
};
const SideProjectSection: React.FC = () => {
  return <div className="flex flex-col justify-center pb-5">
    <SectionTitle title="Side-Project" />
    <div className="mt-2">
      Beside work a full-time job, I sometimes also work on a side-projects, ranging from developing a company profile to a full public & admin dashboard web app.
    </div>

    <div className="mt-5 flex flex-col gap-y-5">
      {sideProjects.map((project, projectIndex) => {
        return <TimelineContent
          key={projectIndex}
          time={project.time}
          title={project.title}
          lists={project.lists}
          hideList={true}
        />
      })}
    </div>
  </div>
};
const ContactSection: React.FC = () => {
  return <div className="min-h-screen flex flex-col justify-center pb-5">
    <SectionTitle title="Contact" />

    <div className="mt-10 text-lg">
      <div>
        <span className="font-semibold">Phone</span>
        <span>&nbsp; +62-856-1142-982</span>
      </div>
      <div>
        <span className="font-semibold">Email</span>
        <span>&nbsp; mail@hanscahya.com</span>
      </div>
      <div>
        <span className="font-semibold">Address</span>
        <span>&nbsp; Tangerang, Banten</span>
      </div>
    </div>

    <div className="mt-5 flex flex-col gap-4">
      <Link className="flex items-center gap-2 hover:underline" href={`https://linkedin.com`}>
        <BiLogoLinkedin />LinkedIn
      </Link>
      <Link className="flex items-center gap-2 hover:underline" href={`https://github.com`}>
        <BiLogoGithub />Github
      </Link>
      <Link className="flex items-center gap-2 hover:underline" href={`https://gitlab.com`}>
        <BiLogoGitlab />Gitlab
      </Link>
    </div>
  </div>
};

function HomePage() {
  return <div className="grid grid-cols-10">
    <div className="col-start-2 col-end-10 lg:col-start-4 lg:col-end-8">
      <ProfileSection />
      <AboutSection />

      <div className="grid gap-y-40">
        <EducationSection />
        <HighlightSection />
        <ExpertiseSection />
        <CareerSection />
        <SideProjectSection />
      </div>

      <ContactSection />

      <div className="mb-4 text-sm">
        &copy;{ moment().format('YYYY') } by Hans Cahya. Built using Next.js, Tailwind CSS, and Netlify.
      </div>
    </div>
  </div>
}

export default HomePage;
