import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

export const config: Config = {
  name: {
    display: 'Bin Wan',
    aria: 'My name is Bin Wan',
  },
  title: {
    display: 'Researcher Interested in Cognitive Neurogenetics',
    aria: 'I am a researcher in Cognitive Neuroimaging',
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
      href: 'https://drive.google.com/file/d/1ykyhPpodtdq1nEQsIwBk0AB2gWEY7RXs/view?usp=sharing',
    },
    {
      name: 'email',
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'bin.wan.work@gmail.com',
    },
  ],
};
