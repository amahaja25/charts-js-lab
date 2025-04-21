var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#f56a00",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#fa8b01",
                backgroundColor: "rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffad03",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#ffc243",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#ffcf70",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#cea7ee",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },{ 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#b67be6",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#9d4edd",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#72369d",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              },
              { 
                data: [
                {x: 55.8, y: 2836},
                ],
                label: "Nigeria",
                borderColor: "#461e5c",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });


        var ctx = document.getElementById('myPolarChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'polarArea',
            data: {
              labels: [
                'Sleep',
                'Paid Work',
                'TV and Radio',
                'Housework',
                'Eating and Drinking',
                'Other leisure activities',
                'Personal Care'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [542, 315, 127, 103, 100, 53, 52],
                backgroundColor: [
                  '#8ecae6',
                  '#219ebc',
                  '#126782',
                  '#023047',
                  '#ffb703',
                  '#fd9e02',
                  '#fb8500',
                ]
              }]
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Chart.js Polar Area Chart'
                }
              }
            }
          });