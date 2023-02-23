import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-32'>
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='lg:w-1/2 w-full'>
          <Image
            src='/heroImg.jpg'
            alt='Picture of a builing'
            width={772}
            height={500}
            priority='true'
            className='image-shadow'
          />
        </div>
        <div className='flex flex-col lg:w-1/2 w-full gap-4 mt-4 lg:ml-6'>
          <p className='font-serif text-gray text-xs uppercase'>ARCHITECTURE</p>
          <h1 className='font-serif text-black md:text-5xl text-3xl uppercase'>
            The Art of Architecture: How to Find Beauty in Buildings
          </h1>
          <p className='font-body text-black text-base'>
            Architecture is often thought of as a practical art form, concerned
            primarily with function and utility. However, just like other forms
            of art, architecture can also be beautiful, inspiring, and
            thought-provoking. The ability to appreciate the aesthetic qualities
            of buildings is an important part of understanding and enjoying the
            world around us.
          </p>
          <p className='font-serif text-black text-xs uppercase'>
            BY ETHAN JAMESON
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
