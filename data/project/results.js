import report1 from './report1'
import contractFutureAmounts from './contractFutureAmounts'
import lossesByPeril from './lossesByPeril'
import funds from './funds'
import navTable from './navTable'
import portfolioTable from './portfolioTable'
import contractTable from './contractTable'

export default {

// to compare tables, have headers duplicated.

    // limit to a single comparison.  can't compare to multiple results.
    // headers : {name, skipComparison:true}, limit, excess etc...
    // .: headers are calculated...
    // have mode in table;  [show A, show B, show Both]
    // need to merge

    // each result set has a name.
    // this may be similar/the same as as the chart definition name but it doesn't have to be.
    // e.g.
    //    use  'contractLossesByPeril' data in chartDef 'pieChart'
    //    use  'contractLossesByPeril' data in chartDef 'contractLossesByPerilChart'

    ...report1,
    ...lossesByPeril,
    ...contractFutureAmounts,
    ...funds,
    ...navTable,
    ...portfolioTable,
    ...contractTable




    //
    //
    // funds: [
    //     [
    //         {name: 'Fund A', y: 21.41},
    //         {name: 'Fund B', y: 11.84},
    //         {name: 'Fund C', y: 10.85},
    //         {name: 'Fund D', y: 3.5},
    //         {name: 'Fund E', y: 1.5},
    //     ]
    // ],
    //
    // sankey: [
    //     [
    //         ['Suncorp Class', 'Flood', 1],
    //         ['Suncorp Class', 'Hurricane', 1],
    //         ['Suncorp Class', 'Peril B', 1],
    //         ['Suncorp Class', 'Earthquake', 1],
    //         ['Suncorp Class 2', 'Peril X', 1],
    //         ['Suncorp Class 2', 'Flood', 1],
    //         ['Suncorp Class 2', 'Peril Y', 1],
    //         ['Suncorp Class 2', 'Earthquake', 1],
    //         ['Suncorp Class 2', 'Peril D', 1],
    //         ['Berkshire Hathaway Class', 'Flood', 1],
    //         ['Berkshire Hathaway Class', 'Peril Z', 1],
    //         ['Berkshire Hathaway Class', 'Peril A', 1],
    //         ['Berkshire Hathaway Class', 'Peril B', 1],
    //         ['Berkshire Hathaway Class', 'Peril C', 1],
    //         ['Berkshire Hathaway Class', 'Peril D', 1],
    //         ['Berkshire Hathaway Class', 'Earthquake', 1],
    //     ]],
    // waterfall: [[{
    //     name: 'Start',
    //     y: 120000
    // }, {
    //     name: 'Product Revenue',
    //     y: 569000
    // }, {
    //     name: 'Service Revenue',
    //     y: 231000
    // }, {
    //     name: 'Positive Balance',
    //     isIntermediateSum: true,
    // }, {
    //     name: 'Fixed Costs',
    //     y: -342000
    // }, {
    //     name: 'Variable Costs',
    //     y: -233000
    // }, {
    //     name: 'Balance',
    //     isSum: true,
    // }]],
    // pieChart: [[{
    //     name: 'FundA',
    //     y: 21.41,
    //     sliced: true,
    //     selected: true
    // }, {
    //     name: 'FundB',
    //     y: 11.84
    // }, {
    //     name: 'FundC',
    //     y: 10.85
    // }, {
    //     name: 'FundD',
    //     y: 14.67
    // }, {
    //     name: 'FundE',
    //     y: 4.18
    // }, {
    //     name: 'FundF',
    //     y: 11.64
    // }, {
    //     name: 'FundG',
    //     y: 21.6
    // }, {
    //     name: 'FundH',
    //     y: 1.2
    // }
    // ]],
    // contractDependency: [[
    //     ['Contract A', 'Contract B', 5],
    //     ['Contract A', 'Contract C', 1],
    //     ['Contract A', 'Contract D', 1],
    //     ['Contract A', 'Contract M', 1],
    //     ['Contract P', 'Contract B', 1],
    //     ['Contract P', 'Contract C', 5],
    //     ['Contract P', 'Contract M', 1],
    //     ['Contract O', 'Contract B', 1],
    //     ['Contract O', 'Contract C', 1],
    //     ['Contract O', 'Contract D', 5],
    //     ['Contract O', 'Contract M', 1],
    //     ['Contract N', 'Contract B', 1],
    //     ['Contract N', 'Contract C', 1],
    //     ['Contract N', 'Contract D', 1],
    //     ['Contract N', 'Contract M', 5],
    //     ['Contract B', 'Contract G', 2],
    //     ['Contract B', 'Contract F', 1],
    //     ['Contract B', 'Contract H', 1],
    //     ['Contract B', 'Contract L', 3],
    //     ['Contract C', 'Contract G', 1],
    //     ['Contract C', 'Contract F', 3],
    //     ['Contract C', 'Contract E', 3],
    //     ['Contract C', 'Contract H', 3],
    //     ['Contract C', 'Contract L', 1],
    //     ['Contract D', 'Contract F', 1],
    //     ['Contract D', 'Contract H', 3],
    //     ['Contract D', 'Contract L', 1],
    //     ['Contract M', 'Contract G', 1]
    // ]],
    // contractFutureAmounts: [
    //     [{x: 0, y: -9.5},
    //         {x: 5, y: -2.4},
    //         {x: 10, y: .2},
    //         {x: 15, y: .2},
    //         {x: 20, y: .2},
    //         {x: 25, y: .2},
    //         {x: 30, y: .2},
    //         {x: 35, y: .2},
    //         {x: 40, y: .2},
    //         {x: 45, y: .2},
    //         {x: 50, y: .2},
    //         {x: 55, y: .2},
    //         {x: 60, y: .2},
    //         {x: 65, y: .2},
    //         {x: 70, y: .2},
    //         {x: 75, y: .2},
    //         {x: 80, y: .2},
    //         {x: 85, y: .2},
    //         {x: 90, y: .2},
    //         {x: 95, y: .2},
    //         {x: 100, y: .2}
    //     ],
    //     [{x: 0, y: 0},
    //         {x: 5, y: 0},
    //         {x: 10, y: 0},
    //         {x: 15, y: 0},
    //         {x: 20, y: 0},
    //         {x: 25, y: 0},
    //         {x: 30, y: 0},
    //         {x: 35, y: 0},
    //         {x: 40, y: 0},
    //         {x: 45, y: 0},
    //         {x: 50, y: 0},
    //         {x: 55, y: 0},
    //         {x: 60, y: 0},
    //         {x: 65, y: 0},
    //         {x: 70, y: 0},
    //         {x: 75, y: 0},
    //         {x: 80, y: 0},
    //         {x: 85, y: 0},
    //         {x: 90, y: 0},
    //         {x: 95, y: 0},
    //         {x: 100, y: 0}
    //     ],
    //     [{x: 0, y: .3},
    //         {x: 5, y: .3},
    //         {x: 10, y: .3},
    //         {x: 15, y: .3},
    //         {x: 20, y: .3},
    //         {x: 25, y: .3},
    //         {x: 30, y: .3},
    //         {x: 35, y: .3},
    //         {x: 40, y: .3},
    //         {x: 45, y: .3},
    //         {x: 50, y: .3},
    //         {x: 55, y: .3},
    //         {x: 60, y: .3},
    //         {x: 65, y: .3},
    //         {x: 70, y: .3},
    //         {x: 75, y: .3},
    //         {x: 80, y: .3},
    //         {x: 85, y: .3},
    //         {x: 90, y: .3},
    //         {x: 95, y: .3},
    //         {x: 100, y: .3}
    //     ],
    //     [{x: 0, y: 0},
    //         {x: 5, y: 0},
    //         {x: 10, y: 0},
    //         {x: 15, y: 0},
    //         {x: 20, y: 0},
    //         {x: 25, y: 0},
    //         {x: 30, y: 0},
    //         {x: 35, y: 0},
    //         {x: 40, y: 0},
    //         {x: 45, y: 0},
    //         {x: 50, y: 0},
    //         {x: 55, y: 0},
    //         {x: 60, y: 0},
    //         {x: 65, y: 0},
    //         {x: 70, y: 0},
    //         {x: 75, y: 0},
    //         {x: 80, y: 0},
    //         {x: 85, y: 0},
    //         {x: 90, y: .16},
    //         {x: 95, y: .64},
    //         {x: 100, y: 1.2}
    //     ],
    //     [{x: 0, y: 0},
    //         {x: 5, y: 0},
    //         {x: 10, y: 0},
    //         {x: 15, y: 0},
    //         {x: 20, y: 0},
    //         {x: 25, y: 0},
    //         {x: 30, y: 0},
    //         {x: 35, y: 0},
    //         {x: 40, y: 0},
    //         {x: 45, y: 0},
    //         {x: 50, y: 0},
    //         {x: 55, y: 0},
    //         {x: 60, y: 0},
    //         {x: 65, y: 0},
    //         {x: 70, y: 0},
    //         {x: 75, y: 0},
    //         {x: 80, y: 0},
    //         {x: 85, y: 0},
    //         {x: 90, y: .16},
    //         {x: 95, y: 4.64},
    //         {x: 100, y: 9.2}
    //     ]
    //
    //
    // ],
    // contractProfit: [
    //     [{x: 5, y: -750}, {x: 10, y: 100}, {x: 15, y: 100}, {x: 20, y: 100}, {x: 25, y: 100}, {x: 30, y: 100},
    //         {x: 35, y: 100},
    //         {x: 40, y: 100},
    //         {x: 45, y: 100},
    //         {x: 50, y: 100},
    //         {x: 55, y: 100},
    //         {x: 60, y: 100},
    //         {x: 65, y: 100},
    //         {x: 70, y: 100},
    //         {x: 75, y: 100},
    //         {x: 80, y: 100},
    //         {x: 85, y: 100},
    //         {x: 90, y: 100},
    //         {x: 95, y: 100},
    //         {x: 100, y: 100}
    //     ],
    //     [{x: 5, y: -850}, {x: 10, y: 99}, {x: 15, y: 99}, {x: 20, y: 99}, {x: 25, y: 99}, {x: 30, y: 99},
    //         {x: 35, y: 99},
    //         {x: 40, y: 99},
    //         {x: 45, y: 99},
    //         {x: 50, y: 99},
    //         {x: 55, y: 99},
    //         {x: 60, y: 99},
    //         {x: 65, y: 99},
    //         {x: 70, y: 99},
    //         {x: 75, y: 99},
    //         {x: 80, y: 99},
    //         {x: 85, y: 99},
    //         {x: 90, y: 100},
    //         {x: 95, y: 100},
    //         {x: 100, y: 100}
    //     ],
    //     [{x: 5, y: -750}, {x: 10, y: 100}, {x: 15, y: 100}, {x: 20, y: 100}, {x: 25, y: 100}, {x: 30, y: 100},
    //         {x: 35, y: 100},
    //         {x: 40, y: 100},
    //         {x: 45, y: 100},
    //         {x: 50, y: 100},
    //         {x: 55, y: 100},
    //         {x: 60, y: 100},
    //         {x: 65, y: 100},
    //         {x: 70, y: 100},
    //         {x: 75, y: 100},
    //         {x: 80, y: 100},
    //         {x: 85, y: 100},
    //         {x: 90, y: 100},
    //         {x: 95, y: 100},
    //         {x: 100, y: 100}
    //     ],
    //     [{x: 5, y: -750}, {x: 10, y: 100}, {x: 15, y: 100}, {x: 20, y: 100}, {x: 25, y: 100}, {x: 30, y: 100},
    //         {x: 35, y: 100},
    //         {x: 40, y: 100},
    //         {x: 45, y: 100},
    //         {x: 50, y: 100},
    //         {x: 55, y: 100},
    //         {x: 60, y: 100},
    //         {x: 65, y: 100},
    //         {x: 70, y: 100},
    //         {x: 75, y: 100},
    //         {x: 80, y: 100},
    //         {x: 85, y: 100},
    //         {x: 90, y: 100},
    //         {x: 95, y: 100},
    //         {x: 100, y: 100}
    //     ],
    //     [{x: 5, y: -750}, {x: 10, y: 100}, {x: 15, y: 100}, {x: 20, y: 100}, {x: 25, y: 100}, {x: 30, y: 100},
    //         {x: 35, y: 100},
    //         {x: 40, y: 100},
    //         {x: 45, y: 100},
    //         {x: 50, y: 100},
    //         {x: 55, y: 100},
    //         {x: 60, y: 100},
    //         {x: 65, y: 100},
    //         {x: 70, y: 100},
    //         {x: 75, y: 100},
    //         {x: 80, y: 100},
    //         {x: 85, y: 100},
    //         {x: 90, y: 100},
    //         {x: 95, y: 100},
    //         {x: 100, y: 100}
    //     ],
    //
    // ],
    // contractExpectedLossByPeril: [
    //     [49.9, 61.5, 86.4, 100.2, 12.0],
    //     [79.9, 71.5, 106.4, 129.2, 44.0],
    //     [21.9, 31.5, 43.4, 66.2, 9.0],
    // ]
}
