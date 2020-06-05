import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Bayartsogt | SE', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I am the Software Engineer. Interested in Machine Learning & Natural Language Processing. Mongolian & Born in Mongolia', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bayartsogt',
  subtitle: 'I am the Software Engineer in Mongolia (ML & NLP)',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Bayartsogt Yadamsuren is the Software Engineer in Dentsu Data Artist Mongol LLC, Ulaanbaatar, Mongolia.',
  paragraphTwo: 'He’s competed well in the national Mathematical competitions for around a half decade. He is currently being a part of team applying ML & NLP to Japanese marketing. ',
  paragraphThree: 'When he is not behind the computer screen, you can find him in a gym where he still competes in the basketball court or in a music events, playing the guitar and singing for himself. ',
  resume: 'https://bayartsogt-ya.github.io/CV_Bayartsogt.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'hugging_face.png',
    title: 'ALBERT Mongolian',
    info: 'This repo provides pretrained ALBERT model and trained SentencePiece model for Mongolia text. \
           Training data is the Mongolian wikipedia corpus from Wikipedia Downloads and Mongolian News corpus.',
    info2: '',
    url: 'https://huggingface.co/bayartsogt/albert-mongolian',
    repo: 'https://github.com/bayartsogt-ya/albert-mongolian', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'mn_tweet_classification.png',
    title: 'Tweet Classification in Mongolian',
    info: 'Using this repo, you can classify whether the input text is similar to @Iderodcomedian\'s or @enkhbat\'s.',
    info2: 'Fine-tuning code is providied for you to play around!',
    url: 'https://twitter.com/_tsogoo_/status/1152594802438893571',
    repo: 'https://github.com/bayartsogt-ya/mn-tweet-bert', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'speech_commands_thesis.png',
    title: 'Mongolian Speech Commands using CNN',
    info: 'To develop the system using the model learnt on recordings of 600 different people telling numbers between 0 - 9 (10 seconds per each person)',
    info2: 'This project was my bachelor thesis.',
    url: 'https://github.com/bayartsogt-ya/MSR-CNN',
    repo: 'https://github.com/bayartsogt-ya/MSR-CNN', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'EMAIL ME',
  email: 'bayartsogt.yadamsuren@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/_tsogoo_',
    },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bayartsogt-yadamsuren-b419b217b/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/bayartsogt-ya',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
