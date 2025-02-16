import React from 'react';
import sonneone from '../assests/soone1.png'
import sonntwo from '../assests/sonne2.png'
import sonnethree from '../assests/sonne3.png'
import AKPM from '../assests/AKPM.png'
import empowHER from '../assests/empowHER.png'
import i_niche from '../assests/i_niche.png'
import katholischer from '../assests/katholischer.png'
import migrations from '../assests/migrations.png'
import munchen from '../assests/munchen.png'
import petra_kelly from '../assests/petra_kelly.png'
import sonne from '../assests/sonne.png'


const SonneSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4">
              <img src={sonneone} alt="Sonne Cover 1" className="rounded-xl shadow-md" />
              <img src={sonntwo} alt="Sonne Cover 2" className="rounded-xl shadow-md" />
              <img src={sonnethree} alt="Sonne Cover 3" className="rounded-xl shadow-md" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sonne Kidz</h2>
            <p className="text-gray-600 mb-4">
              We provide children with a supportive and enriching program that celebrates their cultural heritage, fosters integration, and promotes holistic development.
            </p>
            <hr className="my-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sonne Magazine</h2>
            <p className="text-gray-600">
              Celebrates creativity and diversity by exploring the intersection of lifestyle, culture, and innovation. We provide a platform that offers insightful perspectives on fashion, art, travel, and technology.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 rounded-xl p-10 shadow-md">
            <div className="flex justify-center gap-8 flex-wrap">
              <img src={AKPM} alt="Partner Logo 1" className="h-13" />
              <img src={i_niche} alt="Partner Logo 2" className="h-13" />
              <img src={katholischer} alt="Partner Logo 3" className="h-13" />
              <img src={migrations} alt="Partner Logo 4" className="h-13" />
              <img src={munchen} alt="Partner Logo 5" className="h-13" />
              <img src={sonne} alt="Partner Logo 6" className="h-13" />
              <img src={petra_kelly} alt="Partner Logo 6" className="h-13" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SonneSection;