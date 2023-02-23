import React from 'react';
import Image from 'next/image';

function ArticleSection4col() {
  return (
    <section className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-20'>
      <h3 className='font-sans text-gray text-lg -mt-10 mb-6'>Latest</h3>
      <div className='grid grid-rows-1 md:grid-cols-4 lg:gap-8 gap-4'>
        <div>
          <div>
            <Image
              src='/paris.jpg'
              alt='Picture of Louvre'
              width={500}
              height={400}
              className='image-shadow'
            />
          </div>
          <div className='flex flex-col md:gap-4 gap-2 pt-4 pb-8'>
            <p className='font-sans font-light text-gray text-xs uppercase'>
              Food
            </p>
            <h1 className='font-sans font-medium text-black text-xl uppercase'>
              From Street Food to Fine Dining: A Foodies Guide to Paris
            </h1>

            <p className='font-sans text-black text-xs uppercase'>
              by Leon Matthias Hofmann
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image
              src='/photography2.jpg'
              alt='Picture of a cafe'
              width={500}
              height={400}
              className='image-shadow'
            />
          </div>
          <div className='flex flex-col md:gap-4 gap-2 pt-4 pb-8'>
            <p className='font-sans font-light text-gray text-xs uppercase'>
              photography
            </p>
            <h1 className='font-sans font-medium text-black text-xl uppercase'>
              The Art of Travel Photography: Tips for Capturing the World Around
              You
            </h1>

            <p className='font-sans text-black text-xs uppercase'>
              by Frieda Johanna Müller
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image
              src='/garden.jpg'
              alt='Picture of a Taj Mahal'
              width={500}
              height={400}
              className='image-shadow'
            />
          </div>
          <div className='flex flex-col md:gap-4 gap-2 pt-4 pb-8'>
            <p className='font-sans font-light text-gray text-xs uppercase'>
              travel
            </p>
            <h1 className='font-sans font-medium text-black text-xl uppercase'>
              Exploring the Worlds Most Beautiful Gardens and Parks
            </h1>

            <p className='font-sans text-black text-xs uppercase'>
              BY Amelia Grace Lee
            </p>
          </div>
        </div>
        <div>
          <div>
            <Image
              src='/machu.jpg'
              alt='Picture of a Taj Mahal'
              width={500}
              height={400}
              className='image-shadow'
            />
          </div>
          <div className='flex flex-col md:gap-4 gap-2 pt-4 pb-8'>
            <p className='font-sans font-light text-gray text-xs uppercase'>
              Architecture
            </p>
            <h1 className='font-sans font-medium text-black text-xl uppercase'>
              Traveling Through Time: Exploring the Architecture of Ancient
              Civilizations
            </h1>

            <p className='font-sans text-black text-xs uppercase'>
              BY Matthew William Davis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleSection4col;
