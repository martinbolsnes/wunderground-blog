import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import client from '../../client';
import Image from 'next/image';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  block: {
    h4: ({ children }) => (
      <h4 className='mt-10 mb-4 text-xl font-medium'>{children}</h4>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          alt={value.alt || ' '}
          loading='lazy'
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      );
    },
  },
};

const Post = ({ post }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    mainImage,
    body = [],
  } = post;
  return (
    <article className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-20 flex flex-col'>
      <div className='flex flex-col lg:w-3/4 w-full gap-4 mt-4'>
        <div className='font-sans font-light text-neutral-800 text-sm uppercase'>
          {categories && (
            <>
              {categories.map((category) => (
                <p key={category}>{category}</p>
              ))}
            </>
          )}
        </div>
        <h1 className='font-sans font-medium text-neutral-900 md:text-6xl text-4xl uppercase'>
          {title}
        </h1>
        {authorImage && (
          <div className='flex items-center'>
            <Image
              className='w-10 h-10 rounded-full avatar ring-1 ring-emerald-800'
              src={urlFor(authorImage).url()}
              alt={`${name}'s picture`}
              width={100}
              height={100}
            />
            <p className='font-sans text-neutral-900 text-sm uppercase'>
              BY {name}
            </p>
          </div>
        )}
      </div>
      {mainImage && (
        <div className='w-full mt-10'>
          <Image
            src={urlFor(mainImage).url()}
            alt={`${title}`}
            width={1200}
            height={450}
            priority='true'
            className='image-shadow'
          />
        </div>
      )}
      <div className='mt-10 mb-20 w-full md:w-2/3 flex flex-col mx-auto'>
        <div className='font-serif text-neutral-700 text-base'>
          <PortableText value={body} components={ptComponents} />
        </div>
      </div>
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  "mainImage": mainImage,
  body
}`;
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
