import Link from 'next/link';
import { BiLogoLinkedin, BiLogoGithub, BiLogoGitlab } from 'react-icons/bi';

import CoreSectionTitle from '@/components/core/CoreSectionTitle';

const SectionContact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center pb-5">
      <CoreSectionTitle title="Contact" />

      <div className="mt-10 text-lg">
        <div>
          <span className="font-semibold">Phone</span>
          <span>&nbsp; +62-856-11-42-982</span>
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
        <Link
          className="flex items-center gap-2 hover:underline"
          href={`https://linkedin.com`}
        >
          <BiLogoLinkedin />
          LinkedIn
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline"
          href={`https://github.com`}
        >
          <BiLogoGithub />
          Github
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline"
          href={`https://gitlab.com`}
        >
          <BiLogoGitlab />
          Gitlab
        </Link>
      </div>
    </div>
  );
};

export default SectionContact;
