const flightPricing = {  
    type: "flight-offers-pricing",  
    flightOffers: [  
        {  
            type: "flight-offer",  
            id: "1",  
            source: "GDS",  
            instantTicketingRequired: false,  
            nonHomogeneous: false,  
            paymentCardRequired: false,  
            lastTicketingDate: "2024-11-23",  
            itineraries: [  
                {  
                    segments: [  
                        {  
                            departure: {  
                                iataCode: "EBB",  
                                at: "2024-11-23T09:55:00"  
                            },  
                            arrival: {  
                                iataCode: "NBO",  
                                terminal: "1E",  
                                at: "2024-11-23T11:10:00"  
                            },  
                            carrierCode: "KQ",  
                            number: "421",  
                            aircraft: {  
                                code: "E90"  
                            },  
                            operating: {  
                                carrierCode: "KQ"  
                            },  
                            duration: "PT1H15M",  
                            id: "18",  
                            numberOfStops: 0,  
                            co2Emissions: [  
                                {  
                                    weight: 93,  
                                    weightUnit: "KG",  
                                    cabin: "ECONOMY"  
                                }  
                            ]  
                        },  
                        {  
                            departure: {  
                                iataCode: "NBO",  
                                terminal: "1A",  
                                at: "2024-11-23T18:15:00"  
                            },  
                            arrival: {  
                                iataCode: "DXB",  
                                terminal: "1",  
                                at: "2024-11-24T00:30:00"  
                            },  
                            carrierCode: "KQ",  
                            number: "310",  
                            aircraft: {  
                                code: "333"  
                            },  
                            operating: {  
                                carrierCode: "KQ"  
                            },  
                            duration: "PT5H15M",  
                            id: "19",  
                            numberOfStops: 0,  
                            co2Emissions: [  
                                {  
                                    weight: 240,  
                                    weightUnit: "KG",  
                                    cabin: "ECONOMY"  
                                }  
                            ]  
                        }  
                    ]  
                },  
                {  
                    segments: [  
                        {  
                            departure: {  
                                iataCode: "DXB",  
                                terminal: "1",  
                                at: "2024-11-30T02:20:00"  
                            },  
                            arrival: {  
                                iataCode: "NBO",  
                                terminal: "1A",  
                                at: "2024-11-30T06:25:00"  
                            },  
                            carrierCode: "KQ",  
                            number: "311",  
                            aircraft: {  
                                code: "333"  
                            },  
                            operating: {  
                                carrierCode: "KQ"  
                            },  
                            duration: "PT5H5M",  
                            id: "53",  
                            numberOfStops: 0,  
                            co2Emissions: [  
                                {  
                                    weight: 240,  
                                    weightUnit: "KG",  
                                    cabin: "ECONOMY"  
                                }  
                            ]  
                        },  
                        {  
                            departure: {  
                                iataCode: "NBO",  
                                terminal: "1A",  
                                at: "2024-11-30T07:45:00"  
                            },  
                            arrival: {  
                                iataCode: "EBB",  
                                at: "2024-11-30T09:05:00"  
                            },  
                            carrierCode: "KQ",  
                            number: "420",  
                            aircraft: {  
                                code: "E90"  
                            },  
                            operating: {  
                                carrierCode: "KQ"  
                            },  
                            duration: "PT1H20M",  
                            id: "54",  
                            numberOfStops: 0,  
                            co2Emissions: [  
                                {  
                                    weight: 96,  
                                    weightUnit: "KG",  
                                    cabin: "ECONOMY"  
                                }  
                            ]  
                        }  
                    ]  
                }  
            ],  
            price: {  
                currency: "USD",  
                total: "442.50",  
                base: "91.00",  
                fees: [  
                    {  
                        amount: "0.00",  
                        type: "SUPPLIER"  
                    },  
                    {  
                        amount: "0.00",  
                        type: "TICKETING"  
                    },  
                    {  
                        amount: "0.00",  
                        type: "FORM_OF_PAYMENT"  
                    }  
                ],  
                grandTotal: "442.50",  
                billingCurrency: "USD"  
            },  
            pricingOptions: {  
                fareType: [  
                    "PUBLISHED"  
                ],  
                includedCheckedBagsOnly: true  
            },  
            validatingAirlineCodes: [  
                "KQ"  
            ],  
            travelerPricings: [  
                {  
                    travelerId: "1",  
                    fareOption: "STANDARD",  
                    travelerType: "ADULT",  
                    price: {  
                        currency: "USD",  
                        total: "442.50",  
                        base: "91.00",  
                        taxes: [  
                            {  
                                amount: "10.90",  
                                code: "F6"  
                            },  
                            {  
                                amount: "10.00",  
                                code: "UG"  
                            },  
                            {  
                                amount: "20.40",  
                                code: "AE"  
                            },  
                            {  
                                amount: "40.00",  
                                code: "UL"  
                            },  
                            {  
                                amount: "44.00",  
                                code: "YQ"  
                            },  
                            {  
                                amount: "2.80",  
                                code: "ZR"  
                            },  
                            {  
                                amount: "222.00",  
                                code: "YR"  
                            },  
                            {  
                                amount: "1.40",  
                                code: "TP"  
                            }  
                        ],  
                        refundableTaxes: "85.50"  
                    },  
                    fareDetailsBySegment: [  
                        {  
                            segmentId: "18",  
                            cabin: "ECONOMY",  
                            fareBasis: "RPRUG",  
                            class: "R",  
                            includedCheckedBags: {  
                                quantity: 2  
                            }  
                        },  
                        {  
                            segmentId: "19",  
                            cabin: "ECONOMY",  
                            fareBasis: "RPRUG",  
                            class: "R",  
                            includedCheckedBags: {  
                                quantity: 2  
                            }  
                        },  
                        {  
                            segmentId: "53",  
                            cabin: "ECONOMY",  
                            fareBasis: "NSRUG",  
                            class: "N",  
                            includedCheckedBags: {  
                                quantity: 2  
                            }  
                        },  
                        {  
                            segmentId: "54",  
                            cabin: "ECONOMY",  
                            fareBasis: "NSRUG",  
                            class: "N",  
                            includedCheckedBags: {  
                                quantity: 2  
                            }  
                        }  
                    ]  
                }  
            ]  
        }  
    ],  
    bookingRequirements: {  
        emailAddressRequired: true,  
        mobilePhoneNumberRequired: true,  
        travelerRequirements: [  
            {  
                travelerId: "1",  
                documentRequired: true  
            }  
        ]  
    }  
};