{
  "type": "flight-offers-pricing",
  "flightOffers": [
    {
      "type": "flight-offer",
      "id": "1",
      "source": "GDS",
      "instantTicketingRequired": false,
      "nonHomogeneous": false,
      "paymentCardRequired": false,
      "lastTicketingDate": "2026-02-28",
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
              "operating": {
                "carrierCode": "QR"
              },
              "duration": "PT5H5M",
              "id": "51",
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
              "operating": {
                "carrierCode": "QR"
              },
              "duration": "PT1H20M",
              "id": "52",
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
              "operating": {
                "carrierCode": "QR"
              },
              "duration": "PT1H15M",
              "id": "140",
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
              "operating": {
                "carrierCode": "QR"
              },
              "duration": "PT5H30M",
              "id": "141",
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
        "fees": [
          {
            "amount": "0.00",
            "type": "SUPPLIER"
          },
          {
            "amount": "0.00",
            "type": "TICKETING"
          },
          {
            "amount": "0.00",
            "type": "FORM_OF_PAYMENT"
          }
        ],
        "grandTotal": "491.60",
        "billingCurrency": "USD"
      },
      "pricingOptions": {
        "fareType": [
          "PUBLISHED"
        ],
        "includedCheckedBagsOnly": true
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
                "amount": "33.00",
                "code": "QA"
              },
              {
                "amount": "13.60",
                "code": "F6"
              },
              {
                "amount": "10.00",
                "code": "UG"
              },
              {
                "amount": "20.40",
                "code": "AE"
              },
              {
                "amount": "40.00",
                "code": "UL"
              },
              {
                "amount": "5.40",
                "code": "R9"
              },
              {
                "amount": "204.00",
                "code": "YQ"
              },
              {
                "amount": "2.80",
                "code": "ZR"
              },
              {
                "amount": "44.00",
                "code": "YR"
              },
              {
                "amount": "3.00",
                "code": "PZ"
              },
              {
                "amount": "1.40",
                "code": "TP"
              },
              {
                "amount": "33.00",
                "code": "G4"
              }
            ],
            "refundableTaxes": "420.60"
          },
          "fareDetailsBySegment": [
            {
              "segmentId": "51",
              "cabin": "ECONOMY",
              "fareBasis": "QLUGP0RE",
              "brandedFare": "ECLASSIC",
              "class": "Q",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "52",
              "cabin": "ECONOMY",
              "fareBasis": "QLUGP0RE",
              "brandedFare": "ECLASSIC",
              "class": "Q",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "140",
              "cabin": "ECONOMY",
              "fareBasis": "NLR1R1RE",
              "brandedFare": "ECLASSIC",
              "class": "N",
              "includedCheckedBags": {
                "quantity": 2
              }
            },
            {
              "segmentId": "141",
              "cabin": "ECONOMY",
              "fareBasis": "NLR1R1RE",
              "brandedFare": "ECLASSIC",
              "class": "N",
              "includedCheckedBags": {
                "quantity": 2
              }
            }
          ]
        }
      ]\
    }
  ],
  "bookingRequirements": {
    "emailAddressRequired": true,
    "mobilePhoneNumberRequired": true,
    "travelerRequirements": [
      {
        "travelerId": "1",
        "genderRequired": true,
        "documentRequired": true,
        "dateOfBirthRequired": true,
        "redressRequiredIfAny": true,
        "residenceRequired": true
      }
    ]
  }
}