export default {

    // each structure should be stored in a separate GIT file.

    structures: [

        {
            name: 'Ball InsCo',  // Ball InsCo etc...   aka cedent.
            shortForm: 'BI',
            colorIndex: 0,
            // AKA cedent.
            id: '3434',
            branchId: '934DJX',      // id of branch it was created in.

            nodeDataArray: [   // list of CONTRACTS...
                {
                    key: 1,
                    name: 'US Layer 1 Section A',
                    loc: "0 440",
                    region: 'US',
                    highlighted: false,
                    type: 'standalone',
                    curviness: 1,

                    startDate: new Date(),
                    limit: 20000000,
                    excess: 10000000,
                    // cedent drives peril selection...
                    perils: [0, 1, 4], // Marine Losses => [Hurricane, Flood, ...]
                    // drives class selection...
                    classes: ['Property'],
                    testCases: [],
                    aggregateLimit: 40000000,
                    aggregateExcess: 0,
                    basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern'
                },
                {
                    key: 2,
                    name: 'US Layer 1 Section B',
                    loc: "430 480",
                    region: 'US',
                    type: 'standalone',
                    startDate: new Date(),
                    highlighted: false,
                    curviness: 2,
                    limit: 20000000,
                    perils: [0, 1, 4],
                    excess: 12500000,
                    classes: ['Marine'], basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    commission: 5, currency: 'USD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 0,
                },
                {
                    key: 3,
                    name: 'US Layer 1 Total',
                    loc: "40 280",
                    highlighted: false,
                    startDate: new Date(),
                    region: 'US',
                    type: 'inuring',
                    limit: 20000000, basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    curviness: 3,
                    perils: [0, 1, 4],
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    commission: 5, currency: 'CAD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 0,
                },
                {
                    key: 4,
                    name: 'US Layer 2 Top and Drop',
                    loc: "0 130",
                    highlighted: false, basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    startingDate: null,
                    curviness: 21,
                    region: 'US',
                    type: 'umbrellaVerticalandHorizontal',
                    limit: 10000000,
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    perils: [0, 1, 4],
                    commission: 5, currency: 'GBP',
                    aggregateLimit: 10000000,
                    aggregateExcess: 0,
                },
                {
                    key: 5,
                    name: 'Global Umbrella', basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    loc: "350 0",
                    startDate: new Date(),
                    highlighted: false,
                    curviness: 51,
                    region: 'worldwide',
                    type: 'umbrellaVertical',
                    limit: 10000000,
                    excess: 20000000,
                    classes: ['Property', 'Marine'],
                    perils: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    commission: 5, currency: 'YEN',
                    aggregateLimit: 10000000,
                    aggregateExcess: 0,
                },
                {
                    key: 6,
                    startDate: new Date(), basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    loc: "500 340",
                    name: 'Worldwide Exc US - Layer 1',
                    curviness: 0,
                    region: 'worldwide excl. US',
                    type: 'standalone',
                    limit: 15000000,
                    perils: [2, 3, 5, 6, 7, 8, 9, 10],
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 15000000,
                    aggregateExcess: 0,
                },
                {
                    key: 7,
                    name: 'Japan Only - Layer 2', basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    startDate: new Date(),
                    loc: "400 177",
                    curviness: 0,
                    region: 'Japan',
                    type: 'inuring',
                    limit: 15000000,
                    perils: [7],
                    excess: 0,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 15000000,
                    aggregateExcess: 0,
                },
                {
                    key: 8,
                    startDate: new Date(), basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    loc: "810 140",
                    name: 'Australia Only - Layer 2',
                    curviness: 0,
                    region: 'Australia',
                    type: 'inuring',
                    limit: 20000000,
                    perils: [6, 9],
                    excess: 0,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 10000000,
                }
            ],
            linkDataArray: [
                {from: 4, to: 5},
                {from: 8, to: 5},
                {from: 7, to: 5},
                {from: 6, to: 7},
                {from: 6, to: 8},
                {from: 3, to: 4},
                {from: 1, to: 3},
                {from: 2, to: 3},
            ],
            commuted: false,
        },

        {
            name: 'Wong Re',  // Ball InsCo etc...aka cedent.
            shortForm: 'W',
            colorIndex: 1,
            id: '3434',
            branchId: '934DJX',      // id of branch it was created in.
            nodeDataArray: [   // list of CONTRACTS...
                {
                    key: 1,
                    loc: "10 10",
                    name: 'US Layer 1 Section A',
                    region: 'US',
                    highlighted: false,
                    type: 'standalone',
                    curviness: 1,

                    //bens stuff...
                    //-------------

                    startDate: new Date(), basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    limit: 20000000,
                    excess: 10000000,
                    // cedent drives peril selection...
                    perils: [0, 1, 4], // Marine Losses => [Hurricane, Flood, ...]
                    // drives class selection...
                    classes: ['Property'],
                    testCases: [],
                    aggregateLimit: 40000000,
                    aggregateExcess: 0,
                },
                {
                    key: 2,
                    loc: "100 220",
                    name: 'US Layer 1 Section B', basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    region: 'US',
                    type: 'standalone',
                    startDate: new Date(),
                    highlighted: false,
                    curviness: 2,
                    limit: 20000000,
                    perils: [0, 1, 4],
                    excess: 12500000,
                    classes: ['Marine'],
                    commission: 5, currency: 'CAD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 0,
                },
                {
                    key: 3,
                    loc: "110 350",
                    name: 'US Layer 1 Total', basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    highlighted: false,
                    startDate: new Date(),
                    region: 'US',
                    type: 'inuring',
                    limit: 20000000,
                    curviness: 3,
                    perils: [0, 1, 4],
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    commission: 5, currency: 'YEN',
                    aggregateLimit: 20000000,
                    aggregateExcess: 0,
                },
                {
                    key: 4,
                    loc: "0 50",
                    highlighted: false,
                    name: 'US Layer 2 Top and Drop', basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    startingDate: null,
                    curviness: 21,
                    region: 'US',
                    type: 'umbrellaVerticalandHorizontal',
                    limit: 10000000,
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    perils: [0, 1, 4],
                    commission: 5, currency: 'EU',
                    aggregateLimit: 10000000,
                    aggregateExcess: 0,
                },
                {
                    key: 5,
                    startDate: new Date(),
                    highlighted: false,
                    loc: "300 10",
                    name: 'Global Umbrella',
                    curviness: 51, basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    region: 'worldwide',
                    type: 'umbrellaVertical',
                    limit: 10000000,
                    excess: 20000000,
                    classes: ['Property', 'Marine'],
                    perils: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    commission: 5, currency: 'EU',
                    aggregateLimit: 10000000,
                    aggregateExcess: 0,
                },
                {
                    key: 6,
                    startDate: new Date(),
                    loc: "220 440",
                    name: 'Worldwide Exc US - Layer 1',
                    curviness: 0,
                    region: 'worldwide excl. US',
                    type: 'standalone',
                    limit: 15000000,
                    perils: [2, 3, 5, 6, 7, 8, 9, 10], basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 15000000,
                    aggregateExcess: 0,
                },
                {
                    key: 7,
                    startDate: new Date(),
                    loc: "220 50",
                    name: 'Japan Only - Layer 2',
                    curviness: 0,
                    region: 'Japan',
                    type: 'standalone',
                    limit: 15000000,
                    perils: [7], basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    excess: 0,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 15000000,
                    aggregateExcess: 0,
                },
                {
                    key: 8,
                    startDate: new Date(),
                    loc: "220 50",
                    name: 'Australia Only - Layer 2',
                    curviness: 0,
                    region: 'Australia',
                    type: 'standalone',
                    limit: 20000000,
                    perils: [6, 9],
                    excess: 0,
                    classes: ['Property', 'Marine'], basis: 'LOD', premium:12, collateral:20000000, pattern: 'Fast Pattern',

                    highlighted: false,
                    commission: 5, currency: 'GBP',
                    aggregateLimit: 20000000,
                    aggregateExcess: 10000000,
                }
            ],
            linkDataArray: [
                // uses 'Key' property to identify nodes.
                {from: 7, to: 2},
                {from: 6, to: 7},
                {from: 4, to: 1},
                {from: 8, to: 2},
            ],
            commuted: false,  //TODO : is commute at this level??  or at contract level??
        },

        {
            name: 'Third InsCo',  // Ball InsCo etc...   aka cedent.
            shortForm: 'TI',
            colorIndex: 2,
            // AKA cedent.
            id: '3434',
            branchId: '934DJX',      // id of branch it was created in.

            nodeDataArray: [   // list of CONTRACTS...
                {
                    key: 1,
                    loc: "10 50",
                    name: 'US Layer 1 Section A',
                    region: 'US',
                    highlighted: false,
                    type: 'standalone',
                    curviness: 1,

                    //bens stuff...
                    //-------------
                    basis:'LOD',pattern:'Fast Pattern',

                    startDate: new Date(),
                    limit: 20000000,
                    excess: 10000000,
                    // cedent drives peril selection...
                    perils: [0, 1, 4], // Marine Losses => [Hurricane, Flood, ...]
                    // drives class selection...
                    classes: ['Property'],
                    testCases: [],
                    aggregateLimit: 40000000,
                    aggregateExcess: 0,
                },
                {
                    key: 2,
                    loc: "100 220",
                    name: 'US Layer 1 Section B',
                    region: 'US',                    basis:'LOD',pattern:'Fast Pattern',

                    type: 'standalone',
                    startDate: new Date(),
                    highlighted: false,
                    curviness: 2,
                    limit: 20000000,
                    perils: [0, 1, 4],
                    excess: 12500000,
                    classes: ['Marine'],
                    commission: 5, currency: 'USD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 0,
                },
                {
                    key: 3,
                    loc: "110 350",                    basis:'LOD',pattern:'Fast Pattern',

                    name: 'US Layer 1 Total',
                    highlighted: false,
                    startDate: new Date(),
                    region: 'US',
                    type: 'inuring',
                    limit: 20000000,
                    curviness: 3,
                    perils: [0, 1, 4],
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    commission: 5, currency: 'USD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 0,
                },
                {
                    key: 4,
                    loc: "500 50",
                    highlighted: false,                    basis:'LOD',pattern:'Fast Pattern',

                    name: 'US Layer 2 Top and Drop',
                    startingDate: null,
                    curviness: 21,
                    region: 'US',
                    type: 'umbrellaVerticalandHorizontal',
                    limit: 10000000,
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    perils: [0, 1, 4],
                    commission: 5, currency: 'USD',
                    aggregateLimit: 10000000,
                    aggregateExcess: 0,
                },
                {
                    key: 5,
                    startDate: new Date(),
                    highlighted: false,                    basis:'LOD',pattern:'Fast Pattern',

                    loc: "600 110",
                    name: 'Global Umbrella',
                    curviness: 51,
                    region: 'worldwide',
                    type: 'umbrellaVertical',
                    limit: 10000000,
                    excess: 20000000,
                    classes: ['Property', 'Marine'],
                    perils: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    commission: 5, currency: 'USD',
                    aggregateLimit: 10000000,
                    aggregateExcess: 0,
                },
                {
                    key: 6,                    basis:'LOD',pattern:'Fast Pattern',

                    startDate: new Date(),
                    loc: "220 440",
                    name: 'Worldwide Exc US - Layer 1',
                    curviness: 0,
                    region: 'worldwide excl. US',
                    type: 'standalone',
                    limit: 15000000,
                    perils: [2, 3, 5, 6, 7, 8, 9, 10],
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 15000000,
                    aggregateExcess: 0,
                },
                {
                    key: 7,
                    startDate: new Date(),
                    loc: "220 440",                    basis:'LOD',pattern:'Fast Pattern',

                    name: 'Japan Only - Layer 2',
                    curviness: 0,
                    region: 'Japan',
                    type: 'standalone',
                    limit: 15000000,
                    perils: [7],
                    excess: 0,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 15000000,
                    aggregateExcess: 0,
                },
                {
                    key: 8,
                    startDate: new Date(),                    basis:'LOD',pattern:'Fast Pattern',

                    loc: "220 440",
                    name: 'Australia Only - Layer 2',
                    curviness: 0,
                    region: 'Australia',
                    type: 'standalone',
                    limit: 20000000,
                    perils: [6, 9],
                    excess: 0,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 10000000,
                }
            ],
            linkDataArray: [
                // uses 'Key' property to identify nodes.
                {from: 1, to: 2},
                {from: 6, to: 3},
                {from: 3, to: 1},
                {from: 5, to: 4},
            ],
            commuted: false,  //TODO : is commute at this level??  or at contract level??
        },

        {
            name: 'Thieme InsCo',  // Ball InsCo etc...   aka cedent.
            shortForm: 'TH',
            colorIndex: 3,
            // AKA cedent.
            id: '3434',
            branchId: '934DJX',      // id of branch it was created in.

            nodeDataArray: [   // list of CONTRACTS...
                {
                    key: 1,
                    loc: "10 50",
                    name: 'US Layer 1 Section A',
                    region: 'US',
                    highlighted: false,
                    type: 'standalone',
                    curviness: 1,
                    basis:'LOD',pattern:'Fast Pattern',
                    startDate: new Date(),
                    limit: 20000000,
                    excess: 10000000,
                    // cedent drives peril selection...
                    perils: [0, 1, 4], // Marine Losses => [Hurricane, Flood, ...]
                    // drives class selection...
                    classes: ['Property'],
                    testCases: [],
                    aggregateLimit: 40000000,
                    aggregateExcess: 0,
                },
                {
                    key: 2,
                    loc: "100 220",
                    name: 'US Layer 1 Section B',
                    region: 'US', basis:'LOD',pattern:'Fast Pattern',
                    type: 'standalone',
                    startDate: new Date(),
                    highlighted: false,
                    curviness: 2,
                    limit: 20000000,
                    perils: [0, 1, 4],
                    excess: 12500000,
                    classes: ['Marine'],
                    commission: 5, currency: 'USD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 0,
                },
                {
                    key: 3,
                    loc: "110 350",
                    name: 'US Layer 1 Total',
                    highlighted: false,
                    startDate: new Date(),
                    region: 'US', basis:'LOD',pattern:'Fast Pattern',
                    type: 'inuring',
                    limit: 20000000,
                    curviness: 3,
                    perils: [0, 1, 4],
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    commission: 5, currency: 'USD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 0,
                },
                {
                    key: 4,
                    loc: "500 50",
                    highlighted: false,
                    name: 'US Layer 2 Top and Drop', basis:'LOD',pattern:'Fast Pattern',
                    startingDate: null,
                    curviness: 21,
                    region: 'US',
                    type: 'umbrellaVerticalandHorizontal',
                    limit: 10000000,
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    perils: [0, 1, 4],
                    commission: 5, currency: 'USD',
                    aggregateLimit: 10000000,
                    aggregateExcess: 0,
                },
                {
                    key: 5,
                    startDate: new Date(),
                    highlighted: false,
                    loc: "600 110",
                    name: 'Global Umbrella',
                    curviness: 51,
                    region: 'worldwide',
                    type: 'umbrellaVertical', basis:'LOD',pattern:'Fast Pattern',
                    limit: 10000000,
                    excess: 20000000,
                    classes: ['Property', 'Marine'],
                    perils: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    commission: 5, currency: 'USD',
                    aggregateLimit: 10000000,
                    aggregateExcess: 0,
                },
                {
                    key: 6,
                    startDate: new Date(),
                    loc: "220 440",
                    name: 'Worldwide Exc US - Layer 1',
                    curviness: 0,
                    region: 'worldwide excl. US', basis:'LOD',pattern:'Fast Pattern',
                    type: 'standalone',
                    limit: 15000000,
                    perils: [2, 3, 5, 6, 7, 8, 9, 10],
                    excess: 10000000,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 15000000,
                    aggregateExcess: 0,
                },
                {
                    key: 7,
                    startDate: new Date(),
                    loc: "220 440",
                    name: 'Japan Only - Layer 2',
                    curviness: 0,
                    region: 'Japan', basis:'LOD',pattern:'Fast Pattern',
                    type: 'standalone',
                    limit: 15000000,
                    perils: [7],
                    excess: 0,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 15000000,
                    aggregateExcess: 0,
                },
                {
                    key: 8,
                    startDate: new Date(),
                    loc: "220 440",
                    name: 'Australia Only - Layer 2',
                    curviness: 0,
                    region: 'Australia', basis:'LOD',pattern:'Fast Pattern',
                    type: 'standalone',
                    limit: 20000000,
                    perils: [6, 9],
                    excess: 0,
                    classes: ['Property', 'Marine'],
                    highlighted: false,
                    commission: 5, currency: 'USD',
                    aggregateLimit: 20000000,
                    aggregateExcess: 10000000,
                }
            ],
            linkDataArray: [
                // uses 'Key' property to identify nodes.
                {from: 1, to: 2},
                {from: 6, to: 3},
                {from: 3, to: 1},
                {from: 5, to: 4},
            ],
            commuted: false,  //TODO : is commute at this level??  or at contract level??
        },

    ],

    eventLosses: [
        {
            id: 0,
            name: 'Hurricane Isaias',
            perilType: 0,
            date: Date.UTC(2020, 6, 30),

            losses: [
                {
                    // NOTE : I use cedent as ID.  maybe it should be program?
                    //TODO: use cedent ID & class ID
                    // hmmm...I think I need a separate loss Id GUID
                    cedent: 'Ball InsCo',    // Ball InsCo,   InsuranceCo,  GreenFibCo...
                    class: 'Property',  // Property losses
                    distribution: 'LogNormal', //
                    // TODO : have an overriding perilType here...use event peril
                    stdDeviation: 100000,
                    values: [
                        {
                            date: Date.UTC(2020, 7, 1),
                            paid: 0,
                            unpaid: 20000000,
                            distribution: 'LogNormal',
                            stdDeviation: 3000000,
                        },
                        {
                            date: Date.UTC(2020, 8, 1),
                            paid: 100000,
                            unpaid: 25000000,
                            distribution: 'LogNormal',
                            stdDeviation: 2500000,
                        },
                        {
                            date: Date.UTC(2020, 9, 1),
                            paid: 200000,
                            unpaid: 3000000,
                            distribution: 'LogNormal',
                            stdDeviation: 2500000,
                        }
                    ]

                },
                {
                    // NOTE : I use cedent as ID.  maybe it should be program?
                    //TODO: use cedent ID & class ID
                    cedent: 'Ball InsCo',
                    class: 'Marine',
                    distribution: 'LogNormal',
                    stdDeviation: 100000,
                    values: [
                        {
                            date: Date.UTC(2020, 7, 1),
                            paid: 0,
                            unpaid: 10000000,
                            distribution: 'LogNormal',
                            stdDeviation: 1000000,
                        },
                        {
                            date: Date.UTC(2020, 8, 1),
                            paid: 0,
                            unpaid: 10000000,
                            distribution: 'LogNormal',
                            stdDeviation: 1000000,
                        },
                        {
                            date: Date.UTC(2020, 9, 1),
                            paid: 0,
                            unpaid: 12500000,
                            distribution: 'LogNormal',
                            stdDeviation: 2000000,
                        }
                    ]
                },
                {
                    cedent: 'Wong Re',
                    class: 'Marine',
                    distribution: 'Normal',
                    stdDeviation: 200000,
                    values: [{
                        date: Date.UTC(2020, 7, 20),
                        paid: 1000,
                        unpaid: 2000000,
                        distribution: 'Normal',
                        stdDeviation: 100000,
                    }
                    ]

                }
            ]

        },
        {
            id: 1,
            name: 'Australia Storms',
            perilType: 9,
            date: Date.UTC(2020, 2, 5),
            losses:
                [
                    {
                        cedent: 'Third InsCo',
                        class: 'Property',
                        distribution: 'LogNormal',
                        stdDeviation: 100000,
                        values: [
                            {
                                date: Date.UTC(2020, 2, 6),
                                paid: 6000000,
                                unpaid: 1000000,
                                distribution: 'LogNormal',
                                stdDeviation: 3000000,
                            },
                            {
                                date: Date.UTC(2020, 4, 1),
                                paid: 6000000,
                                unpaid: 1000000,
                                distribution: 'LogNormal',
                                stdDeviation: 2500000,
                            },
                            {
                                date: Date.UTC(2020, 8, 1),
                                paid: 6600000,
                                unpaid: 3200000,
                                distribution: 'LogNormal',
                                stdDeviation: 400000,
                            }
                        ]
                    },
                    {
                        cedent: 'Thieme InsCo',
                        class: 'Marine',
                        values: [
                            {
                                date: Date.UTC(2020, 8, 12),
                                paid: 6400000,
                                unpaid: 2300000,
                                distribution: 'Normal',
                                stdDeviation: 3000000,
                            },
                            {
                                date: Date.UTC(2020, 9, 21),
                                paid: 9200000,
                                unpaid: 1700000,
                                distribution: 'Normal',
                                stdDeviation: 2900000,
                            },
                            {
                                date: Date.UTC(2020, 9, 17),
                                paid: 6300000,
                                unpaid: 3600000,
                                distribution: 'LogNormal',
                                stdDeviation: 450000,
                            }
                        ]
                    },
                ]

        },
        {
            id: 3,
            name: 'Australia Wildfires',
            perilType: 6,
            date: Date.UTC(2020, 1, 14),
            losses: [
                {
                    cedent: 'Ball InsCo',
                    class: 'Marine',
                    values: [
                        {
                            date: Date.UTC(2020, 12, 17),
                            paid: 8500000,
                            unpaid: 5000000,
                            distribution: 'LogNormal',
                            stdDeviation: 450000,

                        }
                    ]
                }

            ]

        },
        {
            id: 3,
            name: 'Japan Earthquake',
            perilType: 7,
            date: Date.UTC(2019, 10, 6),
            losses: [
                {
                    cedent: 'Ball InsCo',
                    class: 'Marine',
                    values: [
                        {
                            date: Date.UTC(2020, 12, 17),
                            paid: 8500000,
                            unpaid: 5000000,
                            distribution: 'LogNormal',
                            stdDeviation: 450000,

                        }
                    ]
                }

            ]

        },

    ],

    nav: {
        date: new Date(Date.UTC(2020,10,1))
    },

    contract: {
        date: null,
        startDate:null,
        endDate:null
    }

}
