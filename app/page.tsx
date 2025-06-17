;import { Button } from '@/components/ui/button'
import { CigaretteIcon, Construction, Facebook, FlameKindling, InspectIcon, Instagram, KanbanSquareIcon, Loader, LucideAward, Mail, SearchX, Twitter } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  const professions = {
    name: ["Family Law","Fire Accident", "ShopLifting", "Sexual Offences", "Drug Offences", "Financial Law", "Insurance", "Consultation"],
    icon: [FlameKindling, KanbanSquareIcon, LucideAward, SearchX, Construction, CigaretteIcon, Loader, InspectIcon],
    text: ["Family law involves legal iss child custody, and adoption.","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui adipisci nulla voluptas natus veniam repellendus","Shoplifting is the often involving concealment or deception.","Sexual offences encompass a range of crimes, including sexual assault, harassment, and exploitation.","Drug offences involve the illegal possession, distribution, or manufacturing of controlled substances.","Financial including banking, securities, and investment regulations.","Insurance law governs the regulation of insurance companies and policies.","Consultation is all about professionsal ethics and the foundations giving care ", "Lorem ipsullendus aut aperiam ratione sapiente odio a?"],
  }
  return (
    <div>
      <div className="container mt-10 block lg:flex">
        <div className="channels flex flex-col gap-y-5 lg:gap-y-8 lg:w-1/2 lg:items-start items-center mb-5 lg:mb-0">
          <p>Chief Consultancy</p>
          <p className="md:text-4xl text-xl lg:py-4">Pastor Steve Olorunpomi</p>
          <p className="gray-500 text-lg">Trusted Legal Expertise</p>
          <p className="text-sm lg:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic in culpa dolores repellendus aut aperiam ratione sapiente odio a?</p>
          <div className="social-icons flex">
            <a href="https://www.facebook.com/steve.olorunpomi" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 mr-2" />
            </a>
            
            <a href="https://www.instagram.com/steve.olorunpomi" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mr-2" />
            </a>
            <a href="https://www.twitter.com/steve_olorunpomi" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 mr-2" />
            </a>
            <a href="mail:ifeoluwajohz@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
            </a>
          </div>
          <Button className='bg-gray-900 text-white rounded-none w-full lg:max-w-xs'>Free Consultaion</Button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://media.istockphoto.com/id/2160439329/photo/happy-multiethnic-male-teacher-smiling-at-primary-school.jpg?s=1024x1024&w=is&k=20&c=U1g9UIavWXjdpteh1eAs_D_Mof_3JTHQK_n433IASuI="
            alt="Steve Olorunpomi"
            className="shadow-lg w-full max-w-xl object-cover"
          />
        </div>
      </div>
      <div>
        <div className="lg:flex block justify-center items-center p-10">
          <p className="text-3xl lg:w-1/2 tracking-wider text-center lg:text-left ">The Area Where I Pratice My Profession</p>
          <p className="text-sm lg:w-1/2 lg:text-right">Lorem ipsum nam itaque eveniet, saepe doloribus dolorem sequi ipsa perspiciatis? Eligendi itaque eum dolores eaque deserunt sit! Quia ipsam sapiente laboriosam doloribus.</p>
        </div>
      </div>
      <div className="services flex justify-evenly flex-wrap">
        <div className='flex flex-wrap justify-evenly gap-5 md:p-10 p-5 bg-gray-50'>
            {professions.name.map((name, idx) => {
            const Icon = professions.icon[idx];
            const textIndex = idx < professions.text.length ? idx : 0; // Ensure we don't go out of bounds
            const professionsal = {
              text: professions.text[textIndex]
            };


            return (
              <div key={name} className="flex flex-col items-center sm:w-40 md:w-64 cursor-pointer gap-4 p-12 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300">
              <Icon className="w-6 h-6 text-gray-700" />
              <span className="lg:text-lg text-base text-center text-yellow-700">{name}</span>
              <p className='line-clamp-3 text-sm text-center'>{professionsal.text}</p>
              </div>
            );
            })}
        </div>
      </div>
  </div>
  )
}

export default HomePage
