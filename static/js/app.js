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
    

//Append data into dropdown list
let select_data = d3.select("#selDataset");

select_data.forEach(names_array, function(key,value) {
    let select = d3.select("select", {
        value: value,
        text: value
    });
    select_data.append(select);
});

