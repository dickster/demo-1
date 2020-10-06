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
        x: Date.UTC(2020, 1, 1),
        name: 'Ben Train',
        label: 'Initial Portfolio',
        description: "Setup of 2020 portfolio within ILS Enterprise"
    }, {
        x: Date.UTC(2020, 2, 15),
        name: 'David Third',
        label: 'Ball InsurCo 2020 Pricing',
        description: "Deal pricing for the Ball InsurCo 2020 structure"
    }, {
        x: Date.UTC(2020, 2, 25),
        name: 'David Third',
        label: 'Publish Ball InsurCo 2020',
        description: "Publish the Ball InsurCo 2020 structure into the main portfolio"
    },
        {
            x: Date.UTC(2020, 4, 1),
            name: 'Ben Train',
            label: '2020Q1 NAV analysis',
            description: "Value portfolio as at 2020Q1"
        }, {
            x: Date.UTC(2020, 1, 23),
            name: 'Sina Thieme',
            label: 'Briggs InsCo Cat Data Upload',
            description: "Upload the cat data for the Briggs InsCo 2020 structure"
        }, {
            x: Date.UTC(2020, 4, 22),
            name: 'Matthew Ball',
            label: 'Publish 2020Q1 NAV analysis',
            description: "Finalise and approve the 2020Q1 NAV analysis"
        }]
}]
