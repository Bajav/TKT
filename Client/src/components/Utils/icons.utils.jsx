// src/icons/facilityIconMap.js (or wherever you put it)

import {
  Wifi,
  Dumbbell,
  CarFront as Car,
  Coffee,
  TelevisionSimple as Tv,
  Wind,
  Waves,
  Utensils,
  Martini as Bubbles,           // spa/sauna
  Cigarette,
  CigaretteSlash as CigaretteOff,
  BabyCarriage as Baby,
  RadioButton as Radio,
  Shower,
  ShieldCheck as Safe,
  Plug,
  Bath as Bathtub,
  Phone,
  Cable,
  Bed,
  AlarmClock,
  Wheelchair as Accessibility,
  AlarmSmoke,                   // ← exists! smoke detector
  Refrigerator,                 // ← correct name (not "as Fridge")
  BrushCleaning,                // ← exists! housekeeping
  AirVent,
} from "lucide-react";

import { FaIron } from "react-icons/fa";

// Phosphor hair dryer icon is called HairDryer (not SprayBottleIcon)
import { HairDryer } from "@phosphor-icons/react";

const facilityIconMap = {
  wifi: { icon: Wifi, label: "Free WiFi" },
  "wi-fi": { icon: Wifi, label: "Free WiFi" },
  internet: { icon: Wifi, label: "Internet Access" },
  wireless: { icon: Wifi, label: "WiFi" },

  fridge: { icon: Refrigerator, label: "Fridge" }, // Lucide has it!

  gym: { icon: Dumbbell, label: "Gym" },
  fitness: { icon: Dumbbell, label: "Fitness Center" },
  hairdryer: { icon: HairDryer, label: "Hair Dryer" }, // correct Phosphor name

  parking: { icon: Car, label: "Parking" },
  "car park": { icon: Car, label: "Parking" },

  radio: { icon: Radio, label: "Radio" },
  shower: { icon: Shower, label: "Shower" },
  safe: { icon: Safe, label: "Safe" },
  "individually adjustable heating": { icon: Wind, label: "Heating" },
  "wake-up service": { icon: AlarmClock, label: "Wake-up Service" },
  "extra beds on demand": { icon: Bed, label: "Extra Beds on Demand" },
  "smoking rooms": { icon: Cigarette, label: "Smoking Rooms" },
  "plug adaptor": { icon: Plug, label: "Plug Adaptor" },
  "ironing set": { icon: FaIron, label: "Ironing Set" },

  "wheelchair-accessible": { icon: Accessibility, label: "Wheelchair-Accessible" },
  toiletries: { icon: Shower, label: "Toiletries" }, // fallback, or use Phosphor Drop if you want

  "air conditioning": { icon: Wind, label: "Air Conditioning" },
  "air conditioned": { icon: Wind, label: "Air Conditioning" },
  "220v power supply": { icon: Cable, label: "220V Power Supply" },
  "direct dial telephone": { icon: Phone, label: "Direct Dial Telephone" },
  "tea and coffee making facilities": { icon: Coffee, label: "Tea & Coffee Facilities" },

  housekeeping: { icon: BrushCleaning, label: "Housekeeping" },

  "swimming pool": { icon: Waves, label: "Swimming Pool" },
  pool: { icon: Waves, label: "Pool" },
  bathtub: { icon: Bathtub, label: "Bathtub" },

  restaurant: { icon: Utensils, label: "Restaurant" },
  bar: { icon: Coffee, label: "Bar" },

  spa: { icon: Bubbles, label: "Spa" },
  sauna: { icon: Bubbles, label: "Sauna" },

  "smoke detector": { icon: AlarmSmoke, label: "Smoke Detector" },

  "non smoking": { icon: CigaretteOff, label: "Non-smoking", color: "#ff4444" },
  "family rooms": { icon: Baby, label: "Family Rooms" },
  tv: { icon: Tv, label: "TV" },
  television: { icon: Tv, label: "Television" },
};

export default facilityIconMap;