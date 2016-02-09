/*My 575 website*/
//initialize function called when the script loads
function initialize(){
    cities();
	addColumns();
	addEvents();
	jQueryAjax();
	debugAjax();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Minneapolis',
            population: 382578
        },
        {
            city: 'Lucerne',
            population: 81057
        },
        {
            city: 'Wuhan',
            population: 10220000
        },
        {
            city: 'Xian',
            population: 8467837
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
	
};

//call the initialize function when the document has loaded
$(document).ready(initialize);


// build a funcion for adding columns to the table
function addColumns(cityPop){
	var cityPop = [
        { 
            city: 'Minneapolis',
            population: 382578
        },
        {
            city: 'Lucerne',
            population: 81057
        },
        {
            city: 'Wuhan',
            population: 10220000
        },
        {
            city: 'Xian',
            population: 8467837
        }
    ];
// this loop is about testing population of each city and classifying them into different categories.
    $('tr').each(function(i){

    	if (i == 0){
// add a title called "CitySize" as the header of the extra column
    		$(this).append("<th>City Size</th>");
    	} else { 
          
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		}
//after classification, add a new category at the end of each row.
    		$(this).append("<td>" + citySize + "</td>");
		};
    	
	  });
	
	
};


function addEvents(){
// this function picks random rgb color each time when mouse moves over the table.
$('#mydiv').mouseover(function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
      	
	$(this).css('color', color);
		};
	});
	
	
		
// this function will pop out a window after user clicks on the table.
	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};


//define AJAX function
function jQueryAjax(){
    //define a variable to hold the data
    var mydata;

    //basic jQuery ajax method. One parameter is a URL string.
    $.ajax("data/MegaCities.GeoJSON", {
	//the settings object in the example above only has two properties: dataType and success.
        dataType: "json",
        success: function(response){
		// in this function, response(mydata) is a parameter.
            mydata = response;

            //check the data. And mydata could be accessed here.
            console.log(mydata);
        }
    });

    //check the data. mydata is local variavle within funcion jQueryAjax so it's couldn't be accessed here. So it will show "undefine" here.
    console.log(mydata);
};



function debugAjax(){
	
	var mydata;
  //basic jQuery ajax method. One parameter is a URL string.
	$.ajax("data/MegaCities.GeoJSON", {
		//The settings object in the example above only has two properties: dataType and success.
		dataType: "json",
		success: function(response){
		// in this funcion, mydata is a parameter.
			 mydata = response;
			 //add mydata as string to mydiv
			$('#mydiv').append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
		}
	});

	
};

