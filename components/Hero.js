import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Hero({ posts }) {
  return (
    <section className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-32'>
      <div className='flex flex-col lg:flex-row w-full'>
        {posts &&
          posts.map(
            ({
              _id,
              title = '',
              slug = '',
              mainImage = '',
              categories = '',
              name = '',
            }) =>
              slug && (
                <div key={_id}>
                  <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                    <div className='lg:w-1/2 w-full'>
                      <Image
                        src={urlFor(mainImage).url()}
                        alt={`${title}`}
                        width={772}
                        height={500}
                        priority='true'
                        className='image-shadow'
                      />
                    </div>
                    <div className='flex flex-col lg:w-1/2 w-full gap-4 mt-4 lg:ml-6'>
                      <p className='font-sans font-light text-neutral-800 text-xs uppercase'>
                        {categories}
                      </p>
                      <h1 className='font-sans font-medium text-neutral-900 md:text-4xl text-2xl uppercase'>
                        {title}
                      </h1>
                      <p className='font-serif text-neutral-700 text-base'>
                        Architecture is often thought of as a practical art
                        form, concerned primarily with function and utility.
                        However, just like other forms of art, architecture can
                        also be beautiful, inspiring, and thought-provoking. The
                        ability to appreciate the aesthetic qualities of
                        buildings is an important part of understanding and
                        enjoying the world around us.
                      </p>
                      <p className='font-sans text-neutral-900 text-xs uppercase'>
                        BY {name}
                      </p>
                    </div>
                  </Link>
                </div>
              )
          )}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(
    groq`
    *[_type == "post" && featured]{
      title,
        _id,
        slug,
      "name": author->name,
      "categories": categories[]->title,
      "mainImage": mainImage,
    }
    `
  );
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Hero;
