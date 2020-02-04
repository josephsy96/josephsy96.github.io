//Import samples.json
d3.json("json_data/samples.json").then(function(sample_data) {
    
    console.log(sample_data);
    let meta = sample_data.metadata

    let top_10 = meta.sort(function(a,b) {
        a.id - b.id});

    console.log(top_10);



});