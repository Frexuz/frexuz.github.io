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
    video: 'https://www.youtube.com/embed/mr5cDf0z8c4',
    logo: images.Travlr.logo,
    backgroundColor: '#072046',
    color: '#eee',
    tagLine: 'Track which countries you have visited and flown to.',
    tags: ['React Native', 'SVG', 'GraphQL', 'AWS AppSync'],
    // eslint-disable-next-line no-script-url
    buttons: [{ text: '(coming soon)', href: 'javascript:void(0)' }],
  },
]
