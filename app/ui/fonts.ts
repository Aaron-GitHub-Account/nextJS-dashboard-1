import {Inter, Lusitana} from 'next/font/google';

// Variable font -we dont need to specify the weight
export const inter = Inter ({subsets:  ['latin']});

// Static font -we need to specify the weight
export const lusitana = Lusitana({
    weight: '400',
    subsets: ['latin'],
});
