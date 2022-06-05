import React from "react";


const InfiniteScroll = () => {

    let options = {
        root: document.querySelector('#container'),
        rootMargin: '0px',
        threshold: 1.0
    }
    
    let observer = new IntersectionObserver(callback, options);

    let targhet = document.querySelector('.bg-last')
    observer.observe(targhet)

    let callback = (entries, observer) =>{
        entries.forEach(entry =>{
            if(targhet.isIntersecting)
            { document.querySelector('.bg-first')}
        })
    }

    return(

        <div>

        </div>
    )
}

export default InfiniteScroll;