import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

export const config: Config = {
  name: {
    display: 'Bin Wan',
    aria: 'My name is Bin Wan, Postdoc at Geneva Psychiatry and PhD at MPI CBS',
  },
  title: {
    display: 'Computational Neurogenetics',
    aria: 'Welcome to check my profile and get in touch if you are interested',
  },
  
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/wanb-psych/',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/bin-wan-a0373a201/',
    },
    {
      name: 'resume',
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1dNtXcVXVatm45wQ2s-v55HIi1u_XY0bn/view?usp=drive_link',
    },
    {
      name: 'email',
      display: 'Email',
      aria: 'Send me an email: binwan.academic@gmail.com',
      icon: <Email />,
      href: 'mailto:binwan.academic@gmail.com',
    },
  ],
};
