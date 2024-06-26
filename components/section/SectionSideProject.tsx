import { sideProjects } from '@/app/constant';

import CoreSectionTitle from '@/components/core/CoreSectionTitle';
import CoreTimelineContent from '@/components/core/CoreTimelineContent';

const SectionSideProject: React.FC = () => {
  return (
    <div className="flex flex-col justify-center pb-5">
      <CoreSectionTitle title="Side-Project" />
      <div className="mt-2">
        Beside work a full-time job, I sometimes also work on a side-projects,
        ranging from developing a company profile to a full public & admin
        dashboard web app.
      </div>

      <div className="mt-5 flex flex-col gap-y-5">
        {sideProjects.map((project, projectIndex) => {
          return (
            <CoreTimelineContent
              key={projectIndex}
              time={project.time}
              title={project.title}
              lists={project.lists}
              hideList={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionSideProject;
