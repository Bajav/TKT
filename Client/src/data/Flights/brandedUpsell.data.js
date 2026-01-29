export const brandedUpsellData = [
  {
    type: "flight-offer",
    id: "1",
    source: "GDS",
    instantTicketingRequired: false,
    paymentCardRequired: false,
    lastTicketingDate: "2026-02-28",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2026-06-08T01:35:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-08T06:40:00",
            },
            carrierCode: "QR",
            number: "1392",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H5M",
            id: "51",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-08T07:55:00",
            },
            arrival: {
              iataCode: "DXB",
              at: "2026-06-08T10:15:00",
            },
            carrierCode: "QR",
            number: "1006",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H20M",
            id: "52",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "DXB",
              terminal: "1",
              at: "2026-06-18T05:50:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-18T06:05:00",
            },
            carrierCode: "QR",
            number: "1003",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H15M",
            id: "140",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-18T10:00:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2026-06-18T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H30M",
            id: "141",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "491.60",
      base: "81.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "491.60",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
      refundableFare: false,
      noRestrictionFare: false,
      noPenaltyFare: false,
    },
    validatingAirlineCodes: ["QR"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "USD",
          total: "491.60",
          base: "81.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "13.60",
              code: "F6",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "20.40",
              code: "AE",
            },
            {
              amount: "40.00",
              code: "UL",
            },
            {
              amount: "5.40",
              code: "R9",
            },
            {
              amount: "204.00",
              code: "YQ",
            },
            {
              amount: "2.80",
              code: "ZR",
            },
            {
              amount: "44.00",
              code: "YR",
            },
            {
              amount: "3.00",
              code: "PZ",
            },
            {
              amount: "1.40",
              code: "TP",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "51",
            cabin: "ECONOMY",
            fareBasis: "QLUGP0RE",
            brandedFare: "ECLASSIC",
            class: "Q",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "06B",
                description: "50 PCT QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "52",
            cabin: "ECONOMY",
            fareBasis: "QLUGP0RE",
            brandedFare: "ECLASSIC",
            class: "Q",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "06B",
                description: "50 PCT QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "140",
            cabin: "ECONOMY",
            fareBasis: "NLR1R1RE",
            brandedFare: "ECLASSIC",
            class: "N",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "06B",
                description: "50 PCT QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "141",
            cabin: "ECONOMY",
            fareBasis: "NLR1R1RE",
            brandedFare: "ECLASSIC",
            class: "N",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "06B",
                description: "50 PCT QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "3",
    source: "GDS",
    instantTicketingRequired: false,
    paymentCardRequired: false,
    lastTicketingDate: "2026-06-08",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2026-06-08T01:35:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-08T06:40:00",
            },
            carrierCode: "QR",
            number: "1392",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H5M",
            id: "51",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-08T07:55:00",
            },
            arrival: {
              iataCode: "DXB",
              at: "2026-06-08T10:15:00",
            },
            carrierCode: "QR",
            number: "1006",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H20M",
            id: "52",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "DXB",
              terminal: "1",
              at: "2026-06-18T05:50:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-18T06:05:00",
            },
            carrierCode: "QR",
            number: "1003",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H15M",
            id: "140",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-18T10:00:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2026-06-18T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H30M",
            id: "141",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "591.60",
      base: "181.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "591.60",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
      refundableFare: false,
      noRestrictionFare: false,
      noPenaltyFare: false,
    },
    validatingAirlineCodes: ["QR"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "USD",
          total: "591.60",
          base: "181.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "13.60",
              code: "F6",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "20.40",
              code: "AE",
            },
            {
              amount: "40.00",
              code: "UL",
            },
            {
              amount: "5.40",
              code: "R9",
            },
            {
              amount: "204.00",
              code: "YQ",
            },
            {
              amount: "2.80",
              code: "ZR",
            },
            {
              amount: "44.00",
              code: "YR",
            },
            {
              amount: "3.00",
              code: "PZ",
            },
            {
              amount: "1.40",
              code: "TP",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "51",
            cabin: "ECONOMY",
            fareBasis: "SLR1R1SE",
            brandedFare: "ECONVENIEN",
            class: "S",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "06C",
                description: "75 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "52",
            cabin: "ECONOMY",
            fareBasis: "SLR1R1SE",
            brandedFare: "ECONVENIEN",
            class: "S",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "06C",
                description: "75 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "140",
            cabin: "ECONOMY",
            fareBasis: "SLR1R1SE",
            brandedFare: "ECONVENIEN",
            class: "S",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "06C",
                description: "75 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "141",
            cabin: "ECONOMY",
            fareBasis: "SLR1R1SE",
            brandedFare: "ECONVENIEN",
            class: "S",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "06C",
                description: "75 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "4",
    source: "GDS",
    instantTicketingRequired: false,
    paymentCardRequired: false,
    lastTicketingDate: "2026-06-08",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2026-06-08T01:35:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-08T06:40:00",
            },
            carrierCode: "QR",
            number: "1392",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H5M",
            id: "51",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-08T07:55:00",
            },
            arrival: {
              iataCode: "DXB",
              at: "2026-06-08T10:15:00",
            },
            carrierCode: "QR",
            number: "1006",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H20M",
            id: "52",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "DXB",
              terminal: "1",
              at: "2026-06-18T05:50:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-18T06:05:00",
            },
            carrierCode: "QR",
            number: "1003",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H15M",
            id: "140",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-18T10:00:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2026-06-18T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H30M",
            id: "141",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "1276.60",
      base: "866.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "1276.60",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
      refundableFare: false,
      noRestrictionFare: false,
      noPenaltyFare: false,
    },
    validatingAirlineCodes: ["QR"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "USD",
          total: "1276.60",
          base: "866.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "13.60",
              code: "F6",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "20.40",
              code: "AE",
            },
            {
              amount: "40.00",
              code: "UL",
            },
            {
              amount: "5.40",
              code: "R9",
            },
            {
              amount: "204.00",
              code: "YQ",
            },
            {
              amount: "2.80",
              code: "ZR",
            },
            {
              amount: "44.00",
              code: "YR",
            },
            {
              amount: "3.00",
              code: "PZ",
            },
            {
              amount: "1.40",
              code: "TP",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "51",
            cabin: "ECONOMY",
            fareBasis: "HLR1R1FE",
            brandedFare: "ECOMFORT",
            class: "H",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "06D",
                description: "100 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
          {
            segmentId: "52",
            cabin: "ECONOMY",
            fareBasis: "HLR1R1FE",
            brandedFare: "ECOMFORT",
            class: "H",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "06D",
                description: "100 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
          {
            segmentId: "140",
            cabin: "ECONOMY",
            fareBasis: "HLR1R1FE",
            brandedFare: "ECOMFORT",
            class: "H",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "06D",
                description: "100 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
          {
            segmentId: "141",
            cabin: "ECONOMY",
            fareBasis: "HLR1R1FE",
            brandedFare: "ECOMFORT",
            class: "H",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P23",
                description: "CHECKED BAG 2 PCS 23 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB1",
                description: "CABIN BAG 1 PIECE 7 KG",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "06D",
                description: "100 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "5",
    source: "GDS",
    instantTicketingRequired: false,
    paymentCardRequired: false,
    lastTicketingDate: "2026-02-28",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2026-06-08T01:35:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-08T06:40:00",
            },
            carrierCode: "QR",
            number: "1392",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H5M",
            id: "51",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-08T07:55:00",
            },
            arrival: {
              iataCode: "DXB",
              at: "2026-06-08T10:15:00",
            },
            carrierCode: "QR",
            number: "1006",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H20M",
            id: "52",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "DXB",
              terminal: "1",
              at: "2026-06-18T05:50:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-18T06:05:00",
            },
            carrierCode: "QR",
            number: "1003",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H15M",
            id: "140",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-18T10:00:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2026-06-18T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H30M",
            id: "141",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "2075.60",
      base: "913.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "2075.60",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
      refundableFare: false,
      noRestrictionFare: false,
      noPenaltyFare: false,
    },
    validatingAirlineCodes: ["QR"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "USD",
          total: "2075.60",
          base: "913.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "13.60",
              code: "F6",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "20.40",
              code: "AE",
            },
            {
              amount: "40.00",
              code: "UL",
            },
            {
              amount: "5.40",
              code: "R9",
            },
            {
              amount: "936.00",
              code: "YQ",
            },
            {
              amount: "2.80",
              code: "ZR",
            },
            {
              amount: "64.00",
              code: "YR",
            },
            {
              amount: "3.00",
              code: "PZ",
            },
            {
              amount: "1.40",
              code: "TP",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "51",
            cabin: "BUSINESS",
            fareBasis: "RJUGP0RE",
            brandedFare: "BCLASSIC",
            class: "R",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06R",
                description: "125 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "52",
            cabin: "FIRST",
            fareBasis: "RJUGP0RE",
            brandedFare: "BCLASSIC",
            class: "A",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06R",
                description: "125 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "140",
            cabin: "FIRST",
            fareBasis: "RJUGP0RE",
            brandedFare: "BCLASSIC",
            class: "A",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06R",
                description: "125 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "141",
            cabin: "BUSINESS",
            fareBasis: "RJUGP0RE",
            brandedFare: "BCLASSIC",
            class: "R",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06R",
                description: "125 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: true,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "6",
    source: "GDS",
    instantTicketingRequired: false,
    paymentCardRequired: false,
    lastTicketingDate: "2026-06-08",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2026-06-08T01:35:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-08T06:40:00",
            },
            carrierCode: "QR",
            number: "1392",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H5M",
            id: "51",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-08T07:55:00",
            },
            arrival: {
              iataCode: "DXB",
              at: "2026-06-08T10:15:00",
            },
            carrierCode: "QR",
            number: "1006",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H20M",
            id: "52",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "DXB",
              terminal: "1",
              at: "2026-06-18T05:50:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-18T06:05:00",
            },
            carrierCode: "QR",
            number: "1003",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H15M",
            id: "140",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-18T10:00:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2026-06-18T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H30M",
            id: "141",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "2282.60",
      base: "1120.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "2282.60",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
      refundableFare: false,
      noRestrictionFare: false,
      noPenaltyFare: false,
    },
    validatingAirlineCodes: ["QR"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "USD",
          total: "2282.60",
          base: "1120.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "13.60",
              code: "F6",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "20.40",
              code: "AE",
            },
            {
              amount: "40.00",
              code: "UL",
            },
            {
              amount: "5.40",
              code: "R9",
            },
            {
              amount: "936.00",
              code: "YQ",
            },
            {
              amount: "2.80",
              code: "ZR",
            },
            {
              amount: "64.00",
              code: "YR",
            },
            {
              amount: "3.00",
              code: "PZ",
            },
            {
              amount: "1.40",
              code: "TP",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "51",
            cabin: "BUSINESS",
            fareBasis: "IJR1R1SE",
            brandedFare: "BCOMFORT",
            class: "I",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06G",
                description: "175 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "52",
            cabin: "FIRST",
            fareBasis: "IJR1R1SE",
            brandedFare: "BCOMFORT",
            class: "A",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06G",
                description: "175 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "140",
            cabin: "FIRST",
            fareBasis: "IJR1R1SE",
            brandedFare: "BCOMFORT",
            class: "A",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06G",
                description: "175 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
          {
            segmentId: "141",
            cabin: "BUSINESS",
            fareBasis: "IJR1R1SE",
            brandedFare: "BCOMFORT",
            class: "I",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06G",
                description: "175 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: true,
                amenityType: "BRANDED_FARES",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "7",
    source: "GDS",
    instantTicketingRequired: false,
    paymentCardRequired: false,
    lastTicketingDate: "2026-06-08",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2026-06-08T01:35:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-08T06:40:00",
            },
            carrierCode: "QR",
            number: "1392",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H5M",
            id: "51",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-08T07:55:00",
            },
            arrival: {
              iataCode: "DXB",
              at: "2026-06-08T10:15:00",
            },
            carrierCode: "QR",
            number: "1006",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H20M",
            id: "52",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "DXB",
              terminal: "1",
              at: "2026-06-18T05:50:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-18T06:05:00",
            },
            carrierCode: "QR",
            number: "1003",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H15M",
            id: "140",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-18T10:00:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2026-06-18T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H30M",
            id: "141",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "6916.60",
      base: "5754.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "6916.60",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
      refundableFare: false,
      noRestrictionFare: false,
      noPenaltyFare: false,
    },
    validatingAirlineCodes: ["QR"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "USD",
          total: "6916.60",
          base: "5754.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "13.60",
              code: "F6",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "20.40",
              code: "AE",
            },
            {
              amount: "40.00",
              code: "UL",
            },
            {
              amount: "5.40",
              code: "R9",
            },
            {
              amount: "936.00",
              code: "YQ",
            },
            {
              amount: "2.80",
              code: "ZR",
            },
            {
              amount: "64.00",
              code: "YR",
            },
            {
              amount: "3.00",
              code: "PZ",
            },
            {
              amount: "1.40",
              code: "TP",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "51",
            cabin: "BUSINESS",
            fareBasis: "CJR1R1FE",
            brandedFare: "BELITE",
            class: "C",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06N",
                description: "200 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
          {
            segmentId: "52",
            cabin: "FIRST",
            fareBasis: "CJR1R1FE",
            brandedFare: "BELITE",
            class: "F",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06N",
                description: "200 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
          {
            segmentId: "140",
            cabin: "FIRST",
            fareBasis: "CJR1R1FE",
            brandedFare: "BELITE",
            class: "F",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06N",
                description: "200 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
          {
            segmentId: "141",
            cabin: "BUSINESS",
            fareBasis: "CJR1R1FE",
            brandedFare: "BELITE",
            class: "C",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "06N",
                description: "200 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "flight-offer",
    id: "8",
    source: "GDS",
    instantTicketingRequired: false,
    paymentCardRequired: false,
    lastTicketingDate: "2026-06-08",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2026-06-08T01:35:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-08T06:40:00",
            },
            carrierCode: "QR",
            number: "1392",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H5M",
            id: "51",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-08T07:55:00",
            },
            arrival: {
              iataCode: "DXB",
              at: "2026-06-08T10:15:00",
            },
            carrierCode: "QR",
            number: "1006",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H20M",
            id: "52",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "DXB",
              terminal: "1",
              at: "2026-06-18T05:50:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2026-06-18T06:05:00",
            },
            carrierCode: "QR",
            number: "1003",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT1H15M",
            id: "140",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2026-06-18T10:00:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2026-06-18T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H30M",
            id: "141",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "9443.60",
      base: "8261.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "9443.60",
    },
    pricingOptions: {
      fareType: ["PUBLISHED"],
      includedCheckedBagsOnly: true,
      refundableFare: false,
      noRestrictionFare: false,
      noPenaltyFare: false,
    },
    validatingAirlineCodes: ["QR"],
    travelerPricings: [
      {
        travelerId: "1",
        fareOption: "STANDARD",
        travelerType: "ADULT",
        price: {
          currency: "USD",
          total: "9443.60",
          base: "8261.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "13.60",
              code: "F6",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "20.40",
              code: "AE",
            },
            {
              amount: "40.00",
              code: "UL",
            },
            {
              amount: "5.40",
              code: "R9",
            },
            {
              amount: "936.00",
              code: "YQ",
            },
            {
              amount: "2.80",
              code: "ZR",
            },
            {
              amount: "84.00",
              code: "YR",
            },
            {
              amount: "3.00",
              code: "PZ",
            },
            {
              amount: "1.40",
              code: "TP",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "51",
            cabin: "BUSINESS",
            fareBasis: "FJR1RMFE",
            brandedFare: "FELITE",
            class: "J",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "MI3",
                description: "300 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
          {
            segmentId: "52",
            cabin: "FIRST",
            fareBasis: "FJR1RMFE",
            brandedFare: "FELITE",
            class: "F",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "MI3",
                description: "300 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
          {
            segmentId: "140",
            cabin: "FIRST",
            fareBasis: "FJR1RMFE",
            brandedFare: "FELITE",
            class: "F",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "MI3",
                description: "300 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
          {
            segmentId: "141",
            cabin: "BUSINESS",
            fareBasis: "FJR1RMFE",
            brandedFare: "FELITE",
            class: "J",
            includedCheckedBags: {
              quantity: 2,
            },
            amenities: [
              {
                code: "P32",
                description: "CHECKED BAG 2 PCS 32 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "CB2",
                description: "CABIN BAG 2 PIECES 7 KG EACH",
                isChargeable: false,
                amenityType: "BAGGAGE",
              },
              {
                code: "0B5",
                description: "PRE RESERVED SEAT ASSIGNMENT",
                isChargeable: false,
                amenityType: "PRE_RESERVED_SEAT",
              },
              {
                code: "05Z",
                description: "PREMIUM SEAT",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0BX",
                description: "QR LOUNGE ACCESS OS",
                isChargeable: false,
                amenityType: "LOUNGE",
              },
              {
                code: "MI3",
                description: "300 PCT  QMILES ACCUMULATION",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "056",
                description: "REFUNDABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "059",
                description: "CHANGEABLE TICKET",
                isChargeable: false,
                amenityType: "BRANDED_FARES",
              },
              {
                code: "0B3",
                description: "MEAL BEVERAGE",
                isChargeable: false,
                amenityType: "MEAL",
              },
            ],
          },
        ],
      },
    ],
  },
];
