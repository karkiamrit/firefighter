'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import landingImage from '@/../public/landing-page.webp';
import {
  MdOutlineArrowRightAlt,
  MdInstallMobile,
  MdLogin,
} from 'react-icons/md';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProvidedServicesCard from '@/components/static/ProvidedServicesCard';

const LandingPage = () => {
  return (
    <>
      <div className="relative w-full bg-light">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col  px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl first-letter:text-primary ">
              We care about your growth
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Empowering Dream, Certifying Success...
            </p>
            <div className="my-5 space-y-4">
              <motion.div whileHover={{ x: 8 }}>
                <Link href="/">
                  <Button className="w-52 h-[45px] text-center justify-center flex  space-x-3">
                    <MdInstallMobile className="text-2xl" />
                    <span>Download App</span>
                    <MdOutlineArrowRightAlt className="text-2xl" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ x: 8 }}>
                <Link href="/auth">
                  <Button className="w-52 h-[45px] text-center justify-center flex  space-x-3 bg-white text-black border  hover:bg-white">
                    <MdLogin className="text-2xl text-primary" />
                    <span>Register Now</span>
                    <MdOutlineArrowRightAlt className="text-2xl text-primary" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <Image
              className="aspect-[3/2]  object-cover lg:aspect-[4/3] lg:h-[550px] xl:aspect-[16/9]"
              src={landingImage}
              alt="girl with the degree"
            />
          </div>
        </div>

        <ProvidedServicesCard />
      </div>
    </>
  );
};

export default LandingPage;
