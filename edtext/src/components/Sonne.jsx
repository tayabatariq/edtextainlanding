import React from 'react';

const SonneSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4">
              <img src="/images/sonne1.jpg" alt="Sonne Cover 1" className="rounded-xl shadow-md" />
              <img src="/images/sonne2.jpg" alt="Sonne Cover 2" className="rounded-xl shadow-md" />
              <img src="/images/sonne3.jpg" alt="Sonne Cover 3" className="rounded-xl shadow-md" />
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
          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="flex justify-center gap-8 flex-wrap">
              <img src="/images/logo1.png" alt="Partner Logo 1" className="h-16" />
              <img src="/images/logo2.png" alt="Partner Logo 2" className="h-16" />
              <img src="/images/logo3.png" alt="Partner Logo 3" className="h-16" />
              <img src="/images/logo4.png" alt="Partner Logo 4" className="h-16" />
              <img src="/images/logo5.png" alt="Partner Logo 5" className="h-16" />
              <img src="/images/logo6.png" alt="Partner Logo 6" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SonneSection;