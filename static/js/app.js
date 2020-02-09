
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
    function build_bar_plot(otu) {
        console.log(otu[0]);

        let bars = d3.select("#bar");

        Object.entries(otu).forEach(([key,otu_value]) =>{
            if (otu_value.id === sel_value) {
                console.log(otu_value.sample_values);

                let new_otu_sample = otu_value.sample_values; 
                //So much room for error, but will fix later on
                let otu_id = otu_value.otu_ids.slice(0,10);
                    console.log(otu_id);

                //Creates the stupid labels that didn't work earlier
                let list = [];
                otu_id.forEach((io) => {
                    let lm = "OTU " + '' + io;
                    list.push(lm);
                    console.log(lm); 
                });

                console.log(list);
                 
                //Hover labels for OTUs
                let otu_names = otu_value.otu_labels.slice(0,10).reverse();

                console.log(new_otu_sample);

                //sort sample values
                let top_otu = new_otu_sample.sort((a,b) => {
                    a.sample_values > b.sample_values ? 1 : -1;
                }).slice(0,10).reverse();
            
                let otu_trace = {
                    x: top_otu,
                    y: list.reverse(),
                    text: otu_names,
                    type: "bar",
                    orientation: "h"
                };

                let otu_data = [otu_trace];

                let hor_bar_layout = {
                    title: "Top OTU Sample Values",
                    yaxis: { title : "OTU ID"},
                    xaxis: { title : "Number of Samples"}
                };

                Plotly.newPlot("bar", otu_data, hor_bar_layout);
            }
        })


    }

    build_bar_plot(sample);
//=================================================================
    function Bubble_Chart(bubble) {

        //Creates random colors
        function getRandomColor() {
            let color_values = '0123456789ABCDEF';
            let color = '#';
            for (let c = 0; c < 6; c++) {
              color += color_values[Math.floor(Math.random() * 16)];
            }
            return color;
          }


        //=================================================================
          Object.entries(bubble).forEach(([key,bubble_value]) =>{
            if (bubble_value.id === sel_value) {

                let new_otu_sample = bubble_value.sample_values; 


                //So much room for error, but will fix later on
                let otu_id = bubble_value.otu_ids;
                    console.log(otu_id);

                //Hover Text Labels
                let otu_names = bubble_value.otu_labels;

                console.log(new_otu_sample);

                let color_list = [];
                otu_id.forEach((a) =>{
                   let lm = getRandomColor();
                   color_list.push(lm);
                });

                console.log(color_list);


                let bubble_trace = {
                    x: otu_id,
                    y: new_otu_sample,
                    text: otu_names,
                    mode: 'markers',
                    marker: {
                        color: color_list,
                        size: new_otu_sample
                    }
                };

                let otu_data = [bubble_trace];

                let bubble_layout = {
                    title: "OTU Samples",
                    xaxis: { title : "OTU ID"},
                    yaxis: { title : "Number of Samples"}

                };

                Plotly.newPlot("bubble", otu_data, bubble_layout);
            }
        })


    }

    Bubble_Chart(sample);
});}

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

