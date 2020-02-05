//Data arrays
let names_array = [];
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

function append_dropdown(id, value) {
    
    let sel_data = d3.select(id);

    sel_data.html(" ");

    value.forEach((n) => {
        let opt = sel_data.append("options");
            opt.text(n);
    });
}

//Load dropdown
append_dropdown("#selDataset", names_array);

