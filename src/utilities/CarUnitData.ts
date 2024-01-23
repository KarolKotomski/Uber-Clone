import uberGreen from "../images/Uber_Green.png";
import uberX from "../images/Uber_X.png";
import uberComfort from "../images/Uber_Comfort.png";
import uberPets from "../images/Uber_Pets.png";
import uberXL from "../images/Uber_XL.png";
import uberBlack from "../images/Uber_Black.png";

export type Car = {
  id: number;
  name: string;
  seat: number;
  description: string;
  amount: number;
  image: string;
};

export const carUnitData = [
  {
    id: 1,
    name: "Green",
    seat: 4,
    description: "Affordable, everyday rides",
    amount: 0.66,
    image: uberGreen,
  },
  {
    id: 2,
    name: "UberX",
    seat: 4,
    description: "Affordable, everyday rides",
    amount: 0.66,
    image: uberX,
  },
  {
    id: 3,
    name: "Comfort",
    seat: 4,
    description: "Newer more comfortable cars",
    amount: 0.83,
    image: uberComfort,
  },
  {
    id: 4,
    name: "Uber Pets",
    seat: 3,
    description: "Ride with your pet",
    amount: 0.65,
    image: uberPets,
  },
  {
    id: 5,
    name: "UberXL",
    seat: 6,
    description: "Affordable rides for groups up to 6",
    amount: 0.95,
    image: uberXL,
  },
  {
    id: 6,
    name: "Black",
    seat: 4,
    description: "Premium cars with best drivers",
    amount: 0.81,
    image: uberBlack,
  },
];
