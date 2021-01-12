const menuConfig = {
  sections: [
    {
      name: 'Introduction',
      link: '/#/',
      sub: [],
    },
    {
      name: 'Education',
      link: '/#/education',
      sub: [],
    },
    {
      name: 'Technical Skills',
      link: '/#/skills',
      sub: [],
    },
    {
      name: 'Work Experience',
      link: '/#/experience',
      sub: [],
    },
    {
      name: 'Examples',
      link: '',
      sub: [
        {
          name: 'Color Cart',
          link:
            '/#/example?title=Color Cart&src=https://color-cart.tylerpoole.dev',
        },
        {
          name: 'Form Generator',
          link:
            '/#/example?title=Form Generator&src=https://form-generator.tylerpoole.dev',
        },
        {
          name: 'Mars on This Day',
          link:
            '/#/example?title=Mars on This Day&src=https://mars.tylerpoole.dev',
        },
        {
          name: 'Pokedex',
          link: '/#/example?title=Pokedex&src=https://pokedex.tylerpoole.dev',
        },
      ],
    },
  ],
  footer: [
    {
      icon: 'FaGithub',
      link: 'https://github.com/pooletyler',
      size: '1.75rem',
    },
    {
      icon: 'FaLinkedin',
      link: 'https://linkedin.com/in/pooletb93',
      size: '1.75rem',
    },
    {
      icon: 'FaDownload',
      link: '/#/resume',
      size: '1.75rem',
    },
  ],
};

export default menuConfig;
