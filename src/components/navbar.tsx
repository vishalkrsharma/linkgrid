import ProfileDropdown from '@/components/profile-dropdown';
import { auth } from '@/lib/auth';
import Link from 'next/link';

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className='border-b py-2'>
      <div className='max-w-screen-2xl 2xl:mx-auto max-2xl:px-4 flex justify-between items-center gap-8'>
        <div className='flex-1 flex justify-start items-center gap-8'>
          <Link
            href='/'
            className='text-2xl font-semibold'
          >
            LinkPort
          </Link>
          <div className='flex-1 flex justify-start items-center gap-4'>
            <Link
              href='/dashboard'
              className='font-semibold'
            >
              Dashboard
            </Link>
          </div>
        </div>
        {session?.user ? (
          <ProfileDropdown user={session.user} />
        ) : (
          <Link
            href='/auth'
            className='text-sm font-semibold'
          >
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
