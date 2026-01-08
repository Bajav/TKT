// src/icons/facilityIconMap.js (or wherever you put it)

import {
  Wifi,
  Dumbbell,
  Car,
  Coffee,
  Tv,
  Wind,
  Waves,
  Utensils,
  Bubbles, // spa/sauna
  Cigarette,
  CigaretteOff,
  Baby,
  Radio,
  ShowerHead,
  ShieldCheck,
  Plug,
  Bath,
  Phone,
  Cable,
  Bed,
  AlarmClock,
  Toilet,
  Accessibility,
  AlarmSmoke, // ← exists! smoke detector
  Refrigerator, // ← correct name (not "as Fridge")
  BrushCleaning, // ← exists! housekeeping
  AirVent,
  UtensilsIcon,
} from "lucide-react";


// Phosphor hair dryer icon is called HairDryer (not SprayBottleIcon)
import { OvenIcon,HairDryerIcon,SprayBottleIcon,DeskIcon,TowelIcon,RugIcon,WheelchairMotionIcon,BeerBottleIcon  } from "@phosphor-icons/react";

const facilityIconMap = {
  wifi: { icon: Wifi, label: "Free WiFi" },
  "wi-fi": { icon: Wifi, label: "Free WiFi" },
  internet: { icon: Wifi, label: "Internet Access" },
  wireless: { icon: Wifi, label: "WiFi" },
    "disability-friendly bathroom": {
    icon: WheelchairMotionIcon,
    label: "Disability-Friendly Bathroom",
  },
  fridge: { icon: Refrigerator, label: "Fridge" }, // Lucide has it!

  gym: { icon: Dumbbell, label: "Gym" },
  fitness: { icon: Dumbbell, label: "Fitness Center" },
  hairdryer: { icon: HairDryerIcon, label: "Hair Dryer" }, // correct Phosphor name

  parking: { icon: Car, label: "Parking" },
  "car park": { icon: Car, label: "Parking" },

  radio: { icon: Radio, label: "Radio" },
  shower: { icon: ShowerHead, label: "Shower" },
  safe: { icon: ShieldCheck, label: "Safe" },
  "individually adjustable heating": { icon: Wind, label: "Heating" },
  "wake-up service": { icon: AlarmClock, label: "Wake-up Service" },
  "extra beds on demand": { icon: Bed, label: "Extra Beds on Demand" },
  "smoking rooms": { icon: Cigarette, label: "Smoking Rooms" },
  "plug adaptor": { icon: Plug, label: "Plug Adaptor" },
  "ironing set": { icon: Plug, label: "Ironing Set" },
  "kitchen utensils, plates & cups": { icon: Plug, label: "Kitchen utensils, plates & cups" },
  "kitchen utensils": { icon: Plug, label: "Kitchen Utensils" },
  "kitchenette": { icon: OvenIcon, label: "Kitchenette" },
  "wheelchair-accessible": {
    icon: Accessibility,
    label: "Wheelchair-Accessible",
  },
  toiletries: { icon: Toilet, label: "Toiletries" }, 
  "air conditioning": { icon: AirVent, label: "Air Conditioning" },
  "air conditioned": { icon: AirVent, label: "Air Conditioning" },
  "220v power supply": { icon: Cable, label: "220V Power Supply" },
  "direct dial telephone": { icon: Phone, label: "Direct Dial Telephone" },
  "tea and coffee making facilities": {
    icon: Coffee,
    label: "Tea & Coffee Facilities",
  },
  housekeeping: { icon: BrushCleaning, label: "Housekeeping" },
  "swimming pool": { icon: Waves, label: "Swimming Pool" },
  pool: { icon: Waves, label: "Pool" },
  bathtub: { icon: Bath, label: "Bathtub" },
  bathrobes: { icon: TowelIcon, label: "Bathrobes" },
  "carpeted floors": { icon: RugIcon, label: "Carpeted Floors" },

  restaurant: { icon: Utensils, label: "Restaurant" },
  bar: { icon: BeerBottleIcon, label: "Bar" },

  spa: { icon: Bubbles, label: "Spa" },
  sauna: { icon: Bubbles, label: "Sauna" },
  desk: { icon: DeskIcon, label: "Desk" },

  "smoke detector": { icon: AlarmSmoke, label: "Smoke Detector" },

  "non smoking": { icon: CigaretteOff, label: "Non-smoking", color: "#ff4444" },
  "family rooms": { icon: Baby, label: "Family Rooms" },
  tv: { icon: Tv, label: "TV" },
  television: { icon: Tv, label: "Television" },
};

export default facilityIconMap;
