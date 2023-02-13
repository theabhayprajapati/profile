import Cookies from 'js-cookie';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import HoverLinks from '../components/HoverLinks';
import useCookie from '../hook/useCookie';
const Home: NextPage = () => {
  const { value, setValue } = useCookie<string>('theme', 'light');
  // update cookie
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log('dark is the browser theme');
      setValue('dark');
    } else {
      setValue('light');
    }
  }, []);

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center w-screen p-2   border-black border selection:bg-white selection:text-black ${Cookies.get('theme') === 'light' ? 'light-theme' : 'dark-theme'}`}>

      <main className='md:px-32 leading-4 px-5'>
        <h1 className='md:text-8xl text-6xl text-white'>
          Hi, I'm <strong>Abhay Prajapati</strong>
        </h1>
        <h3 className='text-xl mt-5 text-[#848489] font-semibold'>
          frontend developer <HoverLinks link="https://www.grabsalad.com/" title='@salad 🥗' hoverColor='#FFC107' />
        </h3>
        <p className='text-xl mt-1 lowercase text-[#848489] font-semibold'>
          i like to make and enjoy things that are beautiful, in many different ways. Right now, I do this with computers and design
        </p>
        <div className='flex gap-2 mt-1 text-[#848489] font-semibold'>
          <HoverLinks link="https://twitter.com/abhayprajapati_" title='twitter' hoverColor='#1D9BF0' />
          <HoverLinks link="https://github.com/theabhayprajapati" title='github' hoverColor='#238636' />
          <HoverLinks link="https://www.linkedin.com/in/theabhayprajapati/" title='linkedin' hoverColor='#0077b5' />
        </div>
      </main>
    </div>
  )
}

export default Home
