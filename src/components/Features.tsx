import { DollarSign, Filter, Flame, Moon, SkullIcon, UserSearch, Zap } from 'lucide-react';
import React from 'react';
import Icon from '@/common/icons';

const Features = () => {
  const features: {
    title: string;
    href?: string;
    description?: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: 'Forest Fire Prediction',
      description:
        'Access to our AI/ML based Forest Fire Prediction System, Which Can Help You To Predict Forest Fire.',
      icon: <Flame type="flame" size={100} color="#e82e47" />
      ,
    },
    {
      title: 'Warning System',
      description:
        'Warn Your Friends and Family About Forest Fire, So That They Can Take Precautions.',
      icon: <SkullIcon  type="warning" size={100} color="#e82e47" />,
    },
    {
      title: 'Emergency Contact',
      description:
        'Access to emergency contact numbers, which can help you to contact the nearest fire station.',
      icon: <UserSearch  type="career" size={100} color="#e82e47" />,
    },
    {
      title: 'Educational Contents',
      description:
        'We Offer Great Educational Contents For Our Public, Which Can Prepare them fight and prevent forest fire',
      icon: <Icon type="video" size={100} color="#e82e47" />,
    },
  ];

  return (
    <>
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 ">
          {features.map((feature, index) => {
            return (
              <div key={index}>
                <div className="mx-auto flex  items-center justify-center rounded-full">
                  {feature.icon}
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
