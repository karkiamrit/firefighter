"use client"
import dynamic from 'next/dynamic';
import MaxWidthWrapper from '@/components/wrapper/MaxWidthWrapper';

// Dynamically import ReactPlayer
const ReactPlayer = dynamic(
  () => import('react-player'),
  { ssr: false } // This line is important. It disables server-side rendering for ReactPlayer.
);

export default function Page() {
  const url = {
    firstVideo: 'https://www.youtube.com/watch?v=Rd7G8mUrDVA',
    secondVideo: 'https://www.youtube.com/watch?v=-muU2hnZBU0',
    thirdVideo: 'https://www.youtube.com/watch?v=Aa3YjyMzVe0',
    fourthVideo: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    fifthVideo: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  };

  return (
    <>
      <MaxWidthWrapper>
        <div className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold first-letter:text-primary mt-10">
          Useful audio-visual Information{' '}
        </div>
        <div className="w-full flex flex-col gap-10 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20 xl:pl-44 xl:pr-44 m-10 text-center">
          <div className="aspect-w-16 aspect-h-9">
            <ReactPlayer url={url.thirdVideo} />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <ReactPlayer url={url.firstVideo} />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <ReactPlayer url={url.secondVideo} />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
