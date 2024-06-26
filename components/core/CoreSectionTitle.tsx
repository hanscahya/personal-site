import { Mooli } from 'next/font/google';
const mooli = Mooli({ weight: '400', subsets: ['latin'] });

const CoreSectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex items-center gap-4">
      <h2 className={`${mooli.className} text-nowrap text-4xl w-fit`}>
        {' '}
        {title}{' '}
      </h2>
      <div className="border-b-2 border-primary w-full"></div>
    </div>
  );
};

export default CoreSectionTitle;
