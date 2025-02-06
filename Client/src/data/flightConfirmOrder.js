const confirmOder  = {
    "type": "flight-order",
    "id": "eJzTd9cPcvNzcbUAAAtBAk0%3D",
    "queuingOfficeId": "NCE4D31SB",
    "associatedRecords": [
    {
    "reference": "RFNDE8",
    "creationDate": "2024-11-21T00:34:00.000",
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
    "lastTicketingDate": "2024-11-23",
    "itineraries": [
    {
    "segments": [
    {
    "departure": {
    "iataCode": "EBB",
    "at": "2024-11-23T09:55:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1E",
    "at": "2024-11-23T11:10:00"
    },
    "carrierCode": "KQ",
    "number": "421",
    "aircraft": {
    "code": "E90"
    },
    "duration": "PT1H15M",
    "id": "18",
    "numberOfStops": 0,
    "co2Emissions": [
    {
    "weight": 93,
    "weightUnit": "KG",
    "cabin": "ECONOMY"
    }
    ]
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2024-11-23T18:15:00"
    },
    "arrival": {
    "iataCode": "DXB",
    "terminal": "1",
    "at": "2024-11-24T00:30:00"
    },
    "carrierCode": "KQ",
    "number": "310",
    "aircraft": {
    "code": "333"
    },
    "duration": "PT5H15M",
    "id": "19",
    "numberOfStops": 0,
    "co2Emissions": [
    {
    "weight": 240,
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
    "at": "2024-11-30T02:20:00"
    },
    "arrival": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2024-11-30T06:25:00"
    },
    "carrierCode": "KQ",
    "number": "311",
    "aircraft": {
    "code": "333"
    },
    "duration": "PT5H5M",
    "id": "53",
    "numberOfStops": 0,
    "co2Emissions": [
    {
    "weight": 240,
    "weightUnit": "KG",
    "cabin": "ECONOMY"
    }
    ]
    },
    {
    "departure": {
    "iataCode": "NBO",
    "terminal": "1A",
    "at": "2024-11-30T07:45:00"
    },
    "arrival": {
    "iataCode": "EBB",
    "at": "2024-11-30T09:05:00"
    },
    "carrierCode": "KQ",
    "number": "420",
    "aircraft": {
    "code": "E90"
    },
    "duration": "PT1H20M",
    "id": "54",
    "numberOfStops": 0,
    "co2Emissions": [
    {
    "weight": 96,
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
    "total": "442.50",
    "base": "91.00",
    "fees": [
    {
    "amount": "0.00",
    "type": "TICKETING"
    },
    {
    "amount": "0.00",
    "type": "SUPPLIER"
    },
    {
    "amount": "0.00",
    "type": "FORM_OF_PAYMENT"
    }
    ],
    "grandTotal": "442.50",
    "billingCurrency": "USD"
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
    "total": "442.50",
    "base": "91.00",
    "taxes": [
    {
    "amount": "20.40",
    "code": "AE"
    },
    {
    "amount": "10.90",
    "code": "F6"
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
    "amount": "44.00",
    "code": "YQ"
    },
    {
    "amount": "222.00",
    "code": "YR"
    },
    {
    "amount": "2.80",
    "code": "ZR"
    }
    ],
    "refundableTaxes": "85.50"
    },
    "fareDetailsBySegment": [
    {
    "segmentId": "18",
    "cabin": "ECONOMY",
    "fareBasis": "RPRUG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 2
    }
    },
    {
    "segmentId": "19",
    "cabin": "ECONOMY",
    "fareBasis": "RPRUG",
    "class": "R",
    "includedCheckedBags": {
    "quantity": 2
    }
    },
    {
    "segmentId": "53",
    "cabin": "ECONOMY",
    "fareBasis": "NSRUG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    }
    },
    {
    "segmentId": "54",
    "cabin": "ECONOMY",
    "fareBasis": "NSRUG",
    "class": "N",
    "includedCheckedBags": {
    "quantity": 2
    }
    }
    ]
    }
    ]
    }
    ],
    "travelers": [
    {
    "id": "1",
    "dateOfBirth": "1982-01-16",
    "gender": "MALE",
    "name": {
    "firstName": "JORGE",
    "lastName": "GONZALES"
    },
    "documents": [
    {
    "number": "00000000",
    "issuanceDate": "2015-04-14",
    "expiryDate": "2025-04-14",
    "issuanceCountry": "ES",
    "issuanceLocation": "Madrid",
    "nationality": "ES",
    "birthPlace": "Madrid",
    "documentType": "PASSPORT",
    "holder": true
    }
    ],
    "contact": {
    "purpose": "STANDARD",
    "phones": [
    {
    "deviceType": "MOBILE",
    "countryCallingCode": "34",
    "number": "480080076"
    }
    ],
    "emailAddress": "jorge.gonzales833@telefonica.es"
    }
    }
    ],
    "ticketingAgreement": {
    "option": "CONFIRM"
    },
    "automatedProcess": [
    {
    "code": "IMMEDIATE",
    "queue": {
    "number": "0",
    "category": "0"
    },
    "officeId": "NCE4D31SB"
    }
    ]
    }

    export default confirmOder;