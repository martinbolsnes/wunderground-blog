/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import groq from 'groq';
import client from '../client';
import Divider from '@/components/Divider';
import imageUrlBuilder from '@sanity/image-url';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function about({ authors }) {
  return (
    <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-28'>
      <div className='flex flex-col gap-4 mt-4'>
        <h3 className='font-sans text-neutral-700 text-lg mb-6'>About</h3>
        <h1 className='font-sans font-medium text-neutral-900 lg:w-4/5 w-full md:text-6xl text-4xl uppercase'>
          Discover the beauty of the world through architecture, food, travel,
          and photography
        </h1>
        <div className='w-full mt-4'>
          <Image
            src='/cherry.jpg'
            alt='Picture of a builing'
            width={1200}
            height={500}
            priority='true'
            className='image-shadow'
          />
        </div>
        <h3 className='font-sans text-neutral-900 text-lg mt-6 mb-6 uppercase'>
          We are Wünderground
        </h3>
        <div className='w-full md:w-2/3 flex flex-col'>
          <p className='font-serif text-neutral-700 text-base'>
            Welcome to our blog, where we bring you a diverse mix of content
            covering architecture, food, travel, and photography. Our aim is to
            inspire you to explore the world and appreciate its beauty in all
            its forms.
            <br />
            <br />
            If you're an architecture enthusiast, you'll find articles on
            stunning buildings and structures from around the world. If you're a
            foodie, you'll discover recipes and restaurant recommendations to
            satisfy your cravings. If you love to travel, we'll take you on
            virtual journeys to exotic destinations, sharing insider tips and
            fascinating stories along the way. And if you're a photography
            lover, you'll find plenty of stunning images and useful tips to help
            you capture the beauty of the world around you.
            <br />
            <br />
            Our team of experienced writers and photographers are passionate
            about these topics and we hope that our enthusiasm will be
            contagious. We welcome your comments and feedback, so please feel
            free to share your thoughts and join the conversation. Thank you for
            visiting our blog and we hope you enjoy reading our articles as much
            as we enjoy creating them.
          </p>
        </div>
        <Divider />
        <h3 className='font-sans text-neutral-900 text-lg mt-6 mb-6 uppercase'>
          Our Team
        </h3>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
          {authors.length > 0 &&
            authors.map(({ _id, name = '', image = '', role = '' }) => (
              <div key={_id}>
                <div>
                  <Image
                    src={urlFor(image).url()}
                    alt={`${name}`}
                    width={500}
                    height={400}
                    className='image-shadow'
                  />
                </div>
                <h4 className='font-sans text-neutral-900 text-lg mt-6 mb-6 uppercase'>
                  {name}
                </h4>
                <h5 className='font-sans text-neutral-700 text-lg mb-6'>
                  {role}
                </h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const authors = await client.fetch(
    groq`
      *[_type == "author"]{
          _id,
          name, 
          image,
          role,
      }
    `
  );
  return {
    props: {
      authors,
    },
    revalidate: 10,
  };
}

export default about;
