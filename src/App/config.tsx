import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

export const config: Config = {
  name: {
    display: 'Michal Czuper',
    aria: 'My name is Michal Czuper',
  },
  title: {
    display: 'Software Engineer',
    aria: 'I am a software engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/coolbigbear/',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/michal-czuper/',
    },
    {
      name: 'resume',
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/11vsZMLRDupR-3K_DuYjMYgC0evc_WgL0/view?usp=sharing',
    },
    {
      name: 'email',
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:mrczuper@gmail.com',
    },
  ],
};
