import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

export const config: Config = {
  name: {
    display: 'Hey! I am Bin Wan, <br/> a Postdoc at Geneva Psychiatry <br/> previous PhD at MPI CBS. <br/> <br/> Computational Neurogenetics',
    aria: '',
  },
  title: {
    display: 'The key question I am answering is: <br/> <br/> How the human mind <br/> (from behavior, ideology, to brain circuits) <br/> is shaped by nature and nurture',
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
      href: 'https://drive.google.com/file/d/1bE8vJQ5zvmrBkBud39nY2KvK_7-4uP64/view?usp=sharing',
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
