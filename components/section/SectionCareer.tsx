import { careers } from '@/app/constant';

import CoreSectionTitle from '@/components/core/CoreSectionTitle';
import CoreTimelineContent from '@/components/core/CoreTimelineContent';

const SectionCareer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center pb-5">
      <CoreSectionTitle title="Careers" />
      <div className="mt-5 flex flex-col gap-y-5">
        {careers.map((career, careerIndex) => {
          return (
            <CoreTimelineContent
              key={careerIndex}
              time={career.time}
              title={career.title}
              lists={career.lists}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionCareer;
