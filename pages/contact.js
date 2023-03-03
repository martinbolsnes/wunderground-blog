import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineHomeModern,
} from 'react-icons/hi2';

function contact() {
  return (
    <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 mt-28 mb-28'>
      <div className='flex flex-col gap-4 mt-4'>
        <h3 className='font-sans text-neutral-700 text-lg mb-6'>Contact</h3>
        <div className='flex flex-col gap-8'>
          <div className='font-sans text-neutral-900 text-xl flex items-center'>
            <HiOutlineHomeModern className='block h-8 w-8 mr-4' />
            <p>10th Wünderground Road, London</p>
          </div>
          <div className='font-sans text-neutral-900 text-xl flex'>
            <HiOutlineEnvelope className='block h-8 w-8 mr-4' />
            <p>hello@wunderground.com</p>
          </div>
          <div className='font-sans text-neutral-900 text-xl flex'>
            <HiOutlinePhone className='block h-8 w-8 mr-4' />
            +44 98765432
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
