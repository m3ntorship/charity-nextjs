const { default: Volunteers } = require('../../pages/[lng]/volunteers');

import { VolunteerCard } from '../VolunteerCard';

export const VolunteersSection = ({ data }) => {
  return (
    <section className="Volunteers-section grid gird-cols-1 gap-8 md:grid-cols-4">
      {data.map((volunteerData, index) => (
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <VolunteerCard data={volunteerData} key={index} />
        </div>
      ))}
    </section>
  );
};
