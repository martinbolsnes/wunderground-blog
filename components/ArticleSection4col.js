import Link from 'next/link';
import groq from 'groq';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import client from '../client';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ArticleSection4col = ({ posts }) => {
  return (
    <section className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-20'>
      <h3 className='font-sans text-neutral-700 text-lg -mt-10 mb-6'>Latest</h3>
      <div className='grid grid-rows-1 md:grid-cols-4 lg:gap-8 gap-4'>
        {/* {posts.length < 0 &&
          posts.map(
            ({
              _id,
              title = '',
              slug = '',
              publishedAt = '',
              mainImage = '',
              categories = '',
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
                      <h2 className='font-sans font-light text-neutral-800 text-xs uppercase'>
                        {categories}
                      </h2>
                      <h1 className='font-sans font-medium text-neutral-900 text-2xl uppercase'>
                        {title}
                      </h1>
                      <h3 className='font-sans text-neutral-900 text-xs uppercase'>
                        {name}
                      </h3>
                      <p className='font-sans font-light text-neutral-500 text-xs uppercase'>
                        {new Date(publishedAt).toDateString()}
                      </p>
                    </div>
                  </Link>
                </div>
              )
          )} */}
      </div>
    </section>
  );
};

/* export async function getStaticProps() {
  const posts = await client.fetch(
    groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc){
        title,
          _id,
          slug,
          publishedAt,
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
} */

export default ArticleSection4col;
