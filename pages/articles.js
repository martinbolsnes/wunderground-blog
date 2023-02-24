import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

function Articles() {
  return (
    <>
      <Head>
        <title>Wünderground - Articles</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <article className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-20 flex flex-col'>
        <div className='flex flex-col lg:w-3/4 w-full gap-4 mt-4'>
          <p className='font-sans font-light text-neutral-800 text-sm uppercase'>
            ARCHITECTURE
          </p>
          <h1 className='font-sans font-medium text-neutral-900 md:text-5xl text-3xl uppercase'>
            The Art of Architecture: How to Find Beauty in Buildings
          </h1>
          <p className='font-serif text-neutral-700 text-lg'>
            Architecture is often thought of as a practical art form, concerned
            primarily with function and utility. However, just like other forms
            of art, architecture can also be beautiful, inspiring, and
            thought-provoking. The ability to appreciate the aesthetic qualities
            of buildings is an important part of understanding and enjoying the
            world around us.
          </p>
          <div className='flex items-center'>
            <Image
              className='w-10 h-10 rounded-full avatar ring-1 ring-emerald-800'
              src='/portrait2.jpg'
              alt='Rounded avatar'
              width={400}
              height={400}
            />
            <p className='font-sans text-neutral-900 text-sm uppercase'>
              BY ETHAN JAMESON
            </p>
          </div>
        </div>
        <div className='w-full mt-10'>
          <Image
            src='/heroImg.jpg'
            alt='Picture of a builing'
            width={1200}
            height={450}
            priority='true'
            className='image-shadow'
          />
        </div>
        <div className='mt-10 w-full md:w-2/3 flex flex-col mx-auto'>
          <p className='font-serif text-neutral-700 text-base'>
            Lorem ipsum dolor sit amet consectetur. Turpis at posuere egestas
            convallis fermentum nascetur adipiscing nunc. In sodales vitae
            malesuada turpis. Sollicitudin ac vestibulum consequat posuere nec
            lacus. Nunc facilisis et sit praesent fusce quisque. At vulputate in
            feugiat nisl eu lorem. Et at sem cras elit molestie. Nisl nisi leo
            maecenas id.
            <br />
            <br />
            Lectus integer mattis aliquet imperdiet nunc vestibulum donec diam
            tortor. Nunc massa arcu morbi augue mattis sit cursus in dictum. Id
            amet eget montes magna non lorem non donec sit. Rutrum risus nulla
            egestas ipsum tincidunt adipiscing velit pulvinar. Quis sapien sed
            lorem nunc. Pellentesque viverra proin volutpat duis imperdiet
            consectetur sed egestas dui. Congue suspendisse ut luctus nunc.
            Donec enim interdum malesuada venenatis sit blandit. Pharetra vel
            nullam euismod vel aenean nisi tellus nunc.
            <br />
            <br />
            Malesuada nullam amet diam at imperdiet sapien tortor. Viverra
            egestas consequat sit fermentum eget. Ac tellus natoque sem felis
            quis risus commodo urna aliquet. Accumsan vulputate consectetur leo
            sit duis. Turpis malesuada molestie pretium eget amet. Integer dui
            ultrices nullam ornare facilisi condimentum. Egestas imperdiet etiam
            nunc tellus. Mollis vel diam ornare vel placerat sed diam aliquet
            gravida. Id vulputate sed dui at amet. Neque ultricies placerat nibh
            velit nulla in justo. Donec dictum ipsum aliquam sed sed consequat
            bibendum. Id ut cras nisl et. Sed nunc amet metus magna est. Arcu
            scelerisque dignissim libero eu pellentesque luctus nisi nunc. Mi
            imperdiet et molestie viverra facilisis. Arcu pellentesque at amet
            cursus bibendum. Elementum luctus ultricies in amet nec sed sed.
            Arcu in eu turpis ut.
            <br />
            <br />
            Ipsum amet lobortis massa ultrices ac risus arcu aliquet. Nunc
            gravida non lobortis facilisis. Sodales varius orci aliquet enim
            interdum nulla pharetra. Diam quam at ullamcorper scelerisque
            praesent sagittis a eros amet. Hendrerit volutpat ac nulla nunc eget
            morbi odio. Amet leo neque ut sit lectus pellentesque. Sapien eget
            volutpat elementum blandit arcu in. Interdum at hac elit enim
            egestas suspendisse in. Lorem libero nisl cras porta in donec
            interdum id facilisi. Pharetra varius nibh eget fermentum mattis
            purus massa odio. Malesuada tortor tempor eget nunc tellus viverra
            auctor et. Molestie et quam consectetur turpis nibh mattis mi quam.
            Felis sed gravida duis tempor.
            <br />
            <br />
            In tincidunt ut nunc lacus cursus. Id sed senectus vel id eros. Non
            ultrices enim egestas lorem. Enim at sed libero scelerisque
            adipiscing lorem suscipit tempus. Egestas elementum gravida cras
            aenean eu adipiscing nisl orci. Volutpat vitae ut ut laoreet quam
            nibh malesuada pharetra cursus.
          </p>
        </div>
        <div className='w-full md:w-2/3 mt-10 flex flex-col mx-auto'>
          <Image
            src='/heroImg.jpg'
            alt='Picture of a builing'
            width={1200}
            height={300}
            priority='true'
            className='image-shadow'
          />
        </div>
        <div className='mt-10 mb-20 w-full md:w-2/3 flex flex-col mx-auto'>
          <p className='font-serif text-neutral-700 text-base'>
            Lorem ipsum dolor sit amet consectetur. Turpis at posuere egestas
            convallis fermentum nascetur adipiscing nunc. In sodales vitae
            malesuada turpis. Sollicitudin ac vestibulum consequat posuere nec
            lacus. Nunc facilisis et sit praesent fusce quisque. At vulputate in
            feugiat nisl eu lorem. Et at sem cras elit molestie. Nisl nisi leo
            maecenas id.
            <br />
            <br />
            Lectus integer mattis aliquet imperdiet nunc vestibulum donec diam
            tortor. Nunc massa arcu morbi augue mattis sit cursus in dictum. Id
            amet eget montes magna non lorem non donec sit. Rutrum risus nulla
            egestas ipsum tincidunt adipiscing velit pulvinar. Quis sapien sed
            lorem nunc. Pellentesque viverra proin volutpat duis imperdiet
            consectetur sed egestas dui. Congue suspendisse ut luctus nunc.
            Donec enim interdum malesuada venenatis sit blandit. Pharetra vel
            nullam euismod vel aenean nisi tellus nunc.
            <br />
            <br />
            Malesuada nullam amet diam at imperdiet sapien tortor. Viverra
            egestas consequat sit fermentum eget. Ac tellus natoque sem felis
            quis risus commodo urna aliquet. Accumsan vulputate consectetur leo
            sit duis. Turpis malesuada molestie pretium eget amet. Integer dui
            ultrices nullam ornare facilisi condimentum. Egestas imperdiet etiam
            nunc tellus. Mollis vel diam ornare vel placerat sed diam aliquet
            gravida. Id vulputate sed dui at amet. Neque ultricies placerat nibh
            velit nulla in justo. Donec dictum ipsum aliquam sed sed consequat
            bibendum. Id ut cras nisl et. Sed nunc amet metus magna est. Arcu
            scelerisque dignissim libero eu pellentesque luctus nisi nunc. Mi
            imperdiet et molestie viverra facilisis. Arcu pellentesque at amet
            cursus bibendum. Elementum luctus ultricies in amet nec sed sed.
            Arcu in eu turpis ut.
            <br />
            <br />
            Ipsum amet lobortis massa ultrices ac risus arcu aliquet. Nunc
            gravida non lobortis facilisis. Sodales varius orci aliquet enim
            interdum nulla pharetra. Diam quam at ullamcorper scelerisque
            praesent sagittis a eros amet. Hendrerit volutpat ac nulla nunc eget
            morbi odio. Amet leo neque ut sit lectus pellentesque. Sapien eget
            volutpat elementum blandit arcu in. Interdum at hac elit enim
            egestas suspendisse in. Lorem libero nisl cras porta in donec
            interdum id facilisi. Pharetra varius nibh eget fermentum mattis
            purus massa odio. Malesuada tortor tempor eget nunc tellus viverra
            auctor et. Molestie et quam consectetur turpis nibh mattis mi quam.
            Felis sed gravida duis tempor.
            <br />
            <br />
            In tincidunt ut nunc lacus cursus. Id sed senectus vel id eros. Non
            ultrices enim egestas lorem. Enim at sed libero scelerisque
            adipiscing lorem suscipit tempus. Egestas elementum gravida cras
            aenean eu adipiscing nisl orci. Volutpat vitae ut ut laoreet quam
            nibh malesuada pharetra cursus.
          </p>
        </div>
      </article>
    </>
  );
}

export default Articles;
