import type { NextPage } from 'next';
import Head from 'next/head';
import HoverLinks from '../components/hoverLinks';
import useBrowserTheme from '../hook/useBrowserTheme';
const Home: NextPage = () => {
  const theme = useBrowserTheme();
  console.log(theme);
  return (
    <div className={`flex min-h-screen flex-col items-center justify-center w-screen p-2 ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Head>
        <title>Abhay Prajapati</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='md:px-32 leading-4'>
        <h1 className='text-8xl'>
          Hi, I'm <strong>Abhay Prajapati</strong>
        </h1>
        <h3 className='text-xl mt-5 text-[#848489] font-semibold'>
          frontend developer @ <a href="https://www.grabsalad.com/">salad 🥗</a>
        </h3>
        <p className='text-xl mt-1 lowercase text-[#848489] font-semibold'>
          i like to make and enjoy things that are beautiful, in many different ways. Right now, I do this with computers and design
        </p>
        <div className='flex gap-2 mt-1 text-[#848489] font-semibold'>
          <HoverLinks link="https://twitter.com/abhayprajapati" title='twitter' hoverColor='#1D9BF0' />
          <HoverLinks link="https://github.com/theabhayprajapati" title='github' hoverColor='#238636' />
          <HoverLinks link="https://www.linkedin.com/in/theabhayprajapati/" title='linkedin' hoverColor='#0077b5' />
        </div>
      </main>
    </div>
  )
}

export default Home
