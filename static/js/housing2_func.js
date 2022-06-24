
function nav_left() {
    $("#left_menu_nav_container").toggleClass("s_width-7")
    $(".m").toggleClass("m_width-93")

    $(".logo-w").toggleClass("logo-ws")
    $(".chev-left").toggleClass("chev-right")
    $(".info").toggleClass("d-n")

    $('button', $('#left_menu_nav_container')).each(function () {
        $(this).toggleClass("small")
        $(this).toggleClass("big")

    });

    $(".dropdown").toggleClass("small_dropdown").toggleClass("dropend")
    $("#dropdownMenuButton1").toggleClass("popup").toggleClass("notice")

    $(".more-info").toggleClass("d-y")
}

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