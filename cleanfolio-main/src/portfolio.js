const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: '.pip',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ashik S',
  role: 'Full Python Stack Developer',
  description:
    'A highly skilled and motivated full stack developer experiencein web development. Proficient in Django, Python, HTML,CSS, JavaScript, and various other technologies. Experiencein developing and maintaining web applications from start tofinish, including front-end and back-end development,database design, and deployment',
  resume: 'https://www.canva.com/design/DAFVYCXpXKw/U1kbT-jLEdAaA4XHn2Ud6g/view?utm_content=DAFVYCXpXKw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
  social: {
    linkedin: 'https://www.linkedin.com/in/ashik-s-a176521a4/',
    github: 'https://github.com/ashik202',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Easybuy',
    description:
      'It is a Full functional e-com platform for electronic gadgetuser can buy thing form here. Admin can control the site. Inthis site i integrate twillow for otpand rasopay for paymentoptions',
    stack: ['HTML', 'css', 'javascript','Python','Django','Psql'],
    sourceCode: 'https://github.com/ashik202/EasyBuy',
    livePreview: '',
  },
  {
    name: 'DOCBOOK',
    description:
      't is a website for tacking online appointment to and Doctorcan show case their clinic and consulting time doctor can addconsulting time and user and book appointments.',
    stack: ['React', 'javascript', 'Python','Django','Psql','Rest api','Redux Toolkit','Tailwind css '],
    sourceCode: 'https://github.com/ashik202/DocBookFull',
    livePreview: '',
  },
  {
    name: 'Netflix Clone',
    description:
      't is a clon of netflix .In this I use front end using rect andbacked using api Tmdb',
    stack: ['TBDB', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/ashik202/nextflix-react',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux Toolkit',
  'Git',
  'Django',
  'Mysql',
  'Psql',
  'mogodb',
  'python'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ashikparayady@gmail.com',
}

export { header, about, projects, skills, contact }
