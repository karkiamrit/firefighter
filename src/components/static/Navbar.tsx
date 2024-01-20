'use client';

import * as React from 'react';
import Link from 'next/link';
import Icon from '@/common/icons';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import MaxWidthWrapper from '@/components/wrapper/MaxWidthWrapper';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { AlertCircleIcon, AlignCenter, AreaChart, Flame, Menu, MenuIcon, MenuSquare } from 'lucide-react';
import { MdCastForEducation } from 'react-icons/md';

const services: {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}[] = [
  {
    title: 'Alerts & Warnings',
    href: '#',
    description: 'Get Alerts and Warnings of Fire and other disasters',
    icon: <AlertCircleIcon type="calendar" size={40} color="#e82e47" />,
  },
  {
    title: 'Live Fire location',
    href: '/map',
    description:
      'Live Fire location and status of the fire and other disasters within map',
    icon: <Flame type="calendar" size={40} color="#e82e47" />,
  },
  {
    title: 'Posibilities of Firing Area',
    href: '#',
    description: 'According to the fire posibilities 1 | 0 you can get alert',
    icon: <AreaChart type="calendar" size={40} color="#e82e47" />,
  },
  {
    title: 'Educational Contents | Blogs',
    href: '/vcontent',
    description:
      'Get contents so that you can be aware of the fire and other disasters',
    icon: <MdCastForEducation type="calendar" size={40} color="#e82e47" />,
  },
];

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className="border shadow-md py-4 z-20 sticky top-0 w-full bg-white">
      <MaxWidthWrapper>
      <NavigationMenu>
          <Link href="/">
            <Icon
              type="logo"
              size={120} // Adjusted size for mobile
              height={60} // Adjusted height for mobile
              color="#ff233d"
              className="me-3 md:me-5"
            />
          </Link>
          <Button
            onClick={toggleMenu}
            variant="outline"
            className={`block md:hidden absolute top-4 left-96 ml-20 pb-2 border-primary text-sm cursor-pointer focus:outline-none ${
              isMenuOpen ? 'hidden' : 'block'
            }`}
          >
            {/* Hamburger menu icon */}
            <MenuSquare type="menu" size={20} color="#ff233d" className='mb-2' />
          </Button>
          <Button
            onClick={toggleMenu}
            variant="outline"
            
            className={`block md:hidden absolute top-4 left-96 ml-20 pb-2 border-primary cursor-pointer focus:outline-none ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            {/* Close menu icon */}
            <AlignCenter type="close" size={20}  color="#ff233d" />
          </Button>

          <NavigationMenuList
            className={`flex-col md:flex-row w-full md:flex ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {services.map((component) => (
                    <motion.span whileHover={{ x: 8 }} key={component.href}>
                      <ListItem
                        title={component.title}
                        href={component.href}
                        key={component.title}
                        prefixIcon={component.icon}
                      >
                        {component.description}
                      </ListItem>
                    </motion.span>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Help</NavigationMenuTrigger>
              <NavigationMenuContent data-motion="to-end">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:grid-cols-[1fr] ">
                  <motion.span whileHover={{ x: 8 }}>
                    <ListItem href="/" title="Helpline: +01 256482" />
                  </motion.span>
                  <motion.span whileHover={{ x: 8 }}>
                    <ListItem href="/vcontent" title="Videos" />
                  </motion.span>
                  <motion.span whileHover={{ x: 8 }}>
                    <ListItem href="/faqs" title="FAQs" />
                  </motion.span>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          <NavigationMenuItem>
              <Link href="/faqs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </MaxWidthWrapper>
    </header>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  prefixIcon?: React.ReactNode;
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, prefixIcon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <span className="flex space-x-5">
              <div>{prefixIcon}</div>
              <span>
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              </span>
            </span>
          </a>
        </NavigationMenuLink>
       
      </li>
    );
  },
);
ListItem.displayName = 'ListItem';
// ... (unchanged imports)
