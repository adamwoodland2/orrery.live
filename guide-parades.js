// Planet parades — "planetary alignments" in the popular, Earth-based sense:
// several planets in the same part of the sky at dusk or dawn. Dates are those
// given by Wikipedia, NASA and Star Walk; each was checked against the orrery's
// model (all listed planets on the named side of the Sun that day). `days` is
// days since J2000 at 12:00 UTC, i.e. the orrery's ?t= value for that date.
export const PARADES = [
	{ days: 8210, date: '24 Jun 2022', planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'], sky: 'dawn',
	  note: 'All seven planets, with the five naked-eye ones strung out in order from the Sun — Mercury, Venus, Mars, Jupiter, Saturn — for the first time since 2004.', source: 'https://en.wikipedia.org/wiki/Planetary_parade', sourceName: 'Wikipedia' },
	{ days: 8487, date: '28 Mar 2023', planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Uranus'], sky: 'dusk',
	  note: 'Five planets low in the west after sunset; Jupiter and Mercury sat very close to the horizon.', source: 'https://www.theguardian.com/science/2023/mar/28/planetary-parade-mercury-venus-mars-jupiter-uranus', sourceName: 'The Guardian' },
	{ days: 8920, date: '3 Jun 2024', planets: ['Mercury', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'], sky: 'dawn',
	  note: 'Six planets before sunrise, though Mercury and Jupiter were deep in the twilight and Uranus and Neptune need optics.', source: 'https://www.independent.co.uk/space/planetary-alignment-today-date-mars-saturn-b2555571.html', sourceName: 'The Independent' },
	{ days: 9152, date: '21 Jan 2025', planets: ['Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'], sky: 'dusk',
	  note: 'Six planets in the evening sky for a month (to 21 February), with Venus, Jupiter and Mars bright and Mars just past opposition.', source: 'https://en.wikipedia.org/wiki/Planetary_parade', sourceName: 'Wikipedia' },
	{ days: 9190, date: '28 Feb 2025', planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'], sky: 'dusk',
	  note: 'Mercury joined the six above for a seven-planet parade — widely reported as the last of its kind until 2040.', source: 'https://en.wikipedia.org/wiki/Planetary_parade', sourceName: 'Wikipedia' },
	{ days: 9555, date: '28 Feb 2026', planets: ['Mercury', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'], sky: 'dusk',
	  note: 'Six planets after sunset, with Mercury, Venus and Saturn bunched low in the west and Jupiter high in the east.', source: 'https://starwalk.space/en/news/planetary-alignment-february-28-2026', sourceName: 'Star Walk' },
	{ days: 9720, date: '12 Aug 2026', planets: ['Mercury', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'], sky: 'dawn',
	  note: 'Six planets before dawn on the morning of the Perseid meteor shower peak; Mars and Saturn were the easy ones.', source: 'https://starwalk.space/en/news/planetary-alignment-august-12-2026', sourceName: 'Star Walk' },
	{ days: 9814, date: '14 Nov 2026', planets: ['Mercury', 'Venus', 'Mars', 'Jupiter'], sky: 'dawn',
	  note: 'A small four-planet gathering in the morning sky.', source: 'https://starwalk.space/en/news/what-is-planet-parade', sourceName: 'Star Walk' },
	{ days: 9969, date: '18 Apr 2027', planets: ['Mercury', 'Venus', 'Saturn', 'Neptune'], sky: 'dawn',
	  note: 'Four planets before sunrise; Neptune needs a telescope.', source: 'https://starwalk.space/en/news/what-is-planet-parade', sourceName: 'Star Walk' },
	{ days: 10044, date: '2 Jul 2027', planets: ['Mercury', 'Venus', 'Saturn', 'Uranus', 'Neptune'], sky: 'dawn',
	  note: 'Five planets in the morning sky.', source: 'https://starwalk.space/en/news/what-is-planet-parade', sourceName: 'Star Walk' },
	{ days: 10122, date: '18 Sep 2027', planets: ['Mercury', 'Venus', 'Mars'], sky: 'dusk',
	  note: 'A mini parade of three planets after sunset.', source: 'https://starwalk.space/en/news/what-is-planet-parade', sourceName: 'Star Walk' },
	{ days: 10220, date: '25 Dec 2027', planets: ['Mercury', 'Venus', 'Mars', 'Saturn', 'Uranus', 'Neptune'], sky: 'dusk',
	  note: 'Six planets in the evening sky on Christmas Day; Jupiter is the one missing, over in the morning sky.', source: 'https://starwalk.space/en/news/what-is-planet-parade', sourceName: 'Star Walk' },
	{ days: 10234, date: '8 Jan 2028', planets: ['Mercury', 'Venus', 'Mars', 'Saturn', 'Neptune'], sky: 'dusk',
	  note: 'Five planets after sunset, two weeks after the Christmas parade.', source: 'https://starwalk.space/en/news/what-is-planet-parade', sourceName: 'Star Walk' },
	{ days: 10525, date: '25 Oct 2028', planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'], sky: 'dawn',
	  note: 'All five naked-eye planets before sunrise in late October 2028 (NASA gives the month, not a day); Saturn, near opposition, is up all night.', source: 'https://science.nasa.gov/solar-system/skywatching/planetary-alignments-and-planet-parades/', sourceName: 'NASA' },
	{ days: 12452, date: '3 Feb 2034', planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'], sky: 'dusk',
	  note: 'All seven planets in the evening sky — the next “great” parade after 2025.', source: 'https://starwalk.space/en/news/what-is-planet-parade', sourceName: 'Star Walk' },
	{ days: 14861, date: '8 Sep 2040', planets: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'], sky: 'dusk',
	  note: 'The five naked-eye planets packed into about 9° of sky after sunset — the tightest naked-eye cluster of the century (Wikipedia: within 7° of longitude on 12 September).', source: 'https://en.wikipedia.org/wiki/Planetary_parade', sourceName: 'Wikipedia' },
];
