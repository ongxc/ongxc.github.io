const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [
     {
        name: 'Google',
        key: '*',
        url: 'https://encrypted.google.com',
        search: '/search?q={}',
        color: '#000',
      },
	  {
        category: 'Social',
        name: 'Facebook',
        key: 'fb',
        url: 'https://www.facebook.com',
        search: '/search/top/?q={}',
        color: '#4267B2',
      },
	  {
        category: 'Social',
        name: 'Instagram',
        key: 'ig',
        url: 'https://www.instagram.com',
        search: null,
        color: '#9d2bab',
      },
	  {
        category: 'Social',
        name: 'Twitter',
        key: 'tw',
        url: 'https://twitter.com',
        search: '/search?q={}',
        color: '#31a9f3',
      },
	  {
        category: 'Social',
        name: 'WhatsApp',
        key: 'wa',
        url: 'https://web.whatsapp.com/',
        search: null,
        color: '#25d366',
      },
	  {
        category: 'Social',
        name: 'Telegram',
        key: 'tele',
        url: 'http://web.telegram.org',
        search: null,
        color: '#5682A3',
      },
      {
        category: 'Google',
        name: 'Drive',
        key: 'd',
        url: 'https://drive.google.com',
        search: '/drive/search?q={}',
        color: 'linear-gradient(135deg, #4285f4, #4259f4)',
      },
      {
        category: 'Google',
        name: 'Keep',
        key: 'k',
        url: 'https://keep.google.com',
        search: '/#search/text={}',
        color: 'linear-gradient(135deg, #fca550, #fcd050)',
      },
	  {
        category: 'Google',
        name: 'YouTube',
        key: 'y',
        url: 'https://youtube.com/feed/subscriptions',
        search: '/results?search_query={}',
        color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      },
	  {
        category: 'Google',
        name: 'Photos',
        key: 'p',
        url: 'https://photos.google.com',
        search: '/search/{}',
        color: '#34a853',
      },
	  
	  {
        category: 'Google',
        name: 'Maps',
        key: 'm',
        url: 'https://www.google.com/maps',
        search: null,
        color: '#5390ee',
      },
      {
        category: 'Entertaintment',
        name: 'Reddit',
        key: 'r',
        url: 'https://www.reddit.com',
        search: '/search?q={}',
        color: '#cc3700',
      },
	  {
        category: 'Entertaintment',
        name: 'ZoeChip',
        key: 'zc',
        url: 'https://www1.zoechip.com/',
        search: '/search/{}',
        color: '#23b465',
      },
      {
        category: 'Entertaintment',
        name: 'Soccer Streams',
        key: 'ss',
        url: 'https://reddit.soccerstreams.net/home',
        search: null,
        color: '#001825',
      },
	  {
        category: 'Download',
        name: 'YTS',
        key: 'yts',
        url: 'https://yts.mx/browse-movies/0/all/all/7/seeds/0/en',
        search: '/browse-movies/{}',
        color: 'linear-gradient(135deg, #2f2f2f, #373737)',
      },
      {
        category: 'Download',
        name: 'The Pirate Bay',
        key: 'tpb',
        url: 'https://thepiratebay.asia/',
        search: '/search/{}',
        color: '#644529',
      },
	  {
        category: 'Business',
        name: 'Lazada',
        key: 'laz',
        url: 'https://lazada.com.my',
        search: '/catalog/?q={}',
        color: '#F37021',
      },
	  {
        category: 'Business',
        name: 'Shopee',
        key: 'sp',
        url: 'https://lazada.com.my',
        search: '/search/?keyword={}',
        color: '#FF5620',
      },
      {
        category: 'Miscellaneous',
        name: 'Speed Test',
        key: 'spd',
        url: 'https://speed.cloudflare.com/',
        search: null,
        color: '#fbb147',
      },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: true,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: true,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};