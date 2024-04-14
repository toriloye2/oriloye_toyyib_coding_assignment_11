// export type FooterLink = {
//   href: string;
//   label: string;
// };

export type SocialLink = {
  icon: string; // Font Awesome icon class name (e.g., 'fa fa-envelope')
  url: string; // URL of the social media profile
  label: string; // Text displayed for the link
}
export type FooterProps = {
  copyrightText?: string;
  socialLinks?: SocialLink[];
}
