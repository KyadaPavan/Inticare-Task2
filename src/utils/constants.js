// Color Constants
export const COLORS = {
  primaryNavy: '#1A3E62',
  primaryBlue: '#2D96BC',
  lightBlue: '#DFF0FF',
  limeGreen: '#B3FC6A',
  darkGray: '#373737',
  gradient: 'linear-gradient(90deg, #5ED3FF 0%, #6EC6FE 33%, #EB65F4 66%, #FD58F2 100%)',
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Product', href: '#product', hasDropdown: true },
  { name: 'Pricing', href: '#pricing', hasDropdown: false },
  { name: 'Resources', href: '#resources', hasDropdown: true },
  { name: 'Company', href: '#company', hasDropdown: true },
];

// Integration Partners
export const INTEGRATIONS = [
  { name: 'HubSpot', icon: '/WorksWith1.svg', fallback: 'H', color: 'orange' },
  { name: 'Pipedrive', icon: '/WorksWith2.svg', fallback: 'P', color: 'purple' },
  { name: 'Salesforce', icon: '/WorksWith3.svg', fallback: 'S', color: 'blue' },
];

// Ratings
export const RATINGS = [
  { name: 'G2', logo: '/Rating1.svg', score: '5/5' },
  { name: 'Capterra', logo: '/Rating2.svg', score: '5/5' },
];

// Hero Content
export const HERO_CONTENT = {
  badge: {
    emoji: '🚀',
    text: 'Thousands of Professional using LeadCRM',
  },
  title: {
    line1: 'LinkedIn CRM Integration',
    line2: 'Capture, Sync and Enrich in',
    highlight: 'Both Ways',
  },
  description:
    'Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.',
  cta: {
    primary: 'Get a Free Trial Now!',
    secondary: 'Chrome Web Store',
  },
};
