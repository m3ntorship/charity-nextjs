import { PersonCard } from '../PersonCard';

export const PersonCardsSection = ({ data }) => {
  return (
    <section className="Volunteers-section grid gird-cols-1 gap-8 md:grid-cols-4">
      {data.map(personData => {
        const { id } = personData;
        return (
          <div className="col-span-1 md:col-span-2 lg:col-span-1" key={id}>
            <PersonCard data={personData} />
          </div>
        );
      })}
    </section>
  );
};
