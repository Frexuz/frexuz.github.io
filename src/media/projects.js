import { images } from '@media'

export default [
  {
    name: 'EpisodeCalendar',
    logo: images.EpisodeCalendar.logo,
    backgroundColor: '#212121',
    color: '#fff',
    tagLine: 'Track your TV shows.',
    tags: ['Ruby on Rails', 'jQuery', 'MySQL', 'Redis', 'SCSS'],
    buttons: [{ text: 'Website', href: 'https://episodecalendar.com' }],
  },
  {
    name: 'Travlr',
    logo: images.Travlr.logo,
    backgroundColor: '#072046',
    color: '#eee',
    tagLine: 'Track which countries you have visited and flown to.',
    tags: ['React Native', 'SVG', 'GraphQL', 'AWS AppSync'],
    buttons: [
      { text: 'App Store', href: '#' },
      { text: 'Play Store', href: '#' },
    ],
  },
]
