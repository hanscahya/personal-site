import moment from 'moment';

// import locally
import SectionAbout from '@/components/section/SectionAbout';
import SectionCareer from '@/components/section/SectionCareer';
import SectionContact from '@/components/section/SectionContact';
import SectionEducation from '@/components/section/SectionEducation';
import SectionExpertise from '@/components/section/SectionExpertise';
import SectionHighlight from '@/components/section/SectionHighlight';
import SectionProfile from '@/components/section/SectionProfile';
import SectionSideProject from '@/components/section/SectionSideProject';

function HomePage() {
  return (
    <div className="grid grid-cols-10">
      <div className="col-start-2 col-end-10 lg:col-start-4 lg:col-end-8">
        <SectionProfile />
        <SectionAbout />

        <div className="grid gap-y-40">
          <SectionEducation />
          <SectionHighlight />
          <SectionExpertise />
          <SectionCareer />
          <SectionSideProject />
        </div>

        <SectionContact />

        <div className="mb-4 text-sm">
          &copy;{moment().format('YYYY')} by Hans Cahya B. Built using Next.js,
          Tailwind CSS. Deployed in Netlify.
        </div>
      </div>
    </div>
  );
}

export default HomePage;
