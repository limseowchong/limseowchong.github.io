let travel_diaries = {
    beijing: [
        'images/beijing1.JPG',
        'images/beijing2.JPG',
        'images/beijing3.JPG',
        'images/beijing4.JPG',
        'images/beijing5.JPG',
        'images/beijing6.JPG',
        'images/beijing7.JPG',
        'images/beijing8.JPG',
        'images/beijing9.JPG',
    ],
    africa: [
        'images/africa1.JPG',
        'images/africa2.JPG',
        'images/africa3.JPG',
        'images/africa4.JPG',
        'images/africa5.JPG',
        'images/africa6.JPG',
        'images/africa7.JPG',
        'images/africa8.JPG',
        'images/africa9.JPG',
    ],
    shanghai: [
        'images/shanghai1.JPG',
        'images/shanghai2.JPG',
        'images/shanghai3.JPG',
    ],
    germany: [
        'images/germany1.JPG',
        'images/germany2.JPG',
        'images/germany3.JPG',
        'images/germany4.JPG',
        'images/germany5.JPG',
        'images/germany6.JPG',
    ],
    austria: [
        'images/austria1.JPG',
        'images/austria2.JPG',
        'images/austria3.JPG',
        'images/austria4.JPG',
    ],
    switzerland: [
        'images/switzerland1.JPG',
        'images/switzerland2.JPG',
        'images/switzerland3.JPG',
        'images/switzerland4.JPG',
        'images/switzerland5.JPG',
    ],
    taiwan: [
        'images/taiwan1.JPG',
        'images/taiwan2.JPG',
        'images/taiwan3.jpeg',
        'images/taiwan4.jpeg',
        'images/taiwan5.JPG',
        'images/taiwan6.JPG',
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