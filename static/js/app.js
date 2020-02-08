
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
    function demo_info_graph(m) {   
        //grab demographic info

        let demo_list = [];

        for (let info = 0; info < m.length; info++) {
            console.log(m[info]);
                if (m[info] === sel_value) {
                demo_list.push(m[info]);
            }
        }
        console.log(demo_list);
         
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

