let travel_diaries = {
    beijing: [
        'images/beijing1.jpg',
        'images/beijing2.jpg',
        'images/beijing3.jpg',
        'images/beijing4.jpg',
        'images/beijing5.jpg',
        'images/beijing6.jpg',
        'images/beijing7.jpg',
        'images/beijing8.jpg',
        'images/beijing9.jpg',
    ],
    africa: [
        'images/africa1.jpg',
        'images/africa2.jpg',
        'images/africa3.jpg',
        'images/africa4.jpg',
        'images/africa5.jpg',
        'images/africa6.jpg',
        'images/africa7.jpg',
        'images/africa8.jpg',
        'images/africa9.jpg',
    ],
    shanghai: [
        'images/shanghai1.jpg',
        'images/shanghai2.jpg',
        'images/shanghai3.jpg',
    ],
    germany: [
        'images/germany1.jpg',
        'images/germany2.jpg',
        'images/germany3.jpg',
        'images/germany4.jpg',
        'images/germany5.jpg',
        'images/germany6.jpg',
    ],
    austria: [
        'images/austria1.jpg',
        'images/austria2.jpg',
        'images/austria3.jpg',
        'images/austria4.jpg',
    ],
    switzerland: [
        'images/switzerland1.jpg',
        'images/switzerland2.jpg',
        'images/switzerland3.jpg',
        'images/switzerland4.jpg',
        'images/switzerland5.jpg',
    ],
    taiwan: [
        'images/taiwan1.jpg',
        'images/taiwan2.jpg',
        'images/taiwan3.jpeg',
        'images/taiwan4.jpeg',
        'images/taiwan5.jpg',
        'images/taiwan6.jpg',
    ]
}


function load_images(country) {

    var btn_grp = document.getElementById('travel-btn-grp')
    for (btn of btn_grp.children) {

        btn.className = 'btn btn-outline-primary'
        
    }

    var country_btn = document.getElementById(country)
    country_btn.className += ' active'

    var active = 'active'

    var temp_str = ''
    for (images of travel_diaries[country]) {

        temp_str += `
            <div class="carousel-item ${active}">
                <img src="${images}" style="width: auto; height: 500px"  alt="...">
            </div>
        `
        
        active = ''
    }
    
    document.getElementsByClassName('carousel-inner')[0].innerHTML = temp_str
}