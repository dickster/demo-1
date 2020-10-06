export default [{


    dataLabels: {
        allowOverlap: false,
        format: '<span style="font-weight: bold;" > ' +
            '{point.name}</span><br> <span style="font-size:9px;">   {point.x:%d %b %Y}</span><br>   {point.label}'
    },
    marker: {
        // symbol: 'circle'
    },
    data: [{
        x: Date.UTC(2020, 1, 15),
        name: 'David Third',
        label: 'Ball InsurCo 2020 Pricing',
        description: "Deal pricing for the Ball InsurCo 2020 structure"
    }, {
        x: Date.UTC(2020, 1, 16),
        name: 'David Third',
        label: 'Add contracts',
        description: "Add the contracts to the structure"
    }, {
        x: Date.UTC(2020, 1, 18),
        name: 'David Third',
        label: 'Set up contract inuring',
        description: "Adjust the inuring and umbrella contracts in the structure"		
    }, {
        x: Date.UTC(2020, 1, 22),
        name: 'David Third',
        label: 'Change limits and deductibles',
        description: "Increase limits and deductibles on the US layers"				
    }, {
        x: Date.UTC(2020, 1, 25),
        name: 'David Third',
        label: 'Publish Ball InsurCo 2020',
        description: "Publish the Ball InsurCo 2020 structure into the main portfolio"
    }]
}]
