import Vue from 'vue';

/*
    Animation directive
    Recieves threshold, duration & animation name
*/
const animationObserver = options => new IntersectionObserver(( entries ) => {
    var offset = options.threshold
    var duration = '.3s'

    entries.forEach(( entry) => {
        if( options.duration ) duration = options.duration

        if( entry.intersectionRatio >= offset ) {
            entry.target.style.opacity = 1
            entry.target.style.animation = `${options.animation} ${duration} ease-in-out forwards`
        }
    });
}, options);

Vue.directive( 'animate' , {
    inserted( element, binding ) {
        element.style.opacity = 0
        const options = binding.value || {}
        const observer = animationObserver( options )
        observer.observe( element );
    }
});


/*
    Add class directive
    Recieves threshold & class name
*/
const addClassObserver = options => new IntersectionObserver(( entries ) => {
    var offset = options.threshold
    var classToAdd = options.class

    entries.forEach(( entry) => {
        if( entry.intersectionRatio >= offset ) entry.target.classList.add( classToAdd )
    });
}, options);

Vue.directive( 'addClass' , {
    inserted( element, binding ) {
        const options = binding.value || {}
        const observer = addClassObserver( options )
        observer.observe( element );
    }
});
