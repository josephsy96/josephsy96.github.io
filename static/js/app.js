
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
    // //Load dropdown values
    append_dropdown(names);

    let sel_value = d3.select("#selDataset").node().value;

    console.log(sel_value);

//================================================================= 
    //grab demographic info
    function demo_info_graph(m_value) {     
        console.log(sel_value);
        
        //The demographic info box appends and outputs
        let meta_selection = d3.select("#sample-metadata");

        //refreshes the data
        meta_selection.html(" ");

        //Appends array of objects based on conditional 
        Object.entries(m_value).forEach(([key,t_value]) =>{
            //conditional statement
            if (t_value.id === parseInt(sel_value)) {
                console.log(t_value);
                let meta_ul = meta_selection.append("ul");
                Object.entries(t_value).forEach(([key, value]) => {
                            let meta_li = meta_ul.append("li");
                            meta_li.text([key + ": " + value]);
                        });
            }
        });       
    }
    //runs function to populate demographics box
    demo_info_graph(meta);
//================================================================= 


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

