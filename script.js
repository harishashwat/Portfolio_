

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// minicircle_mouse_follower

function minicirclemousefollower(){
    window.addEventListener("mousemove",function (dets){
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`
    })
}

minicirclemousefollower()


document.querySelectorAll('.elem').forEach(function(elem){
    elem.addEventListener('mousemove',function(dets){
       var diff = dets.
       
        gsap.to(elem.querySelector('img'),{
            opacity: 1,
            ease: Power1
        })
    })
 })