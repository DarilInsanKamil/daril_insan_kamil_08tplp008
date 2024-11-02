var options = {
    series: [
        {
            name: 'Data Pegawai',
            data: [20]
        },
        {
            name: 'Menunggu Konfirmasi',
            data: [4]
        },
        {
            name: 'Absensi',
            data: [1]
        },
        {
            name: 'Lembur',
            data: [20]
        }
    ],
    chart: {
        type: 'bar',
        height: 250
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '60%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: true // Enabling labels to show the data values
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Data Pegawai', 'Menunggu Konfirmasi', 'Absensi', 'Lembur']
    },
    legend: {
        show: true,
        horizontalAlign: 'left',
        markers: {
            shape: 'circle'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val;
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#column"), options);
chart.render();
