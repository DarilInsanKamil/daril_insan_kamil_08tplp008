var options = {
    series: [
        {
            name: 'Data Pegawai',
            data: [0, 50] // Example data point for shipping cost
        },
        {
            name: 'Menunggu Konfirmasi',
            data: [2, 4] // Example data point
        },
        {
            name: 'Absensi',
            data: [0, 5] // Example data point for vehicle maintenance
        },
        {
            name: 'Lembur',
            data: [1, 20] // Example data point
        }
    ],
    chart: {
        height: 250,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Data Kategori',
        align: 'left' // Keeping the title alignment
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // alternating row colors
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Data Pegawai', 'Menunggu Konfirmasi', 'Absensi', 'Lembur'], // Matching x-axis categories with column chart
    }
};

var chart = new ApexCharts(document.querySelector("#line"), options);
chart.render();
