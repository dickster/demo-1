export default {

    // represents what is stored in a single GIT file "A"
    id: 'abc',
    branchId: '934DJX',      // id of branch it was created in.
    nodeDataArray: [
        {
            key: 1,
            loc: "10 50",
            name: 'Contract 1',
            region: 'europe',
            highlighted: false,
            type: 'umbrellaHorizontal',
            curviness:1,
            startDate: new Date(),
            limit: 10000,
            excess: 25,
            perils: [],
            testCases: [],
            aggregateLimit: 100,
            aggregateExcess: 200,
        },
        {
            key: 2,
            loc: "100 220",
            name: 'FL_Pen_2017_Edison_FHCF',
            region: 'europe',
            type: 'umbrella',
            startDate: new Date(),
            highlighted: false,
            curviness:2,
            limit: 100,
            perils: [],
            excess: 125,
            testCase: false,
            aggregateLimit: 100,
            aggregateExcess: 200,
        },
        {
            key: 3,
            loc: "110 350",
            name: 'FL_Pen_2017_FHCF',
            highlighted: false,
            startDate: new Date(),
            region: 'europe',
            type: 'hasSubContracts',
            limit: 100,
            curviness:3,
            perils: [],
            excess: 25,
            testCase: false,
            aggregateLimit: 100,
            aggregateExcess: 200,
        },
        {
            key: 4,
            loc: "500 50",
            highlighted: false,
            name: 'FL_Pen_2018_FHCF',
            startingDate: null,
            curviness:21,
            region: 'europe',
            type: 'umbrellaVertical',
            limit: 200,
            excess: 25,
            perils: [],
            testCase: false,
            aggregateLimit: 100,
            aggregateExcess: 200,
        },
        {
            key: 5,
            startDate: new Date(),
            highlighted: false,
            loc: "600 110",
            name: 'Inuring',
            curviness:51,
            region: 'europe',
            limit: 100,
            excess: 25,
            perils: [],
            type: 'inuring',
            testCase: false,
            aggregateLimit: 100,
            aggregateExcess: 200,
        },
        {
            key: 6,
            startDate: new Date(),
            loc: "220 440",
            name: 'Subcontract',            curviness:0,

            region: 'europe',
            type: 'standalone',
            limit: 100,
            perils: [],
            excess: 25,
            highlighted: false,
            testCase: false,
            aggregateLimit: 100,
            aggregateExcess: 200,
        }
    ],

    linkDataArray: [
        // use 'Key' property.
        {from: 1, to: 2},
        {from: 6, to: 3},
        {from: 3, to: 1},
        {from: 5, to: 4},
    ]


}