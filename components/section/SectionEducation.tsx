import { educations } from '@/app/constant';
import CoreSectionTitle from '@/components/core/CoreSectionTitle';
import CoreTimelineContent from '@/components/core/CoreTimelineContent';

const SectionEducation: React.FC = () => {
  return (
    <div className="flex flex-col justify-center pb-5">
      <CoreSectionTitle title="Education" />
      <div className="mt-5 flex flex-col gap-y-5">
        {educations.map((item, itemIndex) => {
          return (
            <CoreTimelineContent
              key={itemIndex}
              time={item.time}
              title={item.title}
              lists={item.lists}
              hideList={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionEducation;
