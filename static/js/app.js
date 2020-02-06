//Declare global variables
let names = data.names;
let meta = data.metadata;
let sample = data.samples;

//Import samples.json
d3.json("json_data/samples.json").then(function(sample_data) {

    //Push Objects into universal arrays
    data = sample_data;
        
    return data;
});
//=================================================================
    //log arrays 
    console.log(names);
    console.log(meta);
    console.log(sample);
//=================================================================

    // //slice array so it's not a long line...
    // function sliced_values(name_list) {
    //     let iter_value = name_list;
    //     let sliced_name = [];
        
    //     for (let nm = 0; nm < sliced_name.length; nm++) {
    //         let n_index = iter_value[nm];
    //         if (sliced_name.indexOf(n_index) == -1) {
    //             sliced_name.push(n_index);
    //         }
    //     }
    //     return sliced_name;
    // }


//=================================================================
    //Makes the array vertical hopefully...
    // let v_names_array = sliced_values(name_id);
    // console.log(v_names_array);
//=================================================================
    //Append data into dropdown list
    // function append_dropdown(value) {
        
    //     let sel_data = d3.select("#selDataset");

    //     value.forEach((n) => {
    //         // console.log(n);
    //         let opt = sel_data.append("option");
    //             opt.text(n);
    //     });
    // }

    // //Load dropdown
    // append_dropdown(names);

    


console.log(names);

 //Append data into dropdown list
//  function append_dropdown(value) {
        
//     let sel_data = d3.select("#selDataset");

//     value.forEach((n) => {
//         // console.log(n);
//         let opt = sel_data.append("option");
//             opt.text(n);
//     });
// }

// //Load dropdown
// append_dropdown(names);


let selection = d3.select("#selDataset");
//Update values on change
function optionChanged(v) {
    let selection_value = v.value;
    console.log(selection_value);
}

