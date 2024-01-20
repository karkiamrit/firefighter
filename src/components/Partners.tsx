import React from 'react';
import ncit from '@/../public/partners/Nepal_Police_logo.png';
import stXavier from '@/../public/partners/apf.png';
import trinity from '@/../public/partners/nepal scout.png';
import dav from '@/../public/partners/red cross.png';
import vsNiketan from '@/../public/partners/national logo.jpg';
import budhaNilkantha from '@/../public/partners/nepal army.png';
import Image, { StaticImageData } from 'next/image';

const Partners = () => {
  interface Partners {
    src: StaticImageData;
    height: number;
    width: number;
  }

  const partners: Partners[] = [
    {
      src: ncit,
      height: 200,
      width: 200,
    },
    {
      src: stXavier,
      height: 150,
      width: 150,
    },
    {
      src: trinity,
      height: 150,
      width: 150,
    },
    {
      src: budhaNilkantha,
      height: 200,
      width: 200,
    },
    {
      src: dav,
      height: 200,
      width: 200,
    },
    {
      src: vsNiketan,
      height: 250,
      width: 250,
    },
  ];
  return (
    <>
      <h2 className="text-4xl font-semibold text-center my-4 first-letter:text-primary ">In Collaboration With</h2>
      <section className="relative ">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center  gap-y-10 gap-x-14 justify-center">
              {partners.map((partner, index) => {
                return (
                  <div key={index}>
                    <Image
                      height={partner.height}
                      width={partner.width}
                      src={partner.src}
                      alt=""
                    ></Image>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
