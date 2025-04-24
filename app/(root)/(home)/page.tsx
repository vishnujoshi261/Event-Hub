'use client';

import MeetingTypeList from '@/components/MeetingTypeList';
import { useGetCalls } from '@/components/hooks/useGetCalls';


const Home = () => {
  const now = new Date();
  const { upcomingCalls } = useGetCalls();

  
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          {/* <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: {time}
          </h2> */}
          <h2 className="glassmorphism max-w-[300px] rounded py-2 text-center text-base font-normal">
  Upcoming Meeting at:{' '}
  {upcomingCalls?.[0]?.state?.startsAt
    ? `${upcomingCalls[0].state.startsAt.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })} on ${upcomingCalls[0].state.startsAt.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}`
    : 'No Upcoming Meeting'}
</h2>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
