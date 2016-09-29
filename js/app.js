$(function(){
    handlers.init();
});


//Big Line Graph
var $line = $("#lineChart");
var $bar = $("#barChart");
var $donut = $("#donutChart");


//remove default chart legend
Chart.defaults.global.legend.display = false;

  var config = {
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
        spanGaps: false,
    };

        //Datasets
    var hourlyData = {
        label: "Hourly dataset",
        data: [1750, 250, 4000, 3100, 2000, 3300, 7150, 550, 2350, 1650, 750, 2550]
    };

    var dailyData = {
        label: "Daily dataset",
        data: [250, 2150, 1000, 4100, 2000, 2300, 1150, 550, 2350, 1650, 750, 1250]
    };

    var weeklyData = {
        label: "Weekly dataset",
        data: [50, 250, 4000, 3200, 2000, 6300, 3120, 550, 2350, 1230, 750, 4550]
    };

    var monthlyData = {
        label: "Monthly dataset",
        data: [1750, 3250, 4600, 3100, 2500, 3300, 5150, 550, 2350, 610, 230, 2550]
    };


var handlers = {
    createChart: function($element, $chartDataSet) {
        return myLineChart = new Chart($element, {
        type: 'line',
        data: {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
            datasets: $chartDataSet
          },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
          }
    });
  },
  
  toggleMobileMenu: function() {
        // click on the hamburger icon)
        $("#nav-toggle").on("click", function(e) {
            // stop default browser behavior
            e.preventDefault();
            // get the <body>. Does it currently have a class of "show? If it does, remove the class, which will collapse the left column.
            // If it does not have a class of "show", add it, which will expand the left column.
            $("body").toggleClass("show");
            $( ".col-main" ).toggleClass("toggle-width");
            $(".col-nav").toggleClass('transition');

            $(".col-nav").css("display", "inline");
    });
  },

  hideAlert: function() {
        //hide alert box when X is clicked  
        $(".alert").click(function() {
            $(this).hide();
        });
  },

  selectMenuOptions: function() {
        //select items in left menu
        $('.col-nav ul li').on('click', function() {
            $('.col-nav ul li').removeClass('green-border');
            $(this).addClass('green-border');
    });
  },

  //create functions to merge all datasets into config object
  loadHourlyData: function() {
      //create default chart and merge hourlyData into config object
      handlers.createChart($line, [$.extend(config, hourlyData)]);
      return false;
  },

  loadDailyData: function() {
        handlers.createChart($line, [$.extend(config, dailyData)]);
        return false;
  },

  loadWeeklyData: function() {
        handlers.createChart($line, [$.extend(config, weeklyData)]);
        return false;
  },

  loadMonthlyData: function() {
        handlers.createChart($line, [$.extend(config, monthlyData)]);
        return false;
  },

  toggleChartData: function() {
    //load corresponding data on click
    $('#hourlyBtn').on("click", handlers.loadHourlyData);
    $('#dailyBtn').on("click", handlers.loadDailyData);
    $('#weeklyBtn').on("click", handlers.loadWeeklyData);
    $('#monthlyBtn').on("click", handlers.loadMonthlyData);
  },

  toggleActiveClass: function() {
    //remove and add active class to chart menu on click
    $('.chart-links li a').on('click', function(e) {
        $('.chart-links li a').removeClass('active');
        $(this).addClass('active');
            e.preventDefault();
            return false;
        });
  },

  init: function(){
    handlers.loadHourlyData();
    handlers.toggleMobileMenu();
    handlers.hideAlert();
    handlers.selectMenuOptions();
    handlers.toggleChartData();
    handlers.toggleActiveClass();
  }

 
};



(function(){
    "use strict";
    
    //Bar Graph
    var myBarChart = new Chart($bar, {
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
})();

(function() {
    "use strict";

    //Donut Chart
    var myDoughnutChart = new Chart($donut, {
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
})();



//Form Validation for Message User section
var checkForm = (function (form) {
    if(form.search.value === '' || form.user_message.value === '') {
    alert("Error: Input is empty!");
    return false;
  }

  var reg = /^[\w ]+$/;

  if(!reg.test(form.search.value)) {
    alert("Error: Input contains invalid characters!");
    return false;
  }

  return true;
});



