import React from 'react';
import { motion } from 'framer-motion';

const ProvidedServicesCard = () => {
  const service_provided: {
    data: string;
    title: string;
  }[] = [
    {
      data: '999 +',
      title: 'Forest Fires Predicted',
    },
    {
      data: '2500',
      title: 'Warnings Issued',
    },
    {
      data: `100's`,
      title: 'Lives and Assets Saved',
    },
  ];

  return (
    <>
      <motion.div
        whileHover={{ x: 15 }}
        className=" md:absolute md:-bottom-16  px-2 p-5 z-10  left-1/3 bg-white rounded-2xl shadow-2xl backdrop-blur border border-primary m-3"
      >
        <div className="  w-full  text-center">
          <ul className="flex space-x-8  ">
            {service_provided.map((item, index) => {
              return (
                <li
                  className={`px-3 ${
                    index > 0 ? 'border-l-primary border-l' : ''
                  }`}
                  key={index}
                >
                  <p className="font-semibold md:text-3xl mb-2">{item.data}</p>
                  <p className="text-sm text-gray-800">{item.title}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </>
  );
};
export default ProvidedServicesCard;
