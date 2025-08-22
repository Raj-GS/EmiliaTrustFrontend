import React from 'react';
import { BookOpen, Users, GraduationCap, Heart, Award, Target,Store } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import { text } from 'stream/consumers';
const projects = [
  {
    id: 1,
    title: 'Inclusivity',
    subtitle: 'Children’s Education',
    description: [
  {
        text: (
          <>
            Inspired by <span className="font-semibold text-gray-800">
              Helen Keller’s belief that “Alone we can do so little; together we can do so much,”
            </span> the <span className="font-semibold text-gray-800">Maria Emilia Burton Trust</span> is committed to creating an inclusive learning environment where every child—regardless of physical ability—has the opportunity to thrive.
          </>
        )
      },
      {  
        text:(
        <>
        We go beyond charity by actively bringing children who are deaf, blind, or differently-abled into the mainstream of education. By partnering with schools that specialize in their unique needs, we ensure equal access to <span className="font-semibold text-gray-800">quality learning, growth, and interaction.</span>
      </>
    
      )
      },
    {
      
      text:(
        <>
      
      At the Maria Emilia Burton Trust, every child is given not just an education, but also a <span className="font-semibold text-gray-800">sense of belonging, dignity, and hope for the future.</span>
     </>
      )
    },
  ],
    icon: BookOpen,
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
    bgColor: 'bg-gray-50'
  },
  {
    id: 2,
    title: 'Empowerment',
    subtitle: 'Women Empowerment',
    description:[
     {
       text: (
        <>
        At the <span className="font-semibold text-gray-800">Maria Emilia Burton Trust</span>, empowerment means unlocking the potential within every individual and giving them the tools to lead lives of dignity and independence.
      </>
      )
       
      
      },
     { text: (
     <>
     Beyond education, the Trust is deeply committed to supporting women and children struggling with <span className="font-semibold text-gray-800">mental health challenges</span>. We provide <span className="font-semibold text-gray-800">specialized care, counseling, and essential support services</span> tailored to their unique needs.
     </>
     )

     },
     { text: 
      (<>
      Through <span className="font-semibold text-gray-800">monthly stipends and assistance</span>, we help cover education and livelihood expenses—ensuring that those facing mental health difficulties not only receive support, but also gain the confidence and resources to become <span className="font-semibold text-gray-800">self-reliant, contributing members of society.</span>
      </>
      )
    }
    ],
    icon: Users,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    bgColor: 'bg-white'
  },
  {
    id: 3,
    title: 'Education',
    subtitle: 'Women Education',
    description: [
      {
        text:
        (
          <>
         At the <span className="font-semibold text-gray-800">Maria Emilia Burton Trust</span>, we believe education is the foundation of lasting change. Our initiatives provide women with <span className="font-semibold text-gray-800">quality learning opportunities, skill development programs, and pathways to higher education and professional growth.</span>

</>
        )
      },
      {
       text:
        (
          <>
        When a woman is educated, she uplifts not only herself but her family and community—breaking the cycle of poverty and creating a ripple effect of opportunity and hope for generations to come.
  </>
        )
      },
  
  
    ],
    icon: GraduationCap,
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    bgColor: 'bg-gray-50'
  }
];

function ProjectSection({ project, index }) {
  const IconComponent = project.icon;
  const isEven = index % 2 === 0;
  
  return (
    <section className={`${project.bgColor} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          isEven ? '' : 'lg:grid-flow-col-dense'
        }`}>
          {/* Text Content */}
          <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
            <div className="max-w-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <IconComponent className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="text-sm font-medium text-indigo-600 uppercase tracking-wide">
                  {project.subtitle}
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                {project.title}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
               {project.description.map((para, idx) => (
    <p
      key={idx}
      className={`text-lg leading-relaxed ${para.bold ? "font-semibold text-gray-800" : "text-gray-600"}`}
    >
      {para.text}
    </p>
  ))}
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600 rounded-2xl opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#c0cbeb] via-white to-[#e59a92] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Building a Better
              <span className="block text-indigo-600">Tomorrow</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
Through <span className="font-semibold text-gray-800">inclusive education, women’s empowerment, and community development</span>, the <span className="font-semibold text-gray-800">Maria Emilia Burton Trust</span> is creating lasting change that transforms lives and strengthens communities.            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
             <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
  <div className="flex justify-center mb-2">
    <GraduationCap className="h-10 w-10 text-primary" />
  </div>
  <div className="text-gray-600 font-medium">
    Children educated and inspired to dream
  </div>
</div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
  <div className="flex justify-center mb-2">
                  <Users className="h-10 w-10 text-primary" />
                  </div>
                <div className="text-gray-600 font-medium">
                  Women empowered with skills and dignity
                  </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
  <div className="flex justify-center mb-2">
                  <Store className="h-10 w-10 text-primary" />
                  </div>
                <div className="text-gray-600 font-medium">Communities touched with hope and progress</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <AnimatedSection key={project.id} delay={index * 200}>
          <ProjectSection project={project} index={index} />
        </AnimatedSection>
      ))}

      {/* Call to Action */}
        <section className="bg-indigo-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Join Our Mission
              </h2>
              <p className="text-xl text-indigo-100 mb-12 leading-relaxed">
                Together, we can create meaningful change and build a more inclusive, 
                empowered society for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
                  Get Involved
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ProjectsPage;


