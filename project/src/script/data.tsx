import type { ReactElement } from "react";
import SampleProject from "../pages/SampleProject";
import {
  FacebookIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  PinterestIcon,
  TwitterIcon,
} from "./icons";
import {
  ourProjectsImg1,
  ourProjectsImg2,
  ourProjectsImg3,
  photoGalleryImg1,
  photoGalleryImg10,
  photoGalleryImg2,
  photoGalleryImg3,
  photoGalleryImg4,
  photoGalleryImg5,
  photoGalleryImg6,
  photoGalleryImg7,
  photoGalleryImg8,
  photoGalleryImg9,
  projectGalleryImg1,
  projectGalleryImg2,
  projectGalleryImg3,
  projectGalleryImg4,
  projectGalleryImg5,
} from "./images";
import {
  Gallery,
  Projects,
  Certifications,
  Contacts,
  Home,
  Error,
} from "./pages";

export type NavItem = {
  title: string;
  path: string;
};

export type RouteItem = {
  title: string;
  path: string;
  element: React.FC;
  isNav: boolean;
};

export interface MissionItem {
  id: number;
  text: string;
}

export interface ProjectGalleryData {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  path: string;
  width: number;
  height: number;
}

interface SelectOption {
  value: string;
  label: string;
}

export interface DynamicFormField {
  id: keyof ContactFormState;
  type?: "text" | "email" | "tel";
  placeholder: string;
  required?: boolean;
  options?: SelectOption[];
  isTextarea?: boolean;
  isSelect?: boolean;
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

export interface FooterContactItem {
  icon: ReactElement;
  element: ReactElement;
}

export interface FooterSocialLink {
  ariaLabel: string;
  icon: ReactElement;
}

export interface PhotoGalleryImage {
  id: number;
  img: string;
  alt: string;
}

export interface OurProjectCard {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  text: string;
  path: string;
}

export const CONTACT_FORM_FIELDS: DynamicFormField[] = [
  {
    id: "name",
    type: "text",
    placeholder: "Name",
    required: false,
  },
  {
    id: "phone",
    type: "tel",
    placeholder: "Phone Number",
    required: true,
  },
  {
    id: "email",
    type: "email",
    placeholder: "E-mail",
    required: true,
  },
  {
    id: "interest",
    isSelect: true,
    placeholder: "Interested in",
    required: false,
    options: [
      { value: "", label: "Interested In" },
      { value: "project-a", label: "Project A" },
      { value: "project-b", label: "Project B" },
      { value: "general-inquiry", label: "General Inquiry" },
    ],
  },
  {
    isTextarea: true,
    id: "message",
    placeholder: "Message",
    required: true,
  },
];

export const HEADER_LINKS: NavItem[] = [
  { title: "MAIN", path: "/" },
  { title: "GALLERY", path: "/gallery" },
  { title: "PROJECTS", path: "/projects" },
  { title: "CERTIFICATIONS", path: "/certifications" },
  { title: "CONTACTS", path: "/contacts" },
];

export const APP_ROUTES: RouteItem[] = [
  {
    title: "MAIN",
    path: "/",
    element: Home,
    isNav: true,
  },
  {
    title: "GALLERY",
    path: "/gallery",
    element: Gallery,
    isNav: true,
  },
  {
    title: "PROJECTS",
    path: "/projects",
    element: Projects,
    isNav: true,
  },
  {
    title: "CERTIFICATIONS",
    path: "/certifications",
    element: Certifications,
    isNav: true,
  },
  {
    title: "CONTACTS",
    path: "/contacts",
    element: Contacts,
    isNav: true,
  },
  {
    title: "Not Found",
    path: "*",
    element: Error,
    isNav: false,
  },
  {
    title: "SAMPLE PROJECT",
    path: "/sample-project",
    element: SampleProject,
    isNav: false,
  },
];

export const MISSION_ITEMS: MissionItem[] = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.",
  },
];

