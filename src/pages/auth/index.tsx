import React from 'react';
import Navbar from '@/src/components/Navbar/Navbar';
import AuthModal from '@/src/components/Modals/AuthModal';
import { useRecoilValue } from 'recoil';
import { authModalState } from '@/src/atoms/authModalAtom';

type AuthPageProps = {};

const AuthPage:React.FC<AuthPageProps> = () => {
  const authModal = useRecoilValue(authModalState);

  return (
    <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
        <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
          <img src='./hero.png' alt='hero image' />
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  )
}
export default AuthPage;