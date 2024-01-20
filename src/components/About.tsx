'use client';

import React from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import Image from 'next/image';
import * as img from '@/../public/tyo.webp';
import avtr from '@/../public/imggg.jpg';
import police from '@/../public/partners/Nepal_Police_logo.png'
import army from '@/../public/partners/nepal army.png'
import redcross from '@/../public/partners/red cross.png'
import apf from '@/../public/partners/apf.png'
import nepal from '@/../public/partners/nepal scout.png'
import nep from '@/../public/partners/national logo.jpg'


const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];

const users = [
  {
    name: 'Nepal Red Cross Society',
    image: redcross,
    position: 'Balkumari Lalitpur',
    phone: '071-163673737',
  },
  {
    name: 'Nepal Scout',
    image: nepal,
    position: 'Kathmandu Nepal',
    phone: '071-163673737',
  },
  {
    name: 'Nepal Police',
    image: police,
    position: 'Gausala Kathmandu',
    phone: '071-163673737',
  },
  {
    name: 'Nepal Army Helpline',
    image: army,
    position: 'Kalikanagar Butwal',
    phone: '071-163673737',
  },
  {
    name: 'APF Helpline',
    image: apf,
    position: 'Dhankuta Nepal',
    phone: '071-163673737',
  },
  {
    name: 'Nepal Government',
    image: nep,
    position: 'Singha Durbar Kathmandu',
    phone: '071-163673737',
  },
];

export default function AboutPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* greetings */}
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                Join Us &rarr;
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl first-letter:text-primary">
            Meet those who can help you!
            </p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <Image
                src={user.image}
                alt={user.name}
                width={100}
                height={300}
                className="h-[300px] w-full rounded-lg object-contain "
                quality={100} 
                layout="responsive"
                              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              <br />
             Toll Free No:    {user.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
