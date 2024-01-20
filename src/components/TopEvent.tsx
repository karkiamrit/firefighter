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
                  src="https://images.pexels.com/photos/6481932/pexels-photo-6481932.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AirMax Pro"
                  width={400}
                  height={200}
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    Fire extinguished at NCIT
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                    There is high probability of wildfire nearby NCIT. So be alert there!
                  </p>
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-primary">
                    View Profile &rarr;
                  </button>
                </div>
              </div>
              {/* 1st card */}
              <div className="relative h-[300px] w-[250px] rounded-md">
                <Image
                  src="https://images.pexels.com/photos/3058827/pexels-photo-3058827.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AirMax Pro"
                  width={400}
                  height={200}
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    Fire Alert in Pokhara
                  </h1>
                  <p className="mt-2 text-sm text-gray-300">
                    There is high probability of wildfire in Pokhara. So be alert there!
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
