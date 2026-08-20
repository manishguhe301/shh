import { Tier } from '@/components/Leagues';
import { Stay } from '@/components/Stays';

export const FLIPS = [
  {
    original: 'Daily reminder to practice speaking',
    flipped: 'Daily reminder to practice saying nothing',
  },
  {
    original: '"Duo is sad you missed your lesson"',
    flipped:
      '"You spoke 40 words today. That\'s alright. Try for less tomorrow."',
  },
  {
    original: 'Streak counter for consecutive days used',
    flipped: 'Streak counter for consecutive days unspoken',
  },
  {
    original: 'Leagues: Bronze, Silver, Gold, Diamond',
    flipped: 'Leagues: Whisper, Hush, Still, Silence',
  },
  {
    original: 'Leaderboard ranks who spoke the most',
    flipped: 'Leaderboard ranks who spoke the least',
  },
];

export const STEPS = [
  {
    title: 'Surrender your phone',
    desc: "At the door. It's returned when you leave, fully charged, with nothing missed.",
  },
  {
    title: 'Write your last sentence',
    desc: "One line in the guestbook — the final thing you'll say for the length of your stay.",
  },
  {
    title: 'Walk in without a word',
    desc: "A host leads you to your room. No greeting exchanged. That's the whole practice, starting now.",
  },
];

export const FAQS = [
  {
    que: 'Is this actually run by the language app people?',
    ans: 'No — Shh. is an independent retreat brand built as a deliberate mirror of that kind of app: same streaks, same leagues, same daily nudge, aimed at the opposite behaviour.',
  },
  {
    que: 'What happens if I speak during a Still or Silence stay?',
    ans: 'Nothing punitive. Your streak resets, quietly, and a host notes it without comment. Most guests find that worse than any penalty.',
  },
  {
    que: 'Can I bring my phone at all?',
    ans: 'It stays at the front desk for the length of your stay. Whisper members may request one supervised hour daily; Hush and Still do not.',
  },
  {
    que: 'Do I need retreat experience to join?',
    ans: 'No. Most guests arrive from the Whisper League with zero background. The practice is designed to be boring at first, on purpose.',
  },
  {
    que: 'Is there a leaderboard for the Silence League?',
    ans: 'There is, technically. Almost no one checks it.',
  },
];

export const FOOTER_LINKS = [
  {
    section: 'Practice',
    content: ['The Leagues', 'Silence streaks', 'The guestbook'],
  },
  {
    section: 'Stays',
    content: ['The Ridge House', 'Deep Grove', 'The Low Tide'],
  },
  {
    section: 'Support',
    content: ['FAQ', 'Cancel a stay', 'Contact'],
  },
];

export const LEAGUES: Tier[] = [
  {
    name: 'Whisper',
    price: '₹0',
    period: 'free, forever',
    desc: 'One guided quiet hour a week. Learn to notice how much you say without meaning to.',
    perks: [
      'Weekly quiet hour',
      'Silence streak tracking',
      'Community leaderboard',
    ],
    featured: false,
  },
  {
    name: 'Hush',
    price: '₹1,499',
    period: 'per month',
    desc: 'A daily practice. Morning and evening sits, plus one weekend retreat a quarter.',
    perks: [
      'Daily silence sessions',
      'Quarterly weekend retreat',
      'Personal quiet-streak coach',
      'Priority Still League invite',
    ],
    featured: true,
  },
  {
    name: 'Still',
    price: '₹4,200',
    period: 'per month',
    desc: 'For the committed. Live-in retreat access, unlimited stays, a lifetime streak record.',
    perks: [
      'Unlimited retreat stays',
      'Private quarters at any location',
      'Lifetime streak record, framed',
      'Entry into the Silence League',
    ],
    featured: false,
  },
];

export const NAV_LINKS = [
  {
    href: '#practice',
    label: 'The Practice',
  },
  {
    href: '#stays',
    label: 'Stays',
  },
  {
    href: '#leagues',
    label: 'Leagues',
  },
  {
    href: '#voices',
    label: 'Voices',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
];

export const STAYS: Stay[] = [
  {
    src: '/assets/ridge.svg',
    name: 'The Ridge House',
    place: 'Himalayan foothills',
    desc: 'Stone cabins above the treeline. No wifi past the front desk. Meals arrive without a knock.',
    nightly: '₹6,800',
  },
  {
    src: '/assets/grove.svg',
    name: 'Deep Grove',
    place: 'Western Ghats',
    desc: 'Single-room huts spaced far enough apart that you forget anyone else is staying too.',
    nightly: '₹5,200',
  },
  {
    src: '/assets/coast.svg',
    name: 'The Low Tide',
    place: 'Konkan coast',
    desc: "A row of quarters facing the water. The only sound approved here is the sea's.",
    nightly: '₹7,400',
  },
];

export const VOICES = [
  {
    quote:
      "I run a language-learning startup, so the joke wasn't lost on me. What surprised me was how much I needed the actual thing.",
    name: 'R. Bhatt',
    role: 'Ridge House, 4 nights',
  },
  {
    quote:
      "My streak is at 63 days now. My family has started leaving notes instead of calling. Not sure that was the goal, but I'll take it.",
    name: 'S. Menon',
    role: 'Hush League member',
  },
  {
    quote:
      'There is no leaderboard in the Silence League. When I asked why, the host just looked at me. I understood.',
    name: 'A. Fernandes',
    role: 'Still League member',
  },
];
