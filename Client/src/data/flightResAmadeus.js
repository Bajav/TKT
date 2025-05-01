const res =[
    {
    "type": "flight-offer",
    "id": "1",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT15H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T17:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-04T22:20:00"
    },
    "carrierCode": "QR",
    "number": "1384",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H20M",
    "id": "24",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-05T01:25:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T06:35:00"
    },
    "carrierCode": "QR",
    "number": "41",
    "aircraft": {
    "code": "77W"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT7H10M",
    "id": "25",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT15H30M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T22:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-09T06:20:00"
    },
    "carrierCode": "QR",
    "number": "38",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT6H20M",
    "id": "47",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-09T09:45:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T15:30:00"
    },
    "carrierCode": "QR",
    "number": "1383",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H45M",
    "id": "48",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "728.10",
    "base": "148.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "728.10"
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
    "total": "728.10",
    "base": "148.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "24",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "25",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "47",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "48",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "2",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT15H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T17:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-04T22:20:00"
    },
    "carrierCode": "QR",
    "number": "1384",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H20M",
    "id": "24",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-05T01:25:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T06:35:00"
    },
    "carrierCode": "QR",
    "number": "41",
    "aircraft": {
    "code": "77W"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT7H10M",
    "id": "25",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT21H30M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T16:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-09T00:20:00"
    },
    "carrierCode": "QR",
    "number": "44",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT6H20M",
    "id": "49",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-09T09:45:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T15:30:00"
    },
    "carrierCode": "QR",
    "number": "1383",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H45M",
    "id": "50",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "728.10",
    "base": "148.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "728.10"
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
    "total": "728.10",
    "base": "148.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "24",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "25",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "49",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "50",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "3",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT22H15M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T17:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-04T22:20:00"
    },
    "carrierCode": "QR",
    "number": "1384",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H20M",
    "id": "16",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-05T08:05:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T13:15:00"
    },
    "carrierCode": "QR",
    "number": "39",
    "aircraft": {
    "code": "388"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT7H10M",
    "id": "17",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT15H30M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T22:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-09T06:20:00"
    },
    "carrierCode": "QR",
    "number": "38",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT6H20M",
    "id": "47",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-09T09:45:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T15:30:00"
    },
    "carrierCode": "QR",
    "number": "1383",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H45M",
    "id": "48",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "728.10",
    "base": "148.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "728.10"
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
    "total": "728.10",
    "base": "148.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "16",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "17",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "47",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "48",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "4",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT22H15M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T17:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-04T22:20:00"
    },
    "carrierCode": "QR",
    "number": "1384",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H20M",
    "id": "16",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-05T08:05:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T13:15:00"
    },
    "carrierCode": "QR",
    "number": "39",
    "aircraft": {
    "code": "388"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT7H10M",
    "id": "17",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT21H30M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T16:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-09T00:20:00"
    },
    "carrierCode": "QR",
    "number": "44",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT6H20M",
    "id": "49",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-09T09:45:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T15:30:00"
    },
    "carrierCode": "QR",
    "number": "1383",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H45M",
    "id": "50",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "728.10",
    "base": "148.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "728.10"
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
    "total": "728.10",
    "base": "148.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "16",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "17",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "49",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "50",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "5",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT32H40M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T06:45:00"
    },
    "arrival": {
    "iataCode": "CAI",
    "terminal": "3",
    "at": "2025-11-04T11:05:00"
    },
    "carrierCode": "MS",
    "number": "835",
    "aircraft": {
    "code": "32N"
    },
    "operating": {
    "carrierCode": "MS"
    },
    "duration": "PT5H20M",
    "id": "26",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "CAI",
    "terminal": "3",
    "at": "2025-11-05T09:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T13:25:00"
    },
    "carrierCode": "MS",
    "number": "799",
    "aircraft": {
    "code": "789"
    },
    "operating": {
    "carrierCode": "MS"
    },
    "duration": "PT4H50M",
    "id": "27",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT27H15M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T22:00:00"
    },
    "arrival": {
    "iataCode": "CAI",
    "terminal": "3",
    "at": "2025-11-09T03:25:00"
    },
    "carrierCode": "MS",
    "number": "802",
    "aircraft": {
    "code": "321"
    },
    "operating": {
    "carrierCode": "MS"
    },
    "duration": "PT4H25M",
    "id": "45",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "CAI",
    "terminal": "3",
    "at": "2025-11-09T21:15:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-10T03:15:00"
    },
    "carrierCode": "MS",
    "number": "837",
    "aircraft": {
    "code": "32N"
    },
    "operating": {
    "carrierCode": "MS"
    },
    "duration": "PT5H",
    "id": "46",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "791.56",
    "base": "157.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "791.56",
    "additionalServices": [
    {
    "amount": "200.00",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "MS"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "791.56",
    "base": "157.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "26",
    "cabin": "ECONOMY",
    "fareBasis": "TNIUG",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "27",
    "cabin": "ECONOMY",
    "fareBasis": "TNIUG",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "45",
    "cabin": "ECONOMY",
    "fareBasis": "TNIUG",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "46",
    "cabin": "ECONOMY",
    "fareBasis": "TNIUG",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "6",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT13H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T23:55:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T06:50:00"
    },
    "carrierCode": "KL",
    "number": "539",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT8H55M",
    "id": "3",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T09:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T11:00:00"
    },
    "carrierCode": "KL",
    "number": "2003",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H25M",
    "id": "4",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:15:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T19:35:00"
    },
    "carrierCode": "AF",
    "number": "1440",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "51",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "52",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "823.00",
    "base": "322.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "823.00",
    "additionalServices": [
    {
    "amount": "79.60",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "823.00",
    "base": "322.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "3",
    "cabin": "ECONOMY",
    "fareBasis": "TRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "4",
    "cabin": "ECONOMY",
    "fareBasis": "TRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "51",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "52",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "7",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT13H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T23:55:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T06:50:00"
    },
    "carrierCode": "KL",
    "number": "539",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT8H55M",
    "id": "3",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T09:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T11:00:00"
    },
    "carrierCode": "KL",
    "number": "2003",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H25M",
    "id": "4",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H10M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:40:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T20:00:00"
    },
    "carrierCode": "AF",
    "number": "8318",
    "aircraft": {
    "code": "73H"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT1H20M",
    "id": "40",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "41",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "823.40",
    "base": "322.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "823.40",
    "additionalServices": [
    {
    "amount": "79.60",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "823.40",
    "base": "322.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "3",
    "cabin": "ECONOMY",
    "fareBasis": "TRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "4",
    "cabin": "ECONOMY",
    "fareBasis": "TRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "40",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "41",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "8",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT11H50M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "KQ",
    "number": "417",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "28",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:50:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-05T06:30:00"
    },
    "carrierCode": "KQ",
    "number": "112",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H40M",
    "id": "29",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT13H50M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-08T11:00:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-08T21:05:00"
    },
    "carrierCode": "KQ",
    "number": "113",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H5M",
    "id": "55",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-09T01:35:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T02:50:00"
    },
    "carrierCode": "KQ",
    "number": "418",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H15M",
    "id": "56",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "832.90",
    "base": "316.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "832.90"
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "KQ"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "832.90",
    "base": "316.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "28",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "29",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "55",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "56",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "9",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT16H10M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T16:20:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T17:30:00"
    },
    "carrierCode": "KQ",
    "number": "415",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "11",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:50:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-05T06:30:00"
    },
    "carrierCode": "KQ",
    "number": "112",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H40M",
    "id": "12",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT13H50M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-08T11:00:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-08T21:05:00"
    },
    "carrierCode": "KQ",
    "number": "113",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H5M",
    "id": "55",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-09T01:35:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T02:50:00"
    },
    "carrierCode": "KQ",
    "number": "418",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H15M",
    "id": "56",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "832.90",
    "base": "316.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "832.90"
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "KQ"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "832.90",
    "base": "316.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "11",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "12",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "55",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "56",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "10",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT11H50M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "KQ",
    "number": "417",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "28",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:50:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-05T06:30:00"
    },
    "carrierCode": "KQ",
    "number": "112",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H40M",
    "id": "29",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT20H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-08T11:00:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-08T21:05:00"
    },
    "carrierCode": "KQ",
    "number": "113",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H5M",
    "id": "38",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-09T07:45:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T09:05:00"
    },
    "carrierCode": "KQ",
    "number": "420",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H20M",
    "id": "39",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "832.90",
    "base": "316.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "832.90"
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "KQ"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "832.90",
    "base": "316.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "28",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "29",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "38",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "39",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "11",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT16H10M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T16:20:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T17:30:00"
    },
    "carrierCode": "KQ",
    "number": "415",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "11",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:50:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-05T06:30:00"
    },
    "carrierCode": "KQ",
    "number": "112",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H40M",
    "id": "12",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT20H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-08T11:00:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-08T21:05:00"
    },
    "carrierCode": "KQ",
    "number": "113",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H5M",
    "id": "38",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-09T07:45:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T09:05:00"
    },
    "carrierCode": "KQ",
    "number": "420",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H20M",
    "id": "39",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "832.90",
    "base": "316.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "832.90"
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "KQ"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "832.90",
    "base": "316.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "11",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "12",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "38",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "39",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "12",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT12H",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "AF",
    "number": "8074",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "1",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:30:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-05T06:40:00"
    },
    "carrierCode": "AF",
    "number": "815",
    "aircraft": {
    "code": "789"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT9H10M",
    "id": "2",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:15:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T19:35:00"
    },
    "carrierCode": "AF",
    "number": "1440",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "51",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "52",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "834.00",
    "base": "364.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "834.00",
    "additionalServices": [
    {
    "amount": "159.20",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "834.00",
    "base": "364.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "1",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "2",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "51",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "52",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "13",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT12H",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "AF",
    "number": "8074",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "1",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:30:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-05T06:40:00"
    },
    "carrierCode": "AF",
    "number": "815",
    "aircraft": {
    "code": "789"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT9H10M",
    "id": "2",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H10M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:40:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T20:00:00"
    },
    "carrierCode": "AF",
    "number": "8318",
    "aircraft": {
    "code": "73H"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT1H20M",
    "id": "40",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "41",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "834.40",
    "base": "364.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "834.40",
    "additionalServices": [
    {
    "amount": "159.20",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "834.40",
    "base": "364.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "1",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "2",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "40",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "41",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "14",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 4,
    "itineraries": [
    {
    "duration": "PT32H40M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T06:45:00"
    },
    "arrival": {
    "iataCode": "CAI",
    "terminal": "3",
    "at": "2025-11-04T11:05:00"
    },
    "carrierCode": "MS",
    "number": "835",
    "aircraft": {
    "code": "32N"
    },
    "operating": {
    "carrierCode": "MS"
    },
    "duration": "PT5H20M",
    "id": "26",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "CAI",
    "terminal": "3",
    "at": "2025-11-05T09:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T13:25:00"
    },
    "carrierCode": "MS",
    "number": "799",
    "aircraft": {
    "code": "789"
    },
    "operating": {
    "carrierCode": "MS"
    },
    "duration": "PT4H50M",
    "id": "27",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT13H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T14:50:00"
    },
    "arrival": {
    "iataCode": "CAI",
    "terminal": "3",
    "at": "2025-11-08T20:05:00"
    },
    "carrierCode": "MS",
    "number": "800",
    "aircraft": {
    "code": "789"
    },
    "operating": {
    "carrierCode": "MS"
    },
    "duration": "PT4H15M",
    "id": "36",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "CAI",
    "terminal": "3",
    "at": "2025-11-08T21:55:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T05:55:00"
    },
    "carrierCode": "MS",
    "number": "835",
    "aircraft": {
    "code": "32N"
    },
    "operating": {
    "carrierCode": "MS"
    },
    "duration": "PT7H",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT40M",
    "arrivalAt": "2025-11-09T03:15:00",
    "departureAt": "2025-11-09T03:55:00"
    }
    ],
    "id": "37",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "847.36",
    "base": "212.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "847.36"
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "MS"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "847.36",
    "base": "212.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "26",
    "cabin": "ECONOMY",
    "fareBasis": "TNIUG",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "27",
    "cabin": "ECONOMY",
    "fareBasis": "TNIUG",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "36",
    "cabin": "ECONOMY",
    "fareBasis": "SNIUG",
    "class": "S",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "37",
    "cabin": "ECONOMY",
    "fareBasis": "SNIUG",
    "class": "S",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "15",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT18H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T03:50:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T05:05:00"
    },
    "carrierCode": "KQ",
    "number": "419",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H15M",
    "id": "5",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T09:10:00"
    },
    "arrival": {
    "iataCode": "LHR",
    "terminal": "4",
    "at": "2025-11-04T15:30:00"
    },
    "carrierCode": "KQ",
    "number": "100",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT9H20M",
    "id": "6",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "LHR",
    "terminal": "4",
    "at": "2025-11-04T17:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-04T19:55:00"
    },
    "carrierCode": "KQ",
    "number": "3081",
    "aircraft": {
    "code": "223"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "7",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT13H50M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-08T11:00:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-08T21:05:00"
    },
    "carrierCode": "KQ",
    "number": "113",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H5M",
    "id": "55",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-09T01:35:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T02:50:00"
    },
    "carrierCode": "KQ",
    "number": "418",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H15M",
    "id": "56",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "863.30",
    "base": "316.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "863.30"
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "KQ"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "863.30",
    "base": "316.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "5",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "6",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "7",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "55",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "56",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "16",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT20H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T03:50:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T05:05:00"
    },
    "carrierCode": "KQ",
    "number": "419",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H15M",
    "id": "8",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T09:10:00"
    },
    "arrival": {
    "iataCode": "LHR",
    "terminal": "4",
    "at": "2025-11-04T15:30:00"
    },
    "carrierCode": "KQ",
    "number": "100",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT9H20M",
    "id": "9",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "LHR",
    "terminal": "4",
    "at": "2025-11-04T19:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-04T21:55:00"
    },
    "carrierCode": "KQ",
    "number": "3079",
    "aircraft": {
    "code": "223"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "10",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT13H50M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-08T11:00:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-08T21:05:00"
    },
    "carrierCode": "KQ",
    "number": "113",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H5M",
    "id": "55",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-09T01:35:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T02:50:00"
    },
    "carrierCode": "KQ",
    "number": "418",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H15M",
    "id": "56",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "863.30",
    "base": "316.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "863.30"
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "KQ"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "863.30",
    "base": "316.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "8",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "9",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "10",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "55",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "56",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "17",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT18H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T03:50:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T05:05:00"
    },
    "carrierCode": "KQ",
    "number": "419",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H15M",
    "id": "5",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T09:10:00"
    },
    "arrival": {
    "iataCode": "LHR",
    "terminal": "4",
    "at": "2025-11-04T15:30:00"
    },
    "carrierCode": "KQ",
    "number": "100",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT9H20M",
    "id": "6",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "LHR",
    "terminal": "4",
    "at": "2025-11-04T17:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-04T19:55:00"
    },
    "carrierCode": "KQ",
    "number": "3081",
    "aircraft": {
    "code": "223"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "7",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT20H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-08T11:00:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-08T21:05:00"
    },
    "carrierCode": "KQ",
    "number": "113",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H5M",
    "id": "38",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-09T07:45:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T09:05:00"
    },
    "carrierCode": "KQ",
    "number": "420",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H20M",
    "id": "39",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "863.30",
    "base": "316.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "863.30"
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "KQ"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "863.30",
    "base": "316.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "5",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "6",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "7",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "38",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "39",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "18",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT20H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T03:50:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T05:05:00"
    },
    "carrierCode": "KQ",
    "number": "419",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H15M",
    "id": "8",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T09:10:00"
    },
    "arrival": {
    "iataCode": "LHR",
    "terminal": "4",
    "at": "2025-11-04T15:30:00"
    },
    "carrierCode": "KQ",
    "number": "100",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT9H20M",
    "id": "9",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "LHR",
    "terminal": "4",
    "at": "2025-11-04T19:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-04T21:55:00"
    },
    "carrierCode": "KQ",
    "number": "3079",
    "aircraft": {
    "code": "223"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "10",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT20H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2E",
    "at": "2025-11-08T11:00:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-08T21:05:00"
    },
    "carrierCode": "KQ",
    "number": "113",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT8H5M",
    "id": "38",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-09T07:45:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T09:05:00"
    },
    "carrierCode": "KQ",
    "number": "420",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H20M",
    "id": "39",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "863.30",
    "base": "316.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "863.30"
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "KQ"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "863.30",
    "base": "316.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "8",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "9",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "10",
    "cabin": "ECONOMY",
    "fareBasis": "TLSRUG4",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "38",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    },
    {
    "segmentId": "39",
    "cabin": "ECONOMY",
    "fareBasis": "NLSRUG4",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    }
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "19",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 2,
    "itineraries": [
    {
    "duration": "PT14H55M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "KL",
    "number": "4144",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "30",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:59:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T07:10:00"
    },
    "carrierCode": "KL",
    "number": "566",
    "aircraft": {
    "code": "781"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT9H11M",
    "id": "31",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T08:20:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T09:35:00"
    },
    "carrierCode": "KL",
    "number": "1405",
    "aircraft": {
    "code": "73J"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT1H15M",
    "id": "32",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:15:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T19:35:00"
    },
    "carrierCode": "AF",
    "number": "1440",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "51",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "52",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "866.00",
    "base": "365.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "866.00",
    "additionalServices": [
    {
    "amount": "79.60",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "866.00",
    "base": "365.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "30",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "31",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "32",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "51",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "52",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "20",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 2,
    "itineraries": [
    {
    "duration": "PT16H20M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "KL",
    "number": "4144",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "18",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:59:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T07:10:00"
    },
    "carrierCode": "KL",
    "number": "566",
    "aircraft": {
    "code": "781"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT9H11M",
    "id": "19",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T09:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T11:00:00"
    },
    "carrierCode": "KL",
    "number": "2003",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H25M",
    "id": "20",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:15:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T19:35:00"
    },
    "carrierCode": "AF",
    "number": "1440",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "51",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "52",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "866.00",
    "base": "365.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "866.00",
    "additionalServices": [
    {
    "amount": "79.60",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "866.00",
    "base": "365.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "18",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "19",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "20",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "51",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "52",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "21",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 2,
    "itineraries": [
    {
    "duration": "PT16H20M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "AF",
    "number": "8074",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "21",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:59:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T07:10:00"
    },
    "carrierCode": "AF",
    "number": "5191",
    "aircraft": {
    "code": "781"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT9H11M",
    "id": "22",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T09:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T11:00:00"
    },
    "carrierCode": "AF",
    "number": "1241",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H25M",
    "id": "23",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:15:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T19:35:00"
    },
    "carrierCode": "AF",
    "number": "1440",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "51",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "52",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "866.00",
    "base": "365.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "866.00",
    "additionalServices": [
    {
    "amount": "159.20",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "866.00",
    "base": "365.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "21",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "22",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "23",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "51",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "52",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "22",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 2,
    "itineraries": [
    {
    "duration": "PT17H15M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "AF",
    "number": "8074",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "13",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:59:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T07:10:00"
    },
    "carrierCode": "AF",
    "number": "5191",
    "aircraft": {
    "code": "781"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT9H11M",
    "id": "14",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T10:30:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T11:55:00"
    },
    "carrierCode": "AF",
    "number": "1341",
    "aircraft": {
    "code": "223"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H25M",
    "id": "15",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:15:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T19:35:00"
    },
    "carrierCode": "AF",
    "number": "1440",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H20M",
    "id": "51",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "52",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "866.00",
    "base": "365.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "866.00",
    "additionalServices": [
    {
    "amount": "159.20",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "866.00",
    "base": "365.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "13",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "14",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "15",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "51",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "52",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "23",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 2,
    "itineraries": [
    {
    "duration": "PT14H55M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "KL",
    "number": "4144",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "30",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:59:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T07:10:00"
    },
    "carrierCode": "KL",
    "number": "566",
    "aircraft": {
    "code": "781"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT9H11M",
    "id": "31",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T08:20:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T09:35:00"
    },
    "carrierCode": "KL",
    "number": "1405",
    "aircraft": {
    "code": "73J"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT1H15M",
    "id": "32",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H10M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:40:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T20:00:00"
    },
    "carrierCode": "AF",
    "number": "8318",
    "aircraft": {
    "code": "73H"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT1H20M",
    "id": "40",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "41",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "866.40",
    "base": "365.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "866.40",
    "additionalServices": [
    {
    "amount": "79.60",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "866.40",
    "base": "365.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "30",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "31",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "32",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "40",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "41",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "24",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 2,
    "itineraries": [
    {
    "duration": "PT16H20M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "AF",
    "number": "8074",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "21",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:59:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T07:10:00"
    },
    "carrierCode": "AF",
    "number": "5191",
    "aircraft": {
    "code": "781"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT9H11M",
    "id": "22",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T09:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T11:00:00"
    },
    "carrierCode": "AF",
    "number": "1241",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H25M",
    "id": "23",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H10M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:40:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T20:00:00"
    },
    "carrierCode": "AF",
    "number": "8318",
    "aircraft": {
    "code": "73H"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT1H20M",
    "id": "40",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "41",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "866.40",
    "base": "365.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "866.40",
    "additionalServices": [
    {
    "amount": "159.20",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "866.40",
    "base": "365.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "21",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "22",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "23",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "40",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "41",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "25",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 2,
    "itineraries": [
    {
    "duration": "PT17H15M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T20:40:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-04T21:50:00"
    },
    "carrierCode": "AF",
    "number": "8074",
    "aircraft": {
    "code": "E90"
    },
    "operating": {
    "carrierCode": "KQ"
    },
    "duration": "PT1H10M",
    "id": "13",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2025-11-04T23:59:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T07:10:00"
    },
    "carrierCode": "AF",
    "number": "5191",
    "aircraft": {
    "code": "781"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT9H11M",
    "id": "14",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T10:30:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T11:55:00"
    },
    "carrierCode": "AF",
    "number": "1341",
    "aircraft": {
    "code": "223"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H25M",
    "id": "15",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT26H10M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T18:40:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T20:00:00"
    },
    "carrierCode": "AF",
    "number": "8318",
    "aircraft": {
    "code": "73H"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT1H20M",
    "id": "40",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-09T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T22:50:00"
    },
    "carrierCode": "AF",
    "number": "8251",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-09T19:35:00",
    "departureAt": "2025-11-09T20:45:00"
    }
    ],
    "id": "41",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "866.40",
    "base": "365.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "866.40",
    "additionalServices": [
    {
    "amount": "159.20",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "866.40",
    "base": "365.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "13",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "14",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "15",
    "cabin": "ECONOMY",
    "fareBasis": "NRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "40",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "41",
    "cabin": "ECONOMY",
    "fareBasis": "RRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "26",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT13H5M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T23:55:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-05T06:50:00"
    },
    "carrierCode": "KL",
    "number": "539",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT8H55M",
    "id": "3",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-05T09:35:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-05T11:00:00"
    },
    "carrierCode": "KL",
    "number": "2003",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H25M",
    "id": "4",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT13H40M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "2F",
    "at": "2025-11-08T07:10:00"
    },
    "arrival": {
    "iataCode": "AMS",
    "at": "2025-11-08T08:35:00"
    },
    "carrierCode": "KL",
    "number": "2002",
    "aircraft": {
    "code": "320"
    },
    "operating": {
    "carrierCode": "AF"
    },
    "duration": "PT1H25M",
    "id": "53",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "AMS",
    "at": "2025-11-08T10:05:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-08T22:50:00"
    },
    "carrierCode": "KL",
    "number": "537",
    "aircraft": {
    "code": "332"
    },
    "operating": {
    "carrierCode": "KL"
    },
    "duration": "PT10H45M",
    "stops": [
    {
    "iataCode": "KGL",
    "duration": "PT1H10M",
    "arrivalAt": "2025-11-08T19:35:00",
    "departureAt": "2025-11-08T20:45:00"
    }
    ],
    "id": "54",
    "numberOfStops": 1,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "934.00",
    "base": "433.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "934.00",
    "additionalServices": [
    {
    "amount": "159.20",
    "type": "CHECKED_BAGS"
    }
    ]
    },
    "pricingOptions": {
    "fareType": [
    "PUBLISHED"
    ],
    "includedCheckedBagsOnly": true
    },
    "validatingAirlineCodes": [
    "AF"
    ],
    "travelerPricings": [
    {
    "travelerId": "1",
    "fareOption": "STANDARD",
    "travelerType": "ADULT",
    "price": {
    "currency": "USD",
    "total": "934.00",
    "base": "433.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "3",
    "cabin": "ECONOMY",
    "fareBasis": "TRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "T",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "4",
    "cabin": "ECONOMY",
    "fareBasis": "TRL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "53",
    "cabin": "ECONOMY",
    "fareBasis": "ERL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "L",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "54",
    "cabin": "ECONOMY",
    "fareBasis": "ERL0JBRA",
    "brandedFare": "LIGHTBAG",
    "brandedFareLabel": "ECONOMY LIGHTBAG",
    "class": "E",
    "includedCheckedBags": {
    "quantity": 1
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "SNACK",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "SEAT SELECTION",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MILEAGE ACCRUAL",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "UPGRADE ELIGIBILITY",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "27",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT15H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T17:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-04T22:20:00"
    },
    "carrierCode": "QR",
    "number": "1384",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H20M",
    "id": "24",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-05T01:25:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T06:35:00"
    },
    "carrierCode": "QR",
    "number": "41",
    "aircraft": {
    "code": "77W"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT7H10M",
    "id": "25",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT17H15M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T16:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-09T00:20:00"
    },
    "carrierCode": "QR",
    "number": "44",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT6H20M",
    "id": "42",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-09T02:25:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-09T07:35:00"
    },
    "carrierCode": "QR",
    "number": "1335",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H10M",
    "id": "43",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1B",
    "at": "2025-11-09T10:00:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T11:15:00"
    },
    "carrierCode": "UR",
    "number": "203",
    "aircraft": {
    "code": "CR9"
    },
    "operating": {
    "carrierCode": "UR"
    },
    "duration": "PT1H15M",
    "id": "44",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "938.10",
    "base": "358.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "938.10"
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
    "total": "938.10",
    "base": "358.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "24",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "25",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "42",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "43",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "44",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "Q",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "28",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT15H35M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T17:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-04T22:20:00"
    },
    "carrierCode": "QR",
    "number": "1384",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H20M",
    "id": "24",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-05T01:25:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T06:35:00"
    },
    "carrierCode": "QR",
    "number": "41",
    "aircraft": {
    "code": "77W"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT7H10M",
    "id": "25",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT18H",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T15:15:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-08T23:35:00"
    },
    "carrierCode": "QR",
    "number": "40",
    "aircraft": {
    "code": "388"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT6H20M",
    "id": "33",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-09T02:25:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-09T07:35:00"
    },
    "carrierCode": "QR",
    "number": "1335",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H10M",
    "id": "34",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1B",
    "at": "2025-11-09T10:00:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T11:15:00"
    },
    "carrierCode": "UR",
    "number": "203",
    "aircraft": {
    "code": "CR9"
    },
    "operating": {
    "carrierCode": "UR"
    },
    "duration": "PT1H15M",
    "id": "35",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "938.10",
    "base": "358.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "938.10"
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
    "total": "938.10",
    "base": "358.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "24",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "25",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "33",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "34",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "35",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "Q",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "29",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT22H15M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T17:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-04T22:20:00"
    },
    "carrierCode": "QR",
    "number": "1384",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H20M",
    "id": "16",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-05T08:05:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T13:15:00"
    },
    "carrierCode": "QR",
    "number": "39",
    "aircraft": {
    "code": "388"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT7H10M",
    "id": "17",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT17H15M",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T16:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-09T00:20:00"
    },
    "carrierCode": "QR",
    "number": "44",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT6H20M",
    "id": "42",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-09T02:25:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-09T07:35:00"
    },
    "carrierCode": "QR",
    "number": "1335",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H10M",
    "id": "43",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1B",
    "at": "2025-11-09T10:00:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T11:15:00"
    },
    "carrierCode": "UR",
    "number": "203",
    "aircraft": {
    "code": "CR9"
    },
    "operating": {
    "carrierCode": "UR"
    },
    "duration": "PT1H15M",
    "id": "44",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "938.10",
    "base": "358.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "938.10"
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
    "total": "938.10",
    "base": "358.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "16",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "17",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "42",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "43",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "44",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "Q",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "type": "flight-offer",
    "id": "30",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "isUpsellOffer": false,
    "lastTicketingDate": "2025-11-04",
    "lastTicketingDateTime": "2025-11-04",
    "numberOfBookableSeats": 9,
    "itineraries": [
    {
    "duration": "PT22H15M",
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2025-11-04T17:00:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-04T22:20:00"
    },
    "carrierCode": "QR",
    "number": "1384",
    "aircraft": {
    "code": "788"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H20M",
    "id": "16",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-05T08:05:00"
    },
    "arrival": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-05T13:15:00"
    },
    "carrierCode": "QR",
    "number": "39",
    "aircraft": {
    "code": "388"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT7H10M",
    "id": "17",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    },
    {
    "duration": "PT18H",
    "segments": [
    {
    "departure": {
    "iataCode": "CDG",
    "terminal": "1",
    "at": "2025-11-08T15:15:00"
    },
    "arrival": {
    "iataCode": "DOH",
    "at": "2025-11-08T23:35:00"
    },
    "carrierCode": "QR",
    "number": "40",
    "aircraft": {
    "code": "388"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT6H20M",
    "id": "33",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "DOH",
    "at": "2025-11-09T02:25:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2025-11-09T07:35:00"
    },
    "carrierCode": "QR",
    "number": "1335",
    "aircraft": {
    "code": "359"
    },
    "operating": {
    "carrierCode": "QR"
    },
    "duration": "PT5H10M",
    "id": "34",
    "numberOfStops": 0,
    "blacklistedInEU": false
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1B",
    "at": "2025-11-09T10:00:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2025-11-09T11:15:00"
    },
    "carrierCode": "UR",
    "number": "203",
    "aircraft": {
    "code": "CR9"
    },
    "operating": {
    "carrierCode": "UR"
    },
    "duration": "PT1H15M",
    "id": "35",
    "numberOfStops": 0,
    "blacklistedInEU": false
    }
    ]
    }
    ],
    "price": {
    "currency": "USD",
    "total": "938.10",
    "base": "358.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "TICKETING"
    }
    ],
    "grandTotal": "938.10"
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
    "total": "938.10",
    "base": "358.00"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "16",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "17",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "33",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "34",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    },
    {
    "segmentId": "35",
    "cabin": "ECONOMY",
    "fareBasis": "NLR1R1RX",
    "brandedFare": "ECLASSIC",
    "brandedFareLabel": "ECONOMY CLASSIC",
    "class": "Q",
    "includedCheckedBags": {
    "quantity": 2
    },
    "includedCabinBags": {
    "quantity": 1
    },
    "amenities": [
    {
    "description": "CABIN BAG 1 PIECE 7 KG",
    "isChargeable": false,
    "amenityType": "BAGGAGE",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PRE RESERVED SEAT ASSIGNMENT",
    "isChargeable": true,
    "amenityType": "PRE_RESERVED_SEAT",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "MEAL BEVERAGE",
    "isChargeable": false,
    "amenityType": "MEAL",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "REFUNDABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "CHANGEABLE TICKET",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "PREMIUM SEAT",
    "isChargeable": true,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    },
    {
    "description": "50 PCT QMILES ACCUMULATION",
    "isChargeable": false,
    "amenityType": "BRANDED_FARES",
    "amenityProvider": {
    "name": "BrandedFare"
    }
    }
    ]
    }
    ]
    }
    ]
    }
    ];