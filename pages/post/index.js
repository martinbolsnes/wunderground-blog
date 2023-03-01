import Link from 'next/link';
import groq from 'groq';
import client from '../../client';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = ({ posts }) => {
  return (
    <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-28'>
      <h1 className='font-sans text-3xl text-gray-900'>Articles</h1>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
        {posts.length > 0 &&
          posts.map(
            ({
              _id,
              title = '',
              slug = '',
              publishedAt = '',
              mainImage = '',
              author = '',
              name = '',
            }) =>
              slug && (
                <div key={_id}>
                  <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                    <div>
                      <Image
                        src={urlFor(mainImage).url()}
                        alt={`${title}`}
                        width={500}
                        height={400}
                        priority='true'
                        className='image-shadow'
                      />
                    </div>
                    <div className='flex flex-col md:gap-4 gap-2 pt-4 pb-8'>
                      <h1 className='font-sans font-medium text-neutral-900 text-2xl uppercase'>
                        {title}
                      </h1>
                      <p className='font-sans text-neutral-700 text-xs uppercase'>
                        {new Date(publishedAt).toDateString()}
                      </p>
                    </div>
                  </Link>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(
    groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `
  );
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default Index;
