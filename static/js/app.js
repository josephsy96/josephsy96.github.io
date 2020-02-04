//Import samples.json
d3.json("json_data/samples.json").then(function(sample_data) {
    
    console.log(sample_data);
    let sample = sample_data.samples

    let top_10 = sample.sort(function(a,b) {
        a.id - b.id});

    console.log(top_10);

    let id_total = sample.reduce((a,b) => a + b, 0);

        console.log(id_total);
    });

