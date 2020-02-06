//Data arrays
// let names_array = [];
// let metadata_array = [];
// let samples_array = [];


//Import samples.json
d3.json("json_data/samples.json").then(function(sample_data) {

    let names_array = [];
    let metadata_array = [];
    let samples_array = [];

    //Push Objects into universal arrays
    let names = sample_data.names;
        names_array.push(names);

    let meta = sample_data.metadata;
        metadata_array.push(meta);

    let sample = sample_data.samples;
        samples_array.push(sample);
    
//=================================================================
    //log arrays 
    console.log(names_array);
    console.log(metadata_array);
    console.log(samples_array);
//=================================================================
    let sample_id = [];

    names_array.forEach((s_id) => {
        console.log(s_id[0]);
        sample_id.push(s_id[0]);
    });
 
    console.log(sample_id);
//=================================================================
    //slice array so it's not a long line...
    function sliced_values(name_list) {
        let iter_value = name_list;
        let sliced_name = [];
        // iter_value.forEach((nm) => {
        //     let n_index = iter_value[nm];
        //     if (sliced_name.indexOf(n_index) == -1) {
        //         sliced_name.push(n_index);
        //     }
        // });
        
        for (let nm = 0; nm < sliced_name.length; nm++) {
            let n_index = iter_value[nm];
            if (sliced_name.indexOf(n_index) == -1) {
                sliced_name.push(n_index);
            }
        }
        return sliced_name;
    }


//=================================================================
    //Makes the array vertical hopefully...
    // let v_names_array = sliced_values(samples_array);
    
//=================================================================
    //Append data into dropdown list
    function append_dropdown(value) {
        
        let sel_data = d3.select("#selDataset");

        // sel_data.html(" ");

        value.forEach((n) => {
            console.log(n);
            let opt = sel_data.append("option");
                opt.text(n);
        });
    }

    //Load dropdown
    append_dropdown(sample_id);


});

