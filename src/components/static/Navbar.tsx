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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import MaxWidthWrapper from '@/components/wrapper/MaxWidthWrapper';
import { motion } from 'framer-motion';

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
    icon: <Icon type="calendar" size={40} color="#e82e47" />,
  },
  {
    title: 'Certificate Management',
    href: '#',
    description:
      'Manage Your Certificates and Achievements in single platform.',
    icon: <Icon type="calendar" size={40} color="#e82e47" />,
  },
  {
    title: 'Career Counseling',
    href: '#',
    description: 'Get More out of us for your great career.',
    icon: <Icon type="calendar" size={40} color="#e82e47" />,
  },
  {
    title: 'Educational Contents',
    href: '#',
    description: 'Get contents you thrive for',
    icon: <Icon type="calendar" size={40} color="#e82e47" />,
  },
];

const more_actions: {
  title: string;
  href: string;
  description?: string;
  target?: string;
  icon?: React.ReactNode;
}[] = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Download App',
    href: '/',
    target: '_blank',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Press Coverage',
    href: '/press',
  },
  {
    title: 'Career',
    href: '/career',
  },
];

const social_links: {
  title: string;
  href: string;
  description?: string;
  target?: string;
  icon?: React.ReactNode;
}[] = [
  {
    title: 'Facebook',
    href: 'https://facebook.com/schoole',
    target: '_blank',
    icon: <Icon type="facebook" size={40} />,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/schoole',
    icon: <Icon type="instagram" size={40} />,
    target: '_blank',
  },

  {
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/schoole',
    icon: <Icon type="linkedin" size={40} />,
    target: '_blank',
  },
];

export default function Navbar() {
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
              className="me-3 md:me-5" // Adjusted margin for mobile
            />
          </Link>
          <NavigationMenuList className="flex-col md:flex-row w-full">
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
              <Link href="/blogs" legacyBehavior passHref>
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
                <ul className="grid gap-3 p-4 md:w-[400px]  lg:grid-cols-[1fr] ">
                  <motion.span whileHover={{ x: 8 }}>
                    <ListItem href="/" title="Helpline: +01 256482" />
                  </motion.span>
                  <motion.span whileHover={{ x: 8 }}>
                    <ListItem href="/" title="Message" />
                  </motion.span>
                  <motion.span whileHover={{ x: 8 }}>
                    <ListItem href="/" title="Ticket" />
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
