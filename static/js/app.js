
//Import samples.json
function belly_data() {
    d3.json("json_data/samples.json").then(function(sample_data) {

    //Push Objects into universal arrays
    let names = sample_data.names;
    let meta = sample_data.metadata;
    let sample = sample_data.samples;   
    
//=================================================================
    //log arrays 
    console.log(names);
    console.log(meta);
    console.log(sample);
//=================================================================

    //Append data into dropdown list
    function append_dropdown(value) {
        
        let sel_data = d3.select("#selDataset");

        value.forEach((n) => {
            // console.log(n);
            let opt = sel_data.append("option");
                opt.text(n);
        });
    }

    // //Load dropdown
    append_dropdown(names);
});
}


let selection = d3.select("#selDataset").node().value;

//Update values on change
function optionChanged(v) {
    let selection_value = v;
    console.log(selection_value);

    belly_data();
}

optionChanged(selection);


