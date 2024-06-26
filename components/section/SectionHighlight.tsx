import { highlights } from '@/app/constant';
import CoreSectionTitle from '@/components/core/CoreSectionTitle';

const SectionHighlight: React.FC = () => {
  return (
    <div className="flex flex-col justify-center pb-5">
      <CoreSectionTitle title="Highlights" />
      <ul className="mt-5 list-disc">
        {highlights.map((item, itemIndex) => {
          return (
            <li key={itemIndex} className="my-2">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionHighlight;
