const brandedUpSell = [
  {
    type: "flight-offer",
    id: "2",
    source: "GDS",
    instantTicketingRequired: false,
    paymentCardRequired: false,
    lastTicketingDate: "2025-11-04",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2025-11-04T17:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-04T22:20:00",
            },
            carrierCode: "QR",
            number: "1384",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H20M",
            id: "1",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-05T01:25:00",
            },
            arrival: {
              iataCode: "CDG",
              at: "2025-11-05T06:35:00",
            },
            carrierCode: "QR",
            number: "41",
            aircraft: {
              code: "77W",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT7H10M",
            id: "2",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "CDG",
              terminal: "1",
              at: "2025-11-08T22:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-09T06:20:00",
            },
            carrierCode: "QR",
            number: "38",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT6H20M",
            id: "3",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-09T09:45:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2025-11-09T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H45M",
            id: "4",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "728.40",
      base: "148.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "728.40",
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
          total: "728.40",
          base: "148.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "45.60",
              code: "O4",
            },
            {
              amount: "35.00",
              code: "QX",
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
              amount: "306.00",
              code: "YQ",
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
              amount: "25.40",
              code: "FR",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "1",
            cabin: "ECONOMY",
            fareBasis: "NLR1R1RX",
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
            segmentId: "2",
            cabin: "ECONOMY",
            fareBasis: "NLR1R1RX",
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
            segmentId: "3",
            cabin: "ECONOMY",
            fareBasis: "NLR1R1RX",
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
            segmentId: "4",
            cabin: "ECONOMY",
            fareBasis: "NLR1R1RX",
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
    lastTicketingDate: "2025-11-04",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2025-11-04T17:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-04T22:20:00",
            },
            carrierCode: "QR",
            number: "1384",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H20M",
            id: "1",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-05T01:25:00",
            },
            arrival: {
              iataCode: "CDG",
              at: "2025-11-05T06:35:00",
            },
            carrierCode: "QR",
            number: "41",
            aircraft: {
              code: "77W",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT7H10M",
            id: "2",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "CDG",
              terminal: "1",
              at: "2025-11-08T22:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-09T06:20:00",
            },
            carrierCode: "QR",
            number: "38",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT6H20M",
            id: "3",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-09T09:45:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2025-11-09T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H45M",
            id: "4",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "806.40",
      base: "226.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "806.40",
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
          total: "806.40",
          base: "226.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "45.60",
              code: "O4",
            },
            {
              amount: "35.00",
              code: "QX",
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
              amount: "306.00",
              code: "YQ",
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
              amount: "25.40",
              code: "FR",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "1",
            cabin: "ECONOMY",
            fareBasis: "SLR1R1SX",
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
                description: "75 PCT QMILES ACCUMULATION",
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
            segmentId: "2",
            cabin: "ECONOMY",
            fareBasis: "SLR1R1SX",
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
                description: "75 PCT QMILES ACCUMULATION",
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
            segmentId: "3",
            cabin: "ECONOMY",
            fareBasis: "SLR1R1SX",
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
                description: "75 PCT QMILES ACCUMULATION",
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
            segmentId: "4",
            cabin: "ECONOMY",
            fareBasis: "SLR1R1SX",
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
                description: "75 PCT QMILES ACCUMULATION",
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
    lastTicketingDate: "2025-11-04",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2025-11-04T17:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-04T22:20:00",
            },
            carrierCode: "QR",
            number: "1384",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H20M",
            id: "1",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-05T01:25:00",
            },
            arrival: {
              iataCode: "CDG",
              at: "2025-11-05T06:35:00",
            },
            carrierCode: "QR",
            number: "41",
            aircraft: {
              code: "77W",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT7H10M",
            id: "2",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "CDG",
              terminal: "1",
              at: "2025-11-08T22:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-09T06:20:00",
            },
            carrierCode: "QR",
            number: "38",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT6H20M",
            id: "3",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-09T09:45:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2025-11-09T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H45M",
            id: "4",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "1491.40",
      base: "911.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "1491.40",
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
          total: "1491.40",
          base: "911.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "45.60",
              code: "O4",
            },
            {
              amount: "35.00",
              code: "QX",
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
              amount: "306.00",
              code: "YQ",
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
              amount: "25.40",
              code: "FR",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "1",
            cabin: "ECONOMY",
            fareBasis: "HLR1R1FX",
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
                description: "100 PCT QMILES ACCUMULATION",
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
            segmentId: "2",
            cabin: "ECONOMY",
            fareBasis: "HLR1R1FX",
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
                description: "100 PCT QMILES ACCUMULATION",
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
            segmentId: "3",
            cabin: "ECONOMY",
            fareBasis: "HLR1R1FX",
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
                description: "100 PCT QMILES ACCUMULATION",
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
            segmentId: "4",
            cabin: "ECONOMY",
            fareBasis: "HLR1R1FX",
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
                description: "100 PCT QMILES ACCUMULATION",
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
    lastTicketingDate: "2025-11-04",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2025-11-04T17:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-04T22:20:00",
            },
            carrierCode: "QR",
            number: "1384",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H20M",
            id: "1",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-05T01:25:00",
            },
            arrival: {
              iataCode: "CDG",
              at: "2025-11-05T06:35:00",
            },
            carrierCode: "QR",
            number: "41",
            aircraft: {
              code: "77W",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT7H10M",
            id: "2",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "CDG",
              terminal: "1",
              at: "2025-11-08T22:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-09T06:20:00",
            },
            carrierCode: "QR",
            number: "38",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT6H20M",
            id: "3",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-09T09:45:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2025-11-09T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H45M",
            id: "4",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "3058.60",
      base: "1437.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "3058.60",
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
          total: "3058.60",
          base: "1437.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "136.80",
              code: "O4",
            },
            {
              amount: "35.00",
              code: "QX",
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
              amount: "1236.00",
              code: "YQ",
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
              amount: "25.40",
              code: "FR",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "1",
            cabin: "BUSINESS",
            fareBasis: "IJR1R1SX",
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
                description: "175 PCT QMILES ACCUMULATION",
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
            segmentId: "2",
            cabin: "BUSINESS",
            fareBasis: "IJR1R1SX",
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
                description: "175 PCT QMILES ACCUMULATION",
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
            segmentId: "3",
            cabin: "BUSINESS",
            fareBasis: "IJR1R1SX",
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
                description: "175 PCT QMILES ACCUMULATION",
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
            segmentId: "4",
            cabin: "BUSINESS",
            fareBasis: "IJR1R1SX",
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
                description: "175 PCT QMILES ACCUMULATION",
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
    id: "6",
    source: "GDS",
    instantTicketingRequired: false,
    paymentCardRequired: false,
    lastTicketingDate: "2025-11-04",
    itineraries: [
      {
        segments: [
          {
            departure: {
              iataCode: "EBB",
              at: "2025-11-04T17:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-04T22:20:00",
            },
            carrierCode: "QR",
            number: "1384",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H20M",
            id: "1",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-05T01:25:00",
            },
            arrival: {
              iataCode: "CDG",
              at: "2025-11-05T06:35:00",
            },
            carrierCode: "QR",
            number: "41",
            aircraft: {
              code: "77W",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT7H10M",
            id: "2",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
      {
        segments: [
          {
            departure: {
              iataCode: "CDG",
              terminal: "1",
              at: "2025-11-08T22:00:00",
            },
            arrival: {
              iataCode: "DOH",
              at: "2025-11-09T06:20:00",
            },
            carrierCode: "QR",
            number: "38",
            aircraft: {
              code: "359",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT6H20M",
            id: "3",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
          {
            departure: {
              iataCode: "DOH",
              at: "2025-11-09T09:45:00",
            },
            arrival: {
              iataCode: "EBB",
              at: "2025-11-09T15:30:00",
            },
            carrierCode: "QR",
            number: "1383",
            aircraft: {
              code: "788",
            },
            operating: {
              carrierCode: "QR",
            },
            duration: "PT5H45M",
            id: "4",
            numberOfStops: 0,
            blacklistedInEU: false,
          },
        ],
      },
    ],
    price: {
      currency: "USD",
      total: "5983.60",
      base: "4362.00",
      fees: [
        {
          amount: "0.00",
          type: "TICKETING",
        },
      ],
      grandTotal: "5983.60",
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
          total: "5983.60",
          base: "4362.00",
          taxes: [
            {
              amount: "33.00",
              code: "QA",
            },
            {
              amount: "10.00",
              code: "UG",
            },
            {
              amount: "136.80",
              code: "O4",
            },
            {
              amount: "35.00",
              code: "QX",
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
              amount: "1236.00",
              code: "YQ",
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
              amount: "25.40",
              code: "FR",
            },
            {
              amount: "33.00",
              code: "G4",
            },
          ],
        },
        fareDetailsBySegment: [
          {
            segmentId: "1",
            cabin: "BUSINESS",
            fareBasis: "CJR1R1FX",
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
                description: "200 PCT QMILES ACCUMULATION",
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
            segmentId: "2",
            cabin: "BUSINESS",
            fareBasis: "CJR1R1FX",
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
                description: "200 PCT QMILES ACCUMULATION",
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
            segmentId: "3",
            cabin: "BUSINESS",
            fareBasis: "CJR1R1FX",
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
                description: "200 PCT QMILES ACCUMULATION",
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
            segmentId: "4",
            cabin: "BUSINESS",
            fareBasis: "CJR1R1FX",
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
                description: "200 PCT QMILES ACCUMULATION",
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
