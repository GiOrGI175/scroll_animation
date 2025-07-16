import UseInViewSection from '@/components/UseInView';
import UseScrollAdvanced from '@/components/UseScrollAdvanced';
import UseScrollBasic from '@/components/UseScrollBasic';
import UseScrollOffset from '@/components/UseScrollOffset';
import UseScrollWithContainer from '@/components/UseScrollWithContainer';

export default function Home() {
  return (
    <div className='bg-zinc-950 text-zinc-50 overflow-hidden'>
      <div className='relative z-10'>
        <UseScrollBasic />
        <div className='h-screen flex justify-center items-center'>
          <h1 className='text-5xl'>Scroll Down</h1>
        </div>
        <div className='h-[150vh]' />
        <UseInViewSection />
        <div className='h-[150vh]' />
        <UseScrollAdvanced />
        <div className='h-[150vh]' />
        <UseScrollOffset />
        <div className='h-[150vh]' />
        <UseScrollWithContainer />
      </div>

      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className='fixed inset-0'
      />
    </div>
  );
}
