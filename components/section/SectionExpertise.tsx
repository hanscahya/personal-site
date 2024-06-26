import { expertises } from '@/app/constant';
import CoreSectionTitle from '@/components/core/CoreSectionTitle';

const SectionExpertise: React.FC = () => {
  return (
    <div className="flex flex-col justify-center pb-5">
      <CoreSectionTitle title="Area of Expertise" />
      <ul className="mt-5 list-disc">
        {expertises.map((item, itemIndex) => {
          return (
            <li key={itemIndex} className="my-2">
              <h4 className="text-lg">{item.label}</h4>
              <ul className="ml-5 mb-5 list-disc">
                {item.items.map((subitem, subitemIndex) => {
                  return (
                    <li key={subitemIndex} className="my-2">
                      {subitem}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionExpertise;
