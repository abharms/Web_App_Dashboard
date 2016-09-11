$(document).ready(function() {
    handlers.toggleMobileMenu();
    handlers.hideAlert();
    handlers.selectMenuOptions();
})




var handlers = {
    toggleMobileMenu: function() {
        // click on the hamburger icon)
        $("#nav-toggle").on("click", function(e) {
        // stop default browser behavior
        e.preventDefault();
        // get the <body>. Does it currently have a class of "show? If it does, remove the class, which will collapse the left column.
        // If it does not have a class of "show", add it, which will expand the left column.
        $("body").toggleClass("show");
        $( ".col-main" ).toggleClass("toggle-width");
        $(".col-nav").toggleClass('hide');
    });
  },
  hideAlert: function() {    
        $(".alert").hide();
  },
  selectMenuOptions: function() {
        $('.col-nav ul li').on('click', function() {
        $('.col-nav ul li').removeClass('green-border');
        $(this).addClass('green-border').fadeIn('slow');
    });
  }
}










//Big Line Graph

var line = document.getElementById("lineChart");
var bar = document.getElementById("barChart");
var donut = document.getElementById("donutChart");

//remove default chart legend
Chart.defaults.global.legend.display = false;


var hourly = {
                label: "My First dataset",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(116,119,191,0.2)",
                borderColor: "rgba(116,119,191,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(116,119,191,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 6,
                pointHitRadius: 10,
                data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
                spanGaps: false,         
            }

var daily = {
                label: "My Second dataset",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(116,119,191,0.2)",
                borderColor: "rgba(116,119,191,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(116,119,191,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 6,
                pointHitRadius: 10,
                data: [1750, 250, 4000, 3100, 2000, 3300, 7150, 550, 2350, 1650, 750, 2550],
                spanGaps: false,
            }

 function createChart(element, datasets) {
    return myLineChart = new Chart(element, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: datasets,
  },
    options: {
         responsive: true,
         maintainAspectRatio: false, 
        }
  });
 }

 var myLineChart = createChart(line, [hourly, daily]);



var secondChart = myLineChart.data.datasets[1];


//Click button to remove second dataset
$('#hourlyBtn').on("click", function(){
    createChart(line, [hourly]);
    return false;
});

var dailyBtn = $('#dailyBtn');

dailyBtn.on("click", function(){
    createChart(line, [daily]);
    return false;
});



//Bar Graph


var myBarChart = new Chart(bar, {
    type: 'bar',
    data:  {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [75, 100, 175, 125, 225, 200, 100],
        }
    ]
  },
    options: {
         responsive: true,
         maintainAspectRatio: false, 
        }
});


//Donut Chart

var myDoughnutChart = new Chart(donut, {
    type: 'doughnut',
    data: {
        labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
     }   
});

//Message User


// Get the <datalist> and <input> elements.
var dataList = document.getElementById('json-datalist');
var input = document.getElementById('ajax');



// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function(response) {
  if (request.readyState === 4) {
    if (request.status === 200) {
      // Parse the JSON
      var jsonOptions = JSON.parse(request.responseText);

      // Loop over the JSON array.
      jsonOptions.forEach(function(item) {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item;
        // Add the <option> element to the <datalist>.
        dataList.appendChild(option);
      });

      // Update the placeholder text.
      input.placeholder = "Search";
    } else {
      // An error occured :(
      input.placeholder = "Couldn't load datalist options :(";
    }
  }
};

// Update the placeholder text.
input.placeholder = "Loading options...";

// Set up and make the request.
request.open('GET', 'js/html-elements.json', true);
request.send();












// $.getJSON('js/html-elements.json', function(data) {
//     $dataList.html('');
//     var $options = $();
//     data.forEach(function(item) {
        
//         var $option = $('<option>' + item + '</option>');
//         $option.val(item);
//         $options.add($option);


//     });
    
//     $($input).keyup(function() {
//             $(data).each(function() {
//                 if($(this).text().indexOf($input.val().toLowerCase()) > -1) {
//                     $dataList.append($options);
//                 } else {
                   
//                 }
            
//             });
//         });
    
// });





//Form Validation
function checkForm(form) {
    if(form.search.value === '' || form.user_message.value === '') {
    alert("Error: Input is empty!");
    form.search.focus();
    return false;
  }

  var reg = /^[\w ]+$/;

  if(!reg.test(form.search.value)) {
    alert("Error: Input contains invalid characters!");
    form.search.focus();
    return false;
  }

  return true;
}















