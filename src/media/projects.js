import { images } from '@media'

export default {
  EpisodeCalendar: {
    logo: images.EpisodeCalendar.logo,
    backgroundColor: '#212121',
    color: '#fff',
    tagTheme: 'light',
    tagLine: 'Track your TV shows.',
    text: '180.000+ registered users. 120M+ rows of user data.',
    tags: ['Ruby on Rails', 'jQuery', 'MySQL', 'SCSS'],
    buttons: [{ href: 'https://episodecalendar.com' }],
  },
  Travlr: {
    logo: images.Travlr.logo,
    backgroundColor: '#072046',
    color: '#eee',
    tagTheme: 'dark',
    tagLine: 'Track which countries you have visited and flown to.',
    tags: ['React Native', 'SVG', 'GraphQL', 'AWS AppSync'],
    buttons: [
      { text: 'App Store', href: '#' },
      { text: 'Play Store', href: '#' },
    ],
  },
}
