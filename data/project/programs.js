export default [
    // TODO : Move ordinal assigning into service...
    {   // ELEMENTUM  -   customer.   suncorp/InsurCo.
        id:0,
        name: 'TrainRe',
        classes: [
            {
                name: 'TrainRe Hurricane',
                perils:[0,1,21,2,100]
            },
            {
                name: 'TrainRe Windstorm',
                perils:[10,11,12,2,200]
            },
            {
                name: 'TrainRe Flood',
                perils: [11, 41, 21, 20, 300]
            },
            {
                name: 'TrainRe Class 4',
                perils: [21, 41, 42, 400]
            },
            {
                name:'TrainRe Class 5',
                perils:[20,11,21,2,500]
            }
        ]
    },
    {
        id:1,
        name: 'InsurCo ',
        classes: [
            {
                name: 'InsurCo  Class',
                perils:[0,1,2]
            },
            {
                name: 'InsurCo  Class 2',
                perils:[10,11,12,2]
            }
        ]
    },
]


