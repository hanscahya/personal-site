import Link from 'next/link';
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoGitlab,
  BiLogoUpwork,
} from 'react-icons/bi';

import CoreSectionTitle from '@/components/core/CoreSectionTitle';

const SectionContact: React.FC = () => {
  return (
    <div
      id="contactme"
      className="min-h-screen flex flex-col justify-center pb-5"
    >
      <CoreSectionTitle title="Contact" />

      <div className="mt-10 text-lg">
        <div>
          <span className="font-semibold">Phone</span>
          <Link href="tel:+628651142982">&nbsp; +62-856-11-42-982</Link>
        </div>
        <div>
          <span className="font-semibold">Email</span>
          <Link href="mailto:mail@hanscahya.com">
            &nbsp; mail@hanscahya.com
          </Link>
        </div>
        <div>
          <span className="font-semibold">Address</span>
          <span>&nbsp; Tangerang, Banten</span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4">
        <Link
          className="flex items-center gap-2 hover:underline"
          href={`https://www.linkedin.com/in/hanscahya`}
          target="_blank"
        >
          <BiLogoLinkedin />
          LinkedIn
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline"
          href={`https://www.upwork.com/freelancers/hansc5`}
          target="_blank"
        >
          <BiLogoUpwork />
          Upwork
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline"
          href={`https://github.com/hanscahya`}
          target="_blank"
        >
          <BiLogoGithub />
          Github
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline"
          href={`https://gitlab.com/hans.cahya`}
          target="_blank"
        >
          <BiLogoGitlab />
          Gitlab
        </Link>
      </div>
    </div>
  );
};

export default SectionContact;
