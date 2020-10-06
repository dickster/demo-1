export default [{


    dataLabels: {
        allowOverlap: false,
        format: '<span style="font-weight: bold;" > ' +
            '{point.name}</span><br> <span style="font-size:9px;">   {point.x:%d %b %Y}</span><br>   {point.label}'
    },
    marker: {
        // symbol: 'circle'
    },
    data: [
        {
            x: Date.UTC(2020, 4, 1),
            name: 'Ben Train',
            label: '2020Q1 NAV analysis',
            description: "Value portfolio as at 2020Q1"
        }, {
            x: Date.UTC(2020, 4, 2),
            name: 'Ben Train',
            label: 'Commute Contracts',
            description: "Commute 3 loss free expired contracts"
        }, {
            x: Date.UTC(2020, 4, 7),
            name: 'Ben Train',
            label: 'Update Loss History',
            description: "Update 4 losses based on new cedent advices"			
        }, {
            x: Date.UTC(2020, 4, 15),
            name: 'Matthew Ball',
            label: 'Publish 2020Q1 NAV analysis',
            description: "Finalise and approve the 2020Q1 NAV analysis"
        }]
}]
