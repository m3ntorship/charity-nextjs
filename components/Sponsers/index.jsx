import React from 'react';

const Sponsers = ({ data }) => {
  return (
    <section className="sponsors p-0 border-t sponser-border__top">
      <div className="container">
        <div className="mx-auto my-32 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {data.map(({ id, image: { url } }) => (
            <div className="sponser__logo my-2" key={id}>
              <img className="m-auto" src={url} alt="sponser" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export { Sponsers };
