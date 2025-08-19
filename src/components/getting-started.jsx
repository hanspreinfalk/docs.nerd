import Image from 'next/image'
import { useState } from 'react'
import { TableOfContents } from '@/components/table-of-contents'

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full text-left py-4 px-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 px-4 border-t border-gray-100">
          <div className="text-base text-black lg:text-lg space-y-3 pt-4">
            {answer}
          </div>
        </div>
      )}
    </div>
  )
}

export function GettingStartedPage() {
  const [openItems, setOpenItems] = useState({})

  // Define sections for table of contents
  const sections = [
    { id: 'introduccion', title: 'Empezando en Nerd.lat' },
    { id: 'vision-general', title: 'Una visión general de lo que es Nerd' },
    { id: 'vistazo-nerd', title: 'Hechemos un vistazo a Nerd' },
    { id: 'empieza-proyecto', title: 'Empieza tu Proyecto' },
    { id: 'edita-proyecto', title: 'Edita tu Proyecto' },
    { id: 'publica-proyecto', title: 'Publica tu Proyecto' }
  ]

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [
    {
      question: "¿Qué es Nerd.lat?",
      answer: (
        <div>
          <p>Nerd.lat es una plataforma de desarrollo de aplicaciones web impulsada por IA que permite crear, editar y desplegar aplicaciones completas directamente desde tu navegador.</p>
          <p className="mt-2">Utiliza tecnología de inteligencia artificial avanzada para generar código, crear interfaces y manejar la lógica backend de manera automática, facilitando el desarrollo tanto para principiantes como para desarrolladores experimentados.</p>
        </div>
      )
    },
    {
      question: "¿Cómo funciona Nerd.lat?",
      answer: (
        <div>
          <p>Nerd.lat utiliza tecnología de inteligencia artificial avanzada para generar código, crear interfaces y manejar la lógica backend de manera automática, facilitando el desarrollo tanto para principiantes como para desarrolladores experimentados.</p>
        </div>
      )
    },
    {
      question: "¿Cómo funciona Nerd.lat?",
      answer: (
        <div>
          <p>Nerd.lat utiliza tecnología de inteligencia artificial avanzada para generar código, crear interfaces y manejar la lógica backend de manera automática, facilitando el desarrollo tanto para principiantes como para desarrolladores experimentados.</p>
        </div>
      )
    },
    {
      question: "¿Cómo funciona Nerd.lat?",
      answer: (
        <div>
          <p>Nerd.lat utiliza tecnología de inteligencia artificial avanzada para generar código, crear interfaces y manejar la lógica backend de manera automática, facilitando el desarrollo tanto para principiantes como para desarrolladores experimentados.</p>
        </div>
      )
    },
  ]

  return (
    <>
      <TableOfContents sections={sections} />
      <div className="flex flex-col items-start justify-start min-h-[80vh] px-4 lg:px-6">
        <div id="introduccion" className="text-center space-y-3 px-4 lg:px-6 max-w-3xl">
          <h1 className="text-xl font-bold tracking-tight lg:text-3xl text-left">
            Empezando en Nerd.lat
          </h1>
          <p className="text-base text-black lg:text-lg text-left">
            El limite de Nerd.lat es tu imaginación
          </p>
        </div>
        <div id="vision-general" className="text-center space-y-3 px-4 lg:px-6 max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mt-10">
            Una visión general de lo que es Nerd
          </h2>
          <p className="text-base text-black lg:text-lg text-left">
            ¡Bienvenido a esta guía paso a paso sobre cómo crear una aplicación full-stack usando Nerd!
          </p>
        </div>
      <div className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <Image src="/marketing/banner.png" alt="Getting Started" width={1000} height={1000} className="rounded-lg" />
      </div>

      {/* <div className="text-center space-y-3 px-4 lg:px-6 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mt-10">
          Hechemos un vistazo a Nerd
        </h2>
        <p className="text-base text-black lg:text-lg text-left">
          Nerd.lat es una plataforma impulsada por inteligencia artificial que permite a usuarios de cualquier nivel de habilidad crear sitios web completos (full-stack) a través de lenguaje natural. Simplemente describe lo que quieres, y Nerd lo construye para ti.
        </p>
      </div> */}
      
      <div id="vistazo-nerd" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mb-6">
        Hechemos un vistazo a Nerd
        </h2>
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[index]}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
      <div id="empieza-proyecto" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mb-6">
          Empieza tu Proyecto
        </h2>
        <p className="text-base text-black lg:text-lg text-left mb-6">
          Hay muchas formas de empezar a crear tu proyecto en Nerd.lat. Aquí te mostramos algunas de las más comunes.
        </p>
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[index]}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
      <div id="edita-proyecto" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mb-6">
          Edita tu Proyecto
        </h2>
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[index]}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
      <div id="publica-proyecto" className="w-full max-w-3xl mt-6 px-4 lg:px-6">
        <h2 className="text-2xl font-bold tracking-tight lg:text-2xl text-left mb-6">
          Publica tu Proyecto
        </h2>
        <div className="space-y-0">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[index]}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
      
    </div>
    </>
  )
}
  
  