import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className='w-full flex flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI-Powered Promopts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative promopts
      </p>

      <Feed />
    </section>
  )
}

export default Home