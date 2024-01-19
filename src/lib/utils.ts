import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// @ts-ignore
// export const groupBy = ( arr: any[], k: any , fn = ():any => true) =>
//   // @ts-ignore
//   arr.reduce((r, c) => (fn(c[k]) ? r[c[k]] = [...r[c[k]] || [], c] : null, r), {});
//

export const groupBy = (arr, key, fn = (groupKey: any) => true) => {
  const result: { key: any; values: any[] }[] = [];

  arr.forEach((item: { [x: string]: any }) => {
    const groupKey = item[key];

    if (fn(groupKey)) {
      const existingGroup = result.find((group) => group.key === groupKey);

      if (existingGroup) {
        existingGroup.values.push(item);
      } else {
        result.push({ key: groupKey, values: [item] });
      }
    }
  });

  return result;
};
