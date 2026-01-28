{
  "type": "flight-order",
  "id": "eJzTd9c3NzE28vcBAAnLAhE",
  "queuingOfficeId": "NCE4D31SB",
  "associatedRecords": [
    {
      "reference": "7432OL",
      "originSystemCode": "QR",
      "flightOfferId": "1"
    },
    {
      "reference": "7432OL",
      "creationDate": "2026-01-28T15:26:00",
      "originSystemCode": "GDS",
      "flightOfferId": "1"
    }
  ],
  "flightOffers": [
    {
      "type": "flight-offer",
      "id": "1",
      "source": "GDS",
      "nonHomogeneous": false,
      "lastTicketingDate": "2026-01-29",
      "itineraries": [
        {
          "segments": [
            {
              "departure": {
                "iataCode": "EBB",
                "at": "2026-06-08T01:35:00"
              },
              "arrival": {
                "iataCode": "DOH",
                "at": "2026-06-08T06:40:00"
              },
              "carrierCode": "QR",
              "number": "1392",
              "aircraft": {
                "code": "788"
              },
              "duration": "PT5H5M",
              "bookingStatus": "CONFIRMED",
              "segmentType": "ACTIVE",
              "isFlown": false,
              "id": "1",
              "numberOfStops": 0,
              "co2Emissions": [
                {
                  "weight": 218,
                  "weightUnit": "KG",
                  "cabin": "ECONOMY"
                }
              ]
            },
            {
              "departure": {
                "iataCode": "DOH",
                "at": "2026-06-08T07:55:00"
              },
              "arrival": {
                "iataCode": "DXB",
                "terminal": "1",
                "at": "2026-06-08T10:15:00"
              },
              "carrierCode": "QR",
              "number": "1006",
              "aircraft": {
                "code": "359"
              },
              "duration": "PT1H20M",
              "bookingStatus": "CONFIRMED",
              "segmentType": "ACTIVE",
              "isFlown": false,
              "id": "2",
              "numberOfStops": 0,
              "co2Emissions": [
                {
                  "weight": 36,
                  "weightUnit": "KG",
                  "cabin": "ECONOMY"
                }
              ]
            }
          ]
        },
        {
          "segments": [
            {
              "departure": {
                "iataCode": "DXB",
                "terminal": "1",
                "at": "2026-06-18T05:50:00"
              },
              "arrival": {
                "iataCode": "DOH",
                "at": "2026-06-18T06:05:00"
              },
              "carrierCode": "QR",
              "number": "1003",
              "aircraft": {
                "code": "359"
              },
              "duration": "PT1H15M",
              "bookingStatus": "CONFIRMED",
              "segmentType": "ACTIVE",
              "isFlown": false,
              "id": "3",
              "numberOfStops": 0,
              "co2Emissions": [
                {
                  "weight": 36,
                  "weightUnit": "KG",
                  "cabin": "ECONOMY"
                }
              ]
            },
            {
              "departure": {
                "iataCode": "DOH",
                "at": "2026-06-18T10:00:00"
              },
              "arrival": {
                "iataCode": "EBB",
                "at": "2026-06-18T15:30:00"
              },
              "carrierCode": "QR",
              "number": "1383",
              "aircraft": {
                "code": "788"
              },
              "duration": "PT5H30M",
              "bookingStatus": "CONFIRMED",
              "segmentType": "ACTIVE",
              "isFlown": false,
              "id": "4",
              "numberOfStops": 0,
              "co2Emissions": [
                {
                  "weight": 218,
                  "weightUnit": "KG",
                  "cabin": "ECONOMY"
                }
              ]
            }
          ]
        }
      ],
      "price": {
        "currency": "USD",
        "total": "491.60",
        "base": "81.00",
        "grandTotal": "491.60"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ]
      },
      "validatingAirlineCodes": [
        "QR"
      ],
      "travelerPricings": [
        {
          "travelerId": "1",
          "fareOption": "STANDARD",
          "travelerType": "ADULT",
          "price": {
            "currency": "USD",
            "total": "491.60",
            "base": "81.00",
            "taxes": [
              {
                "amount": "20.40",
                "code": "AE"
              },
              {
                "amount": "13.60",
                "code": "F6"
              },
              {
                "amount": "33.00",
                "code": "G4"
              },
              {
                "amount": "3.00",
                "code": "PZ"
              },
              {
                "amount": "33.00",
                "code": "QA"
              },
              {
                "amount": "5.40",
                "code": "R9"
              },
              {
                "amount": "1.40",
                "code": "TP"
              },
              {
                "amount": "10.00",
                "code": "UG"
              },
              {
                "amount": "40.00",
                "code": "UL"
              },
              {
                "amount": "204.00",
                "code": "YQ"
              },
              {
                "amount": "44.00",
                "code": "YR"
              },
              {
                "amount": "2.80",
                "code": "ZR"
              }
            ]
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "1",
              "cabin": "ECONOMY",
              "fareBasis": "QLUGP0RE",
              "class": "Q",
              "includedCheckedBags": {
                "quantity": 2
              },
              "mealServices": [
                {
                  "label": "Meal"
                }
              ]
            },
            {
              "segmentId": "2",
              "cabin": "ECONOMY",
              "fareBasis": "QLUGP0RE",
              "class": "Q",
              "includedCheckedBags": {
                "quantity": 2
              },
              "mealServices": [
                {
                  "label": "Meal"
                }
              ]
            },
            {
              "segmentId": "3",
              "cabin": "ECONOMY",
              "fareBasis": "NLR1R1RE",
              "class": "N",
              "includedCheckedBags": {
                "quantity": 2
              },
              "mealServices": [
                {
                  "label": "Meal"
                }
              ]
            },
            {
              "segmentId": "4",
              "cabin": "ECONOMY",
              "fareBasis": "NLR1R1RE",
              "class": "N",
              "includedCheckedBags": {
                "quantity": 2
              },
              "mealServices": [
                {
                  "label": "Meal"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "travelers": [
    {
      "id": "1",
      "dateOfBirth": "1999-11-11",
      "gender": "MALE",
      "name": {
        "firstName": "JORGE",
        "lastName": "GONZALES"
      },
      "documents": [
        {
          "number": "00000000",
          "expiryDate": "1976-04-14",
          "issuanceCountry": "UG",
          "nationality": "UG",
          "documentType": "PASSPORT",
          "holder": true
        }
      ],
      "contact": {
        "purpose": "STANDARD",
        "phones": [
          {
            "deviceType": "MOBILE",
            "countryCallingCode": "256",
            "number": "781372789"
          }
        ],
        "emailAddress": "JORGE.GONZALES833@TELEFONICA.ES"
      }
    }
  ],
  "remarks": {
    "general": [
      {
        "subType": "GENERAL_MISCELLANEOUS",
        "text": "PRICING ENTRY FXP/SBF/FF-ECLASSIC/R,P,VC-QR,FC-USD/P1",
        "flightOfferIds": [
          "1"
        ]
      }
    ],
    "airline": [
      {
        "subType": "OTHER_SERVICE",
        "airlineCode": "1A",
        "text": "429454505745 - FARE RULE OVERRIDES TKT DEADLINE IF MORE RESTRICTIVE",
        "flightOfferIds": [
          "1"
        ]
      }
    ]
  },
  "ticketingAgreement": {
    "option": "CONFIRM"
  },
  "contacts": [
    {
      "purpose": "STANDARD"
    }
  ]
}