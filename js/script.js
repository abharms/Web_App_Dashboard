// click on the ".open" link (the right arrow in the nav)
$("#nav-toggle").on("click", function(e) {
  // stop default browser behavior
  e.preventDefault();
  // get the <body>. Does it currently have a class of "open-nav"? If it does, remove the class, which will collapse the left column.' If it does not have a class of "open-nav", add it, which will expand the left column.
  $("nav").toggleClass("hide");
});


//Big Line Graph

var line = document.getElementById("lineChart");
var bar = document.getElementById("barChart");
var donut = document.getElementById("donutChart");

var myLineChart = new Chart(line, {
    type: 'line',
    data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
        {
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
    ],
  },
    options: {
         responsive: true,
         maintainAspectRatio: false, 
        }
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

















