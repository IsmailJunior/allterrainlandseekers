import type { NextPage } from 'next';

const Home: NextPage<{ params: { locale: any; }; }> = async ( { params: { locale } } ) =>
{
  return (
    <section className='relative'>
    </section>
  );
}

export default Home;