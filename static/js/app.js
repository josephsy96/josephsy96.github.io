
//Import samples.json

function belly_data() {
    d3.json("json_data/samples.json").then(function(sample_data) {

    //Push Objects into universal arrays
    let names = sample_data.names;
    let meta = sample_data.metadata;
    let sample = sample_data.samples;   
    
//=================================================================
    //log arrays  
    console.log(names[0]);
    console.log(meta[0]);
    console.log(sample[0]); 
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

    let sel_value = d3.select("#selDataset").node().value;

    console.log(sel_value);

    //================================================================= 
    //grab demographic info
    function demo_info_graph(m_value) {   
        
        let meta_json = `'${meta}'`;

        let meta_id = JSON.parse(meta_json);
        
        let meta_selection = d3.select("#sample-metadata");
        //Filter id value
        // let meta_id = m_value.filter(md => md === sel_value);
        console.log(meta_id);

        //Filtered id array
        // let filtered_meta = meta_id.map(meta_id_pull => meta_id_pull);

        // filtered_meta.forEach((metas) => {
        //     let meta_ul = meta_selection.append("ul");
        //     // let meta_row = meta_tbody.append("tr");
        //     Object.entries(metas).forEach(([key, value]) => {
        //         let meta_li = meta_ul.append("li");
        //         meta_li.text(value);
        //     });
        // });

         
    }

    demo_info_graph(meta);

});

}
//=================================================================
//set a global selection (if that even makes sense...)
let selection = d3.select("#selDataset").node().value;
//=================================================================

//Update values on change
function optionChanged(v) {
    let selection_value = v;
    console.log(selection_value); 

    belly_data();
    //=================================================================  
}

optionChanged(selection);

