import { Disclosure } from '@headlessui/react';
import { HiOutlineBars3BottomRight, HiXMark } from 'react-icons/hi2';

import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Latest', href: '/latest' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const router = useRouter();
  return (
    <Disclosure as='nav' className='bg-white'>
      {({ open }) => (
        <>
          <div className='border-b-2 border-gray border-opacity-25 fixed top-0 left-0 right-0 bg-white'>
            <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative flex items-center justify-between h-16'>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-1 flex items-center'>
                  <h1 className='block lg:hidden h-8 w-auto font-sans text-xl md:text-2xl text-black'>
                    Wünderground
                  </h1>
                  <h1 className='hidden lg:block h-8 w-auto font-sans text-xl md:text-2xl text-black'>
                    Wünderground
                  </h1>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      // eslint-disable-next-line react/jsx-key

                      <a
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-2 text-sm md:text-base font-sans text-black hover:text-gray ${
                          router.pathname === `/${item.href}` ? 'text-gray' : ''
                        }`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 text-black hover:text-gray focus:outline-none focus:ring-inset focus:ring-transparent'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <HiXMark className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <HiOutlineBars3BottomRight
                        className='block h-6 w-6'
                        aria-hidden='true'
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden mt-16'>
            <div className='px-2 pt-10 pb-3 space-y-1 flex flex-col items-end'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={`px-3 py-2 block text-sm md:text-base font-sans hover:text-gray ${
                    router.pathname === `/${item.href}` ? 'text-gray' : ''
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
