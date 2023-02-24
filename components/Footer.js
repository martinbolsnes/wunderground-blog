import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='p-4 bg-neutral-900 sm:p-6'>
      <div className='md:flex md:justify-between max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'>
        <div className='mb-6 mt-6 md:mb-2 mb:mt-2'>
          <Link href='/' className='flex items-center'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-neutral-50'>
              Wünderground
            </span>
          </Link>
        </div>
        <div className='mb-6 mt-6 md:mb-2 mb:mt-2 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 font-sans'>
          <div>
            <h2 className='mb-6 text-sm uppercase text-neutral-50'>Pages</h2>
            <ul className='text-neutral-400 text-sm'>
              <li className='mb-4'>
                <Link href='/' className='hover:text-neutral-50'>
                  Home
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/articles' className='hover:text-neutral-50'>
                  Articles
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/about' className='hover:text-neutral-50'>
                  About
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/contact' className='hover:text-neutral-50'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm uppercase text-neutral-50'>
              Catecories
            </h2>
            <ul className='text-neutral-400 text-sm'>
              <li className='mb-4'>
                <p className='hover:text-neutral-50'>Architecture</p>
              </li>
              <li className='mb-4'>
                <p className='hover:text-neutral-50'>Food</p>
              </li>
              <li className='mb-4'>
                <p className='hover:text-neutral-50'>Photography</p>
              </li>
              <li className='mb-4'>
                <p className='hover:text-neutral-50'>Travel</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-6 text-sm text-neutral-50'>Legal</h2>
            <ul className='text-neutral-400 text-sm'>
              <li className='mb-4'>
                <p className='hover:text-neutral-50'>Privacy Policy</p>
              </li>
              <li className='mb-4'>
                <p className='hover:text-neutral-50'>Terms &amp; Conditions</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='my-6 border-neutral-200 sm:mx-auto dark:border-neutral-700 lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'>
        <p className='text-sm text-neutral-400 flex'>
          © 2023 Wünderground™. All Rights Reserved.
        </p>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-neutral-400 text-sm'>
          <p>
            Facebook
            <span className='sr-only'>Facebook page</span>
          </p>
          <p>
            Instagram
            <span className='sr-only'>Instagram page</span>
          </p>
          <p>
            Twitter
            <span className='sr-only'>Twitter page</span>
          </p>
          <p>
            Github
            <span className='sr-only'>GitHub account</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
