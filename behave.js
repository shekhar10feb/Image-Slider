// IIFE

(function() {

    const images = [
        'pic-1', 'pic-2', 'pic-3', 'pic-4',
        'pic-5', 'pic-6', 'pic-7', 'pic-8',
        'pic-9','pic-11','pic-12',
        'pic-13','pic-14','pic-15','pic-16',
        'pic-17','pic-18','pic-19','pic-20',
        'pic-21','pic-22','pic-23','pic-24',
        'pic-25','pic-26','pic-27'
    ];

    const placeName = [
        'Chennai', 'Maharashtra', 'Almora', 'Andaman and Nicobar Islands',
        'Amritsar', 'Badrinath', 'Chennai', 'Darjeeling',
        'Agra','Mawsynram','Goa',
        'Mumbai','Ladakh','Ooty','Manali',
        'Kerala','Patna','Mysore','Macleod Ganj',
        'Rajasthan','Varanasi','Rishikesh','Puri',
        'Shillong','Shimla','Tawang'
    ];

    const buttons = document.querySelectorAll('.btn');
    const imagesDiv = document.querySelector('.imagesDiv');
    const name = document.querySelector('.name');

    imagesDiv.style.backgroundImage = `url('./images/flag.jpg')`;
    imagesDiv.style.backgroundPosition = "center"; 
    imagesDiv.style.backgroundRepeat = "no-repeat";
    imagesDiv.style.backgroundSize = "contain";

    name.style.display = "none";

    let counter = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if(button.classList.contains('btn-left')) {
                counter--;
                if(counter < 0) {
                    counter = images.length-1;
                }
                imageFunc();   
            }

            if(button.classList.contains('btn-right')) {
                counter++;
                if(counter > images.length-1) {
                    counter = 0;
                }
                imageFunc();
            }
        })
    })

    function imageFunc(){
        imagesDiv.style.backgroundImage = `url('./images/${images[counter]}.jpg')`;
        imagesDiv.style.backgroundPosition = "center"; 
        imagesDiv.style.backgroundRepeat = "no-repeat";
        imagesDiv.style.backgroundSize = "contain";
        
        name.style.display = "block";
        name.innerHTML = `${placeName[counter]}`;
    }
})();