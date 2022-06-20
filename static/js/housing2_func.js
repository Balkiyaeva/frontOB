
function windowPopup(id) {
    const element = document.getElementById(id);
    const el_style = element.style;
    if (el_style.visibility === "hidden" && el_style.opacity === "0") {
        el_style.visibility = "visible";
        el_style.opacity = "1";
    } else {
        el_style.visibility = "hidden";
        el_style.opacity = "0";
    }
}

function graphic(){
    const ctx = document.getElementById("doughnutChart");
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['в продаже', 'продано', 'забронировано'],
            datasets: [{
                data: [456, 328, 241],
                backgroundColor: [
                    '#19181B',
                    '#008F91',
                    '#F7C794'
                ],
            }],
        },
        options: {
            cutout: '70%',
            rotation: 180,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        padding: 20,
                    },
                }
            }
        }
    });
}