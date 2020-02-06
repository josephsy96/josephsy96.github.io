

//Import samples.json
d3.json("json_data/samples.json").then(function(sample_data) {
    //Data arrays
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

    // init();
    console.log(names_array);

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

    //Makes the array vertical hopefully...
    let v_names_array = sliced_values(names_array);

    //Append data into dropdown list
    function append_dropdown(id, value) {
        
        let sel_data = d3.select(id);

        // sel_data.html(" ");

        value.forEach((n) => {
            console.log(n);
            let opt = sel_data.append("option");
                opt.text(n);
        });
    }

    //Load dropdown
    append_dropdown("#selDataset", v_names_array);
});



