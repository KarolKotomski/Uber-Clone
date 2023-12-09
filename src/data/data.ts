import earnDeliver from "../icons/earn-deliver.svg";
import forkEat from "../icons/fork-eat.svg";
import carRide from "../icons/car-ride.svg";

import focused1 from "../images/focused1.webp";
import focused2 from "../images/focused2.webp";

import aboutPerson from "../icons/person.svg";
import aboutDocument from "../icons/document.svg";
import aboutHome from "../icons/home.svg";

import facebook from "../icons/facebook.png";
import twitter from "../icons/twitter.png";
import youtube from "../icons/youtube.png";
import linkedin from "../icons/linkedin.png";
import instagram from "../icons/instagram.png";

import uberAppQr from "../icons/uberAppQr.webp";
import driverAppQr from "../icons/driverAppQr.webp";

//HomeHeroElement data:

/**Header */
export const heroElementHeaderList = [
  {
    icon: earnDeliver,
    text: "Drive or deliver",
  },
  {
    icon: forkEat,
    text: "Eat",
  },
  {
    icon: carRide,
    text: "Ride",
  },
];

/**Main */
export const heroElementMainList = [
  {
    id: 1,
    header: "Get in the driver's seat and get paid",
    paragraph:
      "Drive on the platform with the largest network of active riders.",
    buttonText: "Sign up to drive",
    additionalText: "Learn more about driving and delivering",
  },
  {
    id: 2,
    header: "Discover delicious eats",
    paragraph: "Order delivery from restaurants you love.",
    buttonText: "Order now",
    additionalText: "Own a restaurant? Partner with Uber Eats",
  },
  {
    id: 3,
    header: "Request a ride now",
    paragraph:
      "Drive on the platform with the largest network of active riders.",
    buttonText: "Request now",
    additionalText: "Schedule for later",
  },
];

//HomeFocused section data:
export const focusedList = [
  {
    picture: focused1,
    header: "Our commitment to your safety",
    paragraph:
      "With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.",
    additionals: [
      "Read about our Community Guidelines",
      "See all safety features",
    ],
  },
  {
    picture: focused2,
    header: "Setting 10,000+ cities in motion",
    paragraph:
      "The app is available in thousands of cities worldwide, so you can request a ride even when you're far from home.",
    additionals: ["View all cities"],
  },
];

//HomeAbout section data:

export const aboutList = [
  {
    icon: aboutPerson,
    header: "About us",
    paragraph:
      "Find out how we started, what drives us, and how we're reimagining how the world moves.",
    link: "Learn more about Uber",
  },
  {
    icon: aboutDocument,
    header: "Newsroom",
    paragraph:
      "See announcements about our latest releases, initiatives, and partnerships.",
    link: "Go to Newsroom",
  },
  {
    icon: aboutHome,
    header: "Global citizenship",
    paragraph:
      "Read about our commitment to making a positive impact in the cities we serve.",
    link: "See our partnerships",
  },
];

//HomeDownload section data:

export const downloadList = [
  {
    header: "Download the Uber app",
    qrCode: uberAppQr,
  },
  {
    header: "Download the Driver app",
    qrCode: driverAppQr,
  },
];

//HomeFooter section data:
export const footerList = [
  {
    label: "Company",
    list: [
      "About us",
      "Our offerings",
      "Newsroom",
      "Investors",
      "Blog",
      "Careers",
      "AI",
      "Gift cards",
    ],
  },

  {
    label: "Products",
    list: [
      "Ride",
      "Drive",
      "Deliver",
      "Eat",
      "Uber for Business",
      "Uber Freight",
    ],
  },
  {
    label: "Global citizenship",
    list: ["Safety", "Diversity and Inclusion"],
  },
  {
    label: "Travel",
    list: ["Reserve", "Airports", "Cities"],
  },
];

export const icons = [
  {
    name: "facebook",
    icon: facebook,
  },
  {
    name: "twitter",
    icon: twitter,
  },
  {
    name: "youtube",
    icon: youtube,
  },
  {
    name: "linkedin",
    icon: linkedin,
  },
  {
    name: "instagram",
    icon: instagram,
  },
];
