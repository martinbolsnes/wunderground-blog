import { Disclosure, Transition } from '@headlessui/react';
import { HiOutlineBars3BottomRight, HiXMark } from 'react-icons/hi2';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Latest', href: '/post' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const router = useRouter();
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Disclosure as='nav' className='bg-neutral-50'>
      {({ open }) => (
        <>
          <div className='border-b-2 border-neutral-300 fixed top-0 left-0 right-0 bg-neutral-50'>
            <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative flex items-center justify-between h-16'>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-1 flex items-center'>
                  <Link href='/'>
                    <h1 className='block lg:hidden h-8 w-auto font-sans text-xl md:text-2xl text-neutral-900'>
                      Wünderground
                    </h1>
                  </Link>
                  <Link href='/'>
                    <h1 className='hidden lg:block h-8 w-auto font-sans text-xl md:text-2xl text-neutral-900'>
                      Wünderground
                    </h1>
                  </Link>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      // eslint-disable-next-line react/jsx-key

                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-2 text-base font-sans text-neutral-900 hover:text-neutral-500 ${
                          router.pathname === `/${item.href}`
                            ? 'text-neutral-500'
                            : ''
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                  <Disclosure.Button
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                    className='inline-flex items-center justify-center p-2 text-neutral-900 hover:text-neutral-500 focus:outline-none focus:ring-inset focus:ring-transparent'
                  >
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <HiXMark className='block h-8 w-8' aria-hidden='true' />
                    ) : (
                      <HiOutlineBars3BottomRight
                        className='block h-8 w-8'
                        aria-hidden='true'
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={isShowing}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='translate-x-full'
            enterTo='-translate-x-0'
            leave='transition ease-in-out duration-200 transform'
            leaveFrom='-translate-x-0'
            leaveTo='translate-x-full'
          >
            <Disclosure.Panel className='sm:hidden mt-16'>
              <div className='px-2 pt-10 pb-3 space-y-1 flex flex-col items-center h-screen'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={`px-3 py-2 block text-base md:text-lg font-sans hover:text-neutral-500 focus:outline-none focus:ring-inset focus:ring-transparent ${
                      router.pathname === `/${item.href}`
                        ? 'text-neutral-500'
                        : ''
                    }`}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
