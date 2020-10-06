import results from './results'
import meta from './meta'
import inputs from './inputs'
import programs from './programs'
import perils from './perils'


//    GET   ../ils/project...
// returns this object here..

export default {

    id:'uniqueID',

    // 1: get name of branches, user, date, type
    // 2: GET /project.....load everything BUT inputs. (i.e. data)

    meta: meta,
    // GIT separate files for
    inputs: inputs,    //inputs: refactoring this so all input children are loaded independently.  i.e. each structure load is a separate ASYNC call.

    currentStructure:null,

    data : {
        nav: {
            date:null
        },
        defaults: {},
        // perils: perils,      // async for all fields in here...  MOVED.  now just exists in static file.
                    // this should eventually be read by CAT data service
        settings:{},
        //add other constants...?
    },
    results:results

}




// // IN GIT...
// branchOrMaster = {
//     id:'??mongo ID',
//     meta: meta,
//     inputs: 'GIT URL',   // e.g. git/ils/myBranch/inputs.json is a directory.
//     // e.g. git/ils/myBranch/inputs/structures   --> return array of structure names.
//     // e.g. GET git/ils/myBranch/inputs/structures/<structure1>
//
//
//     //  structures: [
//     //   structure1.json.
//     //   structure2.json.
//     //   structure3.json.
//     //   structure4.json
//     //
//
//     //
//     // stuff
//     //     inputs
//     //        structures
//     //             structure1.json   //
//     //             structure2.json
//     //             structure3.json
//     //     +       structure4.json     //  add this file for contract analysis
//
//
//     data : {
//         defaults: {},
//         //
//         programs: programs,   // e.g. git/ils/myBranch/programs.json
//         perils: perils,      // e.g. git/ils/myBranch/perils.json
//         //add other constants...?
//         //classes: classes
//     },
//
// }
