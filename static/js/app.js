//Import samples.json
d3.json("json_data/samples.json").then(function(sample_data) {
    
    console.log(sample_data);
    let meta = sample_data.metadata

    let top_10 = meta.sort(function(a,b) {
        a.id - b.id});

    console.log(top_10);

    let id_total = 0;
     meta.forEach(function(id_num){
        id_total += meta.id;

        console.log(id_total);
    });

});