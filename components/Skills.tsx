import cn from 'classnames'

import CSS from 'components/Icons/CSS'
import Cypress from 'components/Icons/Cypress'
import Figma from 'components/Icons/Figma'
import Git from 'components/Icons/Git'
import GraphQL from 'components/Icons/GraphQL'
import HTML from 'components/Icons/Html'
import JavaScript from 'components/Icons/JavaScript'
import Jest from 'components/Icons/Jest'
import NextJS from 'components/Icons/NextJS'
import Node from 'components/Icons/Node'
import React from 'components/Icons/React'
import StyledComponents from 'components/Icons/StyledComponents'
import Tailwind from 'components/Icons/Tailwind'
import TypeScript from 'components/Icons/TypeScript'
import VSCode from 'components/Icons/VSCode'

const SKILLS = [
  {
    title: 'Frontend development',
    icons: [HTML, CSS, JavaScript, TypeScript],
    gradient: 'from-[#D8B4FE] to-[#818CF8]'
  },
  {
    title: 'Librerias y frameworks',
    icons: [React, NextJS, Node],
    gradient: 'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]'
  },
  {
    title: 'Testing',
    icons: [Jest, Cypress],
    gradient: 'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]'
  },
  {
    title: 'CSS Framworks',
    icons: [Tailwind, StyledComponents],
    gradient: 'from-[#4B6CB7] to-[#182848]'
  },
  {
    title: 'Otros',
    icons: [Git, GraphQL, VSCode, Figma],
    gradient: 'from-[#7950f2] to-[#F783AC]'
  }
]

const Card = ({ title, gradient, children }) => (
  <a
    className={cn(
      'transform hover:scale-[1.01] transition-all',
      'rounded-xl w-full bg-gradient-to-r p-1',
      gradient
    )}
  >
    <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
      <div className="flex flex-col md:flex-row justify-between">
        <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
          {title}
        </h4>
      </div>
      <div className="flex items-center gap-6">
        {children}
      </div>
    </div>
  </a>
)

export default function Skills() {
  return (
    <>
      <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white'>
        Skills
      </h3>

      <div className='w-full flex flex-col md:grid grid-cols-2 gap-y-8 gap-x-10'>
        {
          SKILLS.map(({ title, gradient, icons }, index) => (
            <Card
              key={index}
              title={title}
              gradient={gradient}
            >
              {
                icons.map((icon, index) => {
                  const Icon = icon
                  return (
                    <Icon
                      key={index}
                      width={50}
                      height={50}
                    />
                  )
                })
              }
            </Card>
          ))
        }
      </div>
    </>
  )
}
