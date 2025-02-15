import React from 'react'

const Projectmain = () => {
    
const projects = [
    {
      name: 'MOWOWO',
      description: 'Helping women to build careers through coaching and information sharing.',
      logo: '/images/mowowo.png'
    },
    {
      name: 'EmpowHer Girls',
      description: 'The Moving Women Empower Girls Initiative empowers young girls through mentorship, education, and skill-building to foster future changemakers.',
      logo: '/images/empowher.png'
    },
    {
      name: 'Moving Women Empowerment Conference',
      description: 'An event to connect with the sisterhood.',
      logo: '/images/conference.png'
    },
    {
      name: 'Moving Woman Magazine',
      description: 'Showcasing and providing insights into women’s issues.',
      logo: '/images/magazine.png'
    }
  ];
  return (
    <>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          <span className="text-red-500">Our Work:</span> <span className="underline decoration-yellow-400">Projects</span>
        </h2>
        <div className="bg-white shadow-md rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Moving Women Empowerment Network (MWEN)</h3>
          <p className="text-gray-600 mb-6">
            MWEN (Moving Women Empowerment Network) Supporting the advancement of women by providing resources and support for them to succeed in their communities and professional lives.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <img src="/images/conference.jpg" alt="MWEN Event" className="rounded-xl shadow-md" />
            <div>
              {projects.map((project, index) => (
                <div key={index} className="flex items-start mb-4">
                  <img src={project.logo} alt={project.name} className="h-12 w-12 object-contain mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{project.name}</h4>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </>
  )
}

export default Projectmain