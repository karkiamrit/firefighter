import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';

const textVariants = cva('font-medium transition-colors leading-normal', {
  variants: {
    variant: {
      h1: 'lg:text-[3.5rem] text-4xl lg:leading-[3.8rem] leading-[2.5rem] font-bold tracking-tighter',
      h2: 'text-[3rem] leading-[3.5rem] font-bold tracking-tight',
      h3: 'text-[2.5rem] leading-[3rem] font-bold tracking-[-0.02em]',
      h4: 'text-4xl leading-[2.8rem] font-bold tracking-[-0.015em]',
      h5: 'text-xl md:text-2xl lg:text-[2rem]  leading-6 lg:leading-8 xl:leading-10 font-bold tracking-[-0.015em]',
      h6: 'text-2xl leading-8 font-bold tracking-[-0.015em]',
      subh1: 'text-2xl font-semibold leading-8 tracking-[-0.015em]',
      subh2: 'text-xl font-semibold leading-7 tracking-[-0.0075em]',
      subh3: 'text-base font-semibold leading-6 tracking-[-0.0075em]',
      subh4: 'text-sm font-semibold leading-5 tracking-[-0.0075em]',
      p: 'text-base',
      'x-large': 'text-2xl',
      large: 'text-lg',
      display1: 'text-[5rem] leading-[5rem] font-bold tracking-tighter ',
      display2:
        'lg:text-[4.5rem] text-4xl lg:leading-[4.5rem] font-bold tracking-tighter',
      regularBtn: 'lg:text-base text-xs font-bold  capitalize',
      smallBtn: 'text-sm font-bold leading-[2.5rem] capitalize',
      capiton1: 'text-base font-medium leading-4 uppercase tracking-[0.15em]',
      caption2: 'text-sm font-medium leading-4 uppercase tracking-[0.15em]',
      caption3: 'text-xs font-medium leading-4 uppercase tracking-[0.15em]',
      body2xl300: 'text-2xl font-normal leading-8',
      body2xl400: 'text-2xl font-medium leading-8',
      bodyxl300: 'text-xl font-normal leading-7',
      bodyxl400: 'lg:text-lg font-medium lg:leading-[1.8rem]',
      bodyl400: 'text-base xl:text-lg font-medium lg:leading-[1.5rem]',
      bodyl300: 'lg:text-lg font-normal lg:leading-[1.5rem]',
      body300: 'text-base font-normal leading-6',
      body400: 'text-base font-medium leading-6',
      bodysm300: 'text-sm font-normal leading-5',
      bodysm400: 'text-sm font-medium leading-5',
      bodyxs300: 'text-xs font-normal leading-4',
      bodyxs400: 'text-xs font-medium leading-3',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

type TextElement = HTMLHeadingElement | HTMLParagraphElement;

interface TextProps
  extends HTMLAttributes<TextElement>,
    VariantProps<typeof textVariants> {}

const Text = forwardRef<TextElement, TextProps>(
  ({ className, children, variant, ...props }, ref) => {
    switch (variant) {
      case 'h1':
        return (
          <h1
            className={cn(textVariants({ variant }), className)}
            ref={ref as React.Ref<HTMLHeadingElement>}
            {...props}
          >
            {children}
          </h1>
        );
      case 'h2':
        return (
          <h2
            className={cn(textVariants({ variant }), className)}
            ref={ref as React.Ref<HTMLHeadingElement>}
            {...props}
          >
            {children}
          </h2>
        );
      case 'h3':
        return (
          <h3
            className={cn(textVariants({ variant }), className)}
            ref={ref as React.Ref<HTMLHeadingElement>}
            {...props}
          >
            {children}
          </h3>
        );
      case 'h4':
        return (
          <h4
            className={cn(textVariants({ variant }), className)}
            ref={ref as React.Ref<HTMLHeadingElement>}
            {...props}
          >
            {children}
          </h4>
        );
      default:
        return (
          <p
            className={cn(textVariants({ variant }), className)}
            ref={ref as React.Ref<HTMLParagraphElement>}
            {...props}
          >
            {children}
          </p>
        );
    }
  },
);

Text.displayName = 'Text';

export { Text, textVariants };
