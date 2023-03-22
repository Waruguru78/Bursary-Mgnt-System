// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [{
    data: [41, 18, 26, 30]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: { 
    categories: ["Frere Town", "Kongowea", "Mkomani", "Nyali"],
  },
  yaxis: {
    title: {
      text: "Benefeciaries"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'New Beneficiaries',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Amount Disbursed',
    data: [11000, 32000, 45000, 32000, 34000, 52000, 41000]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'New Beneficiaries',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Amount Disbursed [Ksh]',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

// BAR CHART
var barChartOptions = {
  series: [{
    data: [4.1, 5.8, 6.2, 7.0, 4.5]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b74f",
    "#4f35a1"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: { 
    categories: ["Coast Girls", "St James", "Garissa High", "Butere Girls", "Nyeri High"],
  },
  yaxis: {
    title: {
      text: "Performance"
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#school-chart"), barChartOptions);
barChart.render();


// GENDER CHART
var areaChartOptions = {
  series: [{
    name: 'Male',
    data: [3110, 1140, 2800, 5100, 4200, 1090, 5100]
  }, {
    name: 'Female',
    data: [1000, 2000, 5000, 2000, 4000, 2000, 6000]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#246dec", "#7FFF00"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'New Beneficiaries',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Total number of Beneficiaries',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#gender-chart"), areaChartOptions);
areaChart.render();


