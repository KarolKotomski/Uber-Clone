import herobanner from "../images/hero_banner.webp";
import banner1 from "../images/banner1.webp";
import banner2 from "../images/banner2.webp";

import facebook from "../icons/facebook.png";
import twitter from "../icons/twitter.png";
import youtube from "../icons/youtube.png";
import linkedin from "../icons/linkedin.png";
import instagram from "../icons/instagram.png";

import uberAppQr from "../icons/uberAppQr.webp";
import driverAppQr from "../icons/driverAppQr.webp";

//Banner section data:

export const bannerContentList = [
  {
    id: 1,
    header: "Go anywhere with Uber",
    paragraph: "Request a ride, hop in, and go.",
    image: herobanner,
    altText: "A woman getting out of the car in the city center",
  },
  {
    id: 2,
    header: "Drive when you want, make what you need",
    paragraph:
      "Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.",
    image: banner1,
    altText: "A taxi driver in the car",
  },
  {
    id: 3,
    header: "The Uber you know, reimagined for business",
    paragraph:
      "Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size.",
    image: banner2,
    altText: "A woman getting out of the car at the airport",
  },
];

//Company DropDownMenu data:

export const companyDropDownList = [
  "About Us",
  "Our offerings",
  "How Uber works",
  "Global citizenship",
  "Newsroom",
  "Investor relations",
  "Blog",
  "Careers",
];

//Download section data:

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

//Footer section data:
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
