import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 py-10 px-5 grid gap-10'>
      <div className='bg-white p-10 rounded-2xl shadow-xl'>
        <span className='font-semibold text-3xl'>Select Item</span>
        <div>
            <span className='flex justify-between my-2'>Grey Chair</span>
            <span className=''>19$</span>
        </div>
        <div>
            <span>Grey Chair</span>
            <span>19$</span>
        </div>
        <div>
          <div className='flex justify-between '>
            <span>Total</span>
            <span>$10</span>
          </div>
          <div className='mt-5 p-3 bg-blue-500 text-white text-center rounded-2xl w-1/2 mx-auto'>Checkout</div>
        </div>
      </div>
      <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
      <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
      <div className='bg-white p-10 rounded-2xl shadow-xl'></div>
    </div>
  )
}

export default Home