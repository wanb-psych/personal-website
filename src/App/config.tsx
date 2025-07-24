import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

export const config: Config = {
  name: {
    display: 'Hey! I am Bin Wan',
    aria: '',
  },
  name:{
    display: 'I am a Postdoc at Geneva Psychiatry and a previous PhD at MPI CBS',
    aria: '',
  },
  name:{
    display: 'I am Interested in Computational Neurogenetics',
    aria: '',
  },
  title: {
    display: 'The key question I am asking is:',
    aria: '',
  },
  title: {
    display: 'How the human mind (from behavior, ideology, to brain circuits)',
    aria: '',
  },
  title: {
    display: 'is shaped by nature and nurture',
    aria: '',
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
