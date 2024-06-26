import Link from 'next/link';
import { Mooli } from 'next/font/google';
import { BiChevronDown } from 'react-icons/bi';

const mooli = Mooli({ weight: '400', subsets: ['latin'] });

const SectionProfile: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className={`${mooli.className} text-5xl`}> Hans Cahya B</h1>
      <h3 className="mt-2 text-3xl"> Front-End Engineer </h3>

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

      <div className="mt-5 flex gap-4">
        <Link className="hover:underline" href={`https://linkedin.com`}>
          LinkedIn
        </Link>
        <Link className="hover:underline" href={`https://github.com`}>
          Github
        </Link>
        <Link className="hover:underline" href={`https://gitlab.com`}>
          Gitlab
        </Link>
      </div>

      <Link
        className="mt-3 flex items-center cursor-pointer"
        href="/portfolio.pdf"
      >
        <span className="hover:underline">Portfolio</span>
        &nbsp;
        <span className="inline-block bg-secondary text-white text-xs px-2 rounded-full tracking-wide">
          new
        </span>
      </Link>

      <Link className="mt-10 flex items-center cursor-pointer" href="#hireme">
        Get to know me better
        <BiChevronDown size={20} />
      </Link>
    </div>
  );
};

export default SectionProfile;
