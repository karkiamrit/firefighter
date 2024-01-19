import Image from 'next/image';
import React from 'react';

const TopEvent = () => {
  return (
    <>
      <div className="text-center text-4xl font-semibold mt-3 first-letter:text-primary">
        Live Fire Alert Warning
      </div>
      <div className="wrapper">
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="relative flex flex-wrap justify-around gap-5">
              {/* 1st card */}
              <div className="relative h-[300px] w-[250px] rounded-md">
                <Image
                  src="https://images.pexels.com/photos/776113/pexels-photo-776113.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AirMax Pro"
                  width={400}
                  height={200}
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    Baglung Fire Alert
                  </h1>
                  <p className="mt-2 text-sm text-gray-300 pr-2">
                    In Baglung there is high probability of wildfire. So be
                    alert there!{' '}
                  </p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-primary">
                    View Profile &rarr;
                  </button>
                </div>
              </div>
              {/* 1st card */}
              <div className="relative h-[300px] w-[250px] rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/54627/match-sticks-smoke-ignite-54627.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AirMax Pro"
                  width={400}
                  height={200}
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    Dharan Nearby
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                    Alert There is high probabilty of wildfire in Dharan. So be alert there!{' '}
                  </p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-primary">
                    View Profile &rarr;
                  </button>
                </div>
              </div>
              {/* 1st card */}
              <div className="relative h-[300px] w-[250px] rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1560762484-813fc97650a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"
                  alt="AirMax Pro"
                  width={400}
                  height={200}
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    Hackathon
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                    NCIT is organizing a hackathon for the students of NCIT.
                  </p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-primary">
                    View Profile &rarr;
                  </button>
                </div>
              </div>
              {/* 1st card */}
              <div className="relative h-[300px] w-[250px] rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                  alt="AirMax Pro"
                  width={400}
                  height={200}
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    Hackathon
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                    NCIT is organizing a hackathon for the students of NCIT.
                  </p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-primary">
                    View Profile &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopEvent;