export const PROJECTS_GALLERY_DATA: ProjectGalleryData[] = [
  {
    id: 1,
    title: "Sample Project",
    image: projectGalleryImg1,
    imageAlt: "Modern stadium architecture",
    path: "/",
    width: 570,
    height: 255,
  },
  {
    id: 2,
    title: "Golden Dome",
    image: projectGalleryImg2,
    imageAlt: "Golden dome structure",
    path: "/",
    width: 570,
    height: 255,
  },
  {
    id: 3,
    title: "Site View",
    image: projectGalleryImg3,
    imageAlt: "Aerial view of commercial site",
    path: "/",
    width: 270,
    height: 255,
  },
  {
    id: 4,
    title: "Residence",
    image: projectGalleryImg4,
    imageAlt: "High-rise residential complex",
    path: "/",
    width: 470,
    height: 255,
  },
  {
    id: 5,
    title: "Cultural Center",
    image: projectGalleryImg5,
    imageAlt: "Abstract cultural center",
    path: "/",
    width: 370,
    height: 255,
  },
];

export const FOOTER_LINKS: NavItem[] = [
  { title: "Main", path: "/" },
  { title: "Gallery", path: "/gallery" },
  { title: "Projects", path: "/projects" },
  { title: "Certifications", path: "/certifications" },
  { title: "Contacts", path: "/contacts" },
];

export const FOOTER__CONTACTS: FooterContactItem[] = [
  {
    icon: <LocationIcon />,
    element: (
      <address className="footer__address">
        1234 Sample Street <br />
        Austin Texas 78704
      </address>
    ),
  },
  {
    icon: <PhoneIcon />,
    element: (
      <a className="footer__contact-link" href="tel:5123332222">
        512.333.2222
      </a>
    ),
  },
  {
    icon: <MailIcon />,
    element: (
      <a className="footer__contact-link" href="mailto:sampleemail@gmail.com">
        sampleemail@gmail.com
      </a>
    ),
  },
];

export const FOOTER_SOCIAL: FooterSocialLink[] = [
  {
    ariaLabel: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    ariaLabel: "twitter",
    icon: <TwitterIcon />,
  },
  {
    ariaLabel: "LinkedIn",
    icon: <LinkedInIcon />,
  },
  {
    ariaLabel: "Pinterest",
    icon: <PinterestIcon />,
  },
];

export const PHOTO_GALLERY_DATA: PhotoGalleryImage[] = [
  {
    id: 1,
    img: photoGalleryImg1,
    alt: "Placeholder for section title or design element",
  },
  {
    id: 2,
    img: photoGalleryImg2,
    alt: "Coastal lighthouse on a cliff at sunset",
  },
  {
    id: 3,
    img: photoGalleryImg3,
    alt: "View up into a glass and metal roof structure of an atrium",
  },
  {
    id: 4,
    img: photoGalleryImg4,
    alt: "Tall white lighthouse with red stripes against a blue sky",
  },
  {
    id: 5,
    img: photoGalleryImg5,
    alt: "Stone ruins of an ancient building surrounded by green parkland",
  },
  {
    id: 6,
    img: photoGalleryImg6,
    alt: "Interior view of a church showing a painted mural and vaulted ceiling",
  },
  {
    id: 7,
    img: photoGalleryImg7,
    alt: "Narrow European street lined with historic buildings and storefronts",
  },
  {
    id: 8,
    img: photoGalleryImg8,
    alt: "Modern building with colorful stained-glass windows under a series of white arches",
  },
  {
    id: 9,
    img: photoGalleryImg9,
    alt: "Venetian palace on the waterfront with a boat in the foreground",
  },
  {
    id: 10,
    img: photoGalleryImg10,
    alt: "Looking up at a modern skyscraper from street level",
  },
];

const DUMMY_TEXT =
  "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const PROJECT_CARDS_DATA: OurProjectCard[] = [
  {
    id: 1,
    title: "Sample Project 1",
    image: ourProjectsImg1,
    imageAlt: "Aerial view rendering of a white corporate building.",
    text: DUMMY_TEXT,
    path: "/sample-project",
  },
  {
    id: 2,
    title: "Sample Project 2",
    image: ourProjectsImg2,
    imageAlt: "Interior rendering of a modern office lounge area with stairs.",
    text: DUMMY_TEXT,
    path: "/projects",
  },
  {
    id: 3,
    title: "Sample Project 3",
    image: ourProjectsImg3,
    imageAlt:
      "Rendering of a multi-story building facade with vertical red accents.",
    text: DUMMY_TEXT,
    path: "/projects",
  },
];
