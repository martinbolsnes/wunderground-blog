import React from 'react';
import Image from 'next/image';

function ArticleContainer() {
  return (
    <section className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-20'>
      <div className='grid grid-rows-1 md:grid-cols-3 lg:gap-12 gap-6'>
        <div>
          <div>
            <Image
              src='/louvre2.jpg'
              alt='Picture of Louvre'
              width={500}
              height={400}
              className='image-shadow'
            />
          </div>
          <div className='flex flex-col md:gap-4 gap-2 pt-4 pb-8'>
            <p className='font-sans font-light text-gray text-xs uppercase'>
              travel
            </p>
            <h1 className='font-sans font-medium text-black text-2xl uppercase'>
              The Intersection of Art and Travel: Discovering the Worlds Best
              Museums
            </h1>

            <p className='font-sans text-black text-xs uppercase'>
              by Lily Alexandra Brown{' '}
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image
              src='/food2.jpg'
              alt='Picture of a cafe'
              width={500}
              height={400}
              className='image-shadow'
            />
          </div>
          <div className='flex flex-col md:gap-4 gap-2 pt-4 pb-8'>
            <p className='font-sans font-light text-gray text-xs uppercase'>
              food
            </p>
            <h1 className='font-sans font-medium text-black text-2xl uppercase'>
              Traveling for Foodies: Discovering New Cuisines and Cultures
            </h1>

            <p className='font-sans text-black text-xs uppercase'>
              by Jonas Andreas Becker{' '}
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image
              src='/taj-mahal.jpg'
              alt='Picture of a Taj Mahal'
              width={500}
              height={400}
              className='image-shadow'
            />
          </div>
          <div className='flex flex-col md:gap-4 gap-2 pt-4 pb-8'>
            <p className='font-sans font-light text-gray text-xs uppercase'>
              ARCHITECTURE
            </p>
            <h1 className='font-sans font-medium text-black text-2xl uppercase'>
              10 Must-See Architectural Wonders Around the World
            </h1>

            <p className='font-sans text-black text-xs uppercase'>
              BY ETHAN JAMESON
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleContainer;
