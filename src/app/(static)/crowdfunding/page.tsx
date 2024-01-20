import MaxWidthWrapper from '@/components/wrapper/MaxWidthWrapper';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Page() {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* 1st card  */}
        <div className="flex max-w-full m-24 px-5 flex-col items-center rounded-md border md:flex-row">
          <div className="h-full w-full md:h-[300px] md:w-[400px]">
            <Image
              src="https://images.pexels.com/photos/51951/forest-fire-fire-smoke-conservation-51951.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Laptop"
              height={200}
              width={300}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <div>
            <div className="p-4 max-w-[440px]">
              <h1 className="inline-flex items-center text-lg font-semibold first-letter:text-primary">
                Crowd Funding? <ArrowUpRight className="ml-2 h-4 w-4" />
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Dharan Wildfire Support Our Firefighters: Give Today!
                <br />
                <br />
                In Purbanchal University wildfire Our local heroes need your
                help. Contribute to our crowdfunding
                <br /> <br /> Join us in keeping our communities safe.
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #DonateNow
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #SpreadtheWord
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #LearnMore
                </span>
              </div>
              {/* input esewa id  */}
              <div className="mt-4 flex gap-2 ">
                <Input
                  type="text"
                  placeholder="Enter Your Esewa Id"
                  value={9866134804}
                  className="w-full rounded-md border border-primary p-2"
                />
                <Link href="https://esewa.com.np/#/home">
                  <Input
                    type="submit"
                    value={'Donate'}
                    className="w-full rounded-md bg-primary max-w-[80px] cursor-pointer text-white p-2"
                  />
                </Link>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="https://media.istockphoto.com/id/453100595/photo/emergency-symbol.jpg?s=1024x1024&w=is&k=20&c=DSfKj_uX6l-RAKM7fOFyZqbh8lO_dIuRBwDIbfkzR9U=" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="flex flex-col">
                  <span className="text-[10px] font-medium text-gray-900">
                    RedCross Society
                  </span>
                  <span className="text-[8px] font-medium text-gray-500">
                    @redcrossofficial
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd card  */}
        <div className="flex max-w-full m-24 px-5 flex-col items-center rounded-md border md:flex-row">
          <div className="h-full w-full md:h-[300px] md:w-[400px]">
            <Image
              src="https://images.pexels.com/photos/3552472/pexels-photo-3552472.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Laptop"
              height={200}
              width={300}
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <div>
            <div className="p-4 max-w-[440px]">
              <h1 className="inline-flex items-center text-lg font-semibold first-letter:text-primary">
                Crowd Funding? <ArrowUpRight className="ml-2 h-4 w-4" />
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Support Our Firefighters: Give Today!
                <br />
                <br />
                In Purbanchal University wildfire Our local heroes need your
                help. Contribute to our crowdfunding campaign to provide
                firefighters with essential gear, training, and community safety
                programs. Every donation counts.
                <br /> <br /> Join us in keeping our communities safe.
              </p>
              <div className="mt-4">
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #DonateNow
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #SpreadtheWord
                </span>
                <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                  #LearnMore
                </span>
              </div>
              {/* input esewa id  */}
              <div className="mt-4 flex gap-2 ">
                <Input
                  type="text"
                  placeholder="Enter Your Esewa Id"
                  value={9866134804}
                  className="w-full rounded-md border border-primary p-2"
                />
                <Link href="https://esewa.com.np/#/home">
                  <Input
                    type="submit"
                    value={'Donate'}
                    className="w-full rounded-md bg-primary max-w-[80px] cursor-pointer text-white p-2"
                  />
                </Link>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="https://media.istockphoto.com/id/453100595/photo/emergency-symbol.jpg?s=1024x1024&w=is&k=20&c=DSfKj_uX6l-RAKM7fOFyZqbh8lO_dIuRBwDIbfkzR9U=" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="flex flex-col">
                  <span className="text-[10px] font-medium text-gray-900">
                    RedCross Society
                  </span>
                  <span className="text-[8px] font-medium text-gray-500">
                    @redcrossofficial
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
