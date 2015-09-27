$(document).ready(function() {
            $.get('data/data_gtd_price_index.csv', function(csv) {
                $('#container_gtd_prices_recovering').highcharts({
                    chart: {
                        type: 'line'
                    },
                    data: {
                        csv: csv
                    },
                    title: {
                        text: 'Global Dairy Prices Recovering',
                        style: {
                            "fontSize": "25px"
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Global Dairy Trade Price Index'
                        }
                    }
                });
            });
			 $.get('data/data_sector_breakdown_pie.csv', function(csv) {
                $('#data_sector_breakdown_pie').highcharts({
                    chart: {
                        type: 'pie'
                    },
                    data: {
                        csv: csv
                    },
                    title: {
                        text: 'Sector Weights',
                        style: {
                            "fontSize": "25px"
                        }
                    },
                    tooltip: {
                        pointFormat: 'Percent = <b>{point.percentage:.1f}%</b>',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                            "fontWeight": "normal",
                            "fontSize": "15px"
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<p>{point.name}</p>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            }
                        },
                        series: {
                            dataLabels: {
                                style: {
                                    "fontSize": "15px",
                                    "fontWeight": "normal"
                                }
                            }
                        }
                    }
                });
            });
        });