import { Roboto } from 'next/font/google';
import { Raleway } from 'next/font/google';

const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
});


const raleway = Raleway({
  weight: '300',
  style: 'normal',
  subsets: ['latin'],
});

export { roboto, raleway };