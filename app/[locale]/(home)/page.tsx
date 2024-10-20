import type { NextPage } from 'next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: NextPage<{ params: { locale: string; }; }> = async ( { params: { locale } } ) =>
{
  return (
    <section className='relative'>
    </section>
  );
}

export default Home;