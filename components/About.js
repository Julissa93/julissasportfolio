import React from 'react'
import Image from 'next/image'
import profile from '../public/profile.jpg'

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Hey there,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              I'm Julissa Napoletano, a software engineer with 4 years
              experience in full stack web development. I specialize in the NERD
              stack which consists of Node, Express, React, and Postgres
              Database. In my most recent experience, I was an Instructor and
              Software Engineer at Fullstack Academy of Code where I was able to
              teach and collaborate with hundreds of brilliant software
              engineers who have now gone off to work at companies like Google,
              Amazon, Bloomberg, Twitter, Etsy, Rockstar Games, and more.
            </p>
            <h3 className="text-2xl font-bold">
              Here are some examples of my work:
            </h3>
            <div className="flex flex-col font-medium">
              <a
                href="https://youtu.be/QT2GAUJgats"
                className={'transition-colors hover:text-yellow-500'}
              >
                • Introduction To Redux Lecture
              </a>
              <a
                href="https://youtu.be/n9ZMlRCUCcM"
                className={'transition-colors hover:text-yellow-500'}
              >
                • Redux Action Types && Creators Lecture
              </a>
              <a
                href="https://youtu.be/rKAqgprVtTA"
                className={'transition-colors hover:text-yellow-500'}
              >
                • Introduction To Databases Lecture
              </a>
              <a
                href="https://github.com/Julissa93/REACTOmg"
                className={'transition-colors hover:text-yellow-500'}
              >
                • Repl Clone Github Project
              </a>
              <a
                href="https://gist.github.com/Julissa93/6a6d29874d34a801d603d2522645025f"
                className={'transition-colors hover:text-yellow-500'}
              >
                • Sequelize Lifecycle Student Documentation
              </a>
            </div>
          </div>
        </div>
        <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default About
