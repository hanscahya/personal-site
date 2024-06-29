import Link from 'next/link';
import { Mooli } from 'next/font/google';
import { BiChevronDown, BiLinkExternal } from 'react-icons/bi';

const mooli = Mooli({ weight: '400', subsets: ['latin'] });

const SectionProfile: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className={`${mooli.className} text-5xl`}> Hans Cahya</h1>
      <h3 className="mt-2 text-3xl"> Front-End Engineer </h3>

      <Link
        className="mt-20 flex items-center cursor-pointer"
        href="/portfolio.pdf"
        target="_blank"
      >
        <span className="inline-block bg-secondary text-white text-xs px-2 rounded-full tracking-wide">
          new
        </span>
        &nbsp;
        <span className="hover:underline">My Portfolio</span>
        &nbsp;
        <BiLinkExternal size={14} />
      </Link>

      <Link className="mt-3 flex items-center cursor-pointer" href="#contactme">
        Find me on
        <BiChevronDown size={20} />
      </Link>

      <Link className="mt-3 flex items-center cursor-pointer" href="#hireme">
        Get to know me better
        <BiChevronDown size={20} />
      </Link>
    </div>
  );
};

export default SectionProfile;
