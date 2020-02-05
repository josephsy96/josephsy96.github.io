//Data arrays
const names_array = [];
let metadata_array = [];
let samples_array = [];

//Import samples.json
d3.json("json_data/samples.json").then(function(sample_data) {
    
    //Push Objects into universal arrays
    let names = sample_data.names;
        names_array.push(names);

    let meta = sample_data.metadata;
        metadata_array.push(meta);

    let sample = sample_data.samples;
        samples_array.push(sample);
});

// init();


//Append data into dropdown list
d3.selectAll("#selDataset").on("change", optionChanged);

// function optionChanged() {
//     let sel_data = d3.selectAll("select")
//     names_array.forEach((n) => {
//         let opt = sel_data.append("options");
//         Object.entries(n).forEach(([key,value]) => {
//             opt.text(value);
//         });
//     });




//     // for (let n_i = 0; names_array.length; n_i++) {
//     //     let drop_sel = names_array[n_i];
//     //     let select = d3.select("select");
//     //     select.text = drop_sel;
//     //     select.value = drop_sel;
//     //     select_data.append(select);
//     }

let sel_data = d3.selectAll("select")

    names_array.forEach((n) => {
        let opt = sel_data.append("options");
            opt.text(n);
    });
