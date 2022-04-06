const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shwetasridharan.github.io',
  title: 'Shweta Sridharan',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shweta',
  role: 'UX/UI Engineer',
  description:
    'Personality type: ENFJ-A',
  description1: 'Hardworking, reliable',  
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/shweta-sridharan/',
    github: 'https://github.com/ShwetaSridharan',
  },
  
}



const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Battledot',
    description:
      'Created a Linux-running, peer to peer, multi-threaded and a multi-process spinoff of the popular game where the players, in a ring formation bomb each other’s dot ships until one player remains.',
    stack: ['Python'],
    sourceCode: 'https://github.com/ShwetaSridharan/Battledot',
    // livePreview: 'https://github.com/ShwetaSridharan/Battledot',
  },
  {
    name: 'Vaxman',
    description:
      'Vax-Man is a re-implementation of Pacman, created in C++, using the Qt library.',
    stack: ['C++', 'QMake'],
    sourceCode: 'https://github.com/ShwetaSridharan/Vaxman',
    // livePreview: 'https://github.com',
  },
  {
    name: 'On Memory Neurotechnologies',
    description:
      'Evaluation of user-centered design for the development of effective neurotechnology devices',
    stack: ['React', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/ShwetaSridharan/Onmemoryneurotechnolgy',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'C++',
  'Redux',
  'HTML',
  'CSS',
  'SASS',
  'Tailwind UI',
  'Material UI',
  'Git',
  'CI/CD',
  'Unity Engine',
  'Revit',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shweta3@ualberta.ca',
}

export { header, about, projects, skills, contact }
