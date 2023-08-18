$(document).ready(function(){
    // navbar sticky scroll
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    
        // scroll-up show/hide
        if(this.scrollY > 500){
            $('scroll-up-btn').addClass("show");
        }else{
            $('scroll-up-btn').removeClass("show");
        }

    });

    // slide-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    })

    //Togle menu navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing text animation
    var typed = new Typed(".typing", {
        strings : ["Student", "Data Scientist", "Data Analyst"],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true
    });
    var typed = new Typed(".typing-2", {
        strings : ["Student", "Data Scientist", "Data Analyst"],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true
    });

    // owl carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
})

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        // subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_f09qivb";
    const templateID = "template_d7pw5ao";

    emailjs
        .send(serviceID,templateID,params)
        .then((res)=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            // document.getElementById("subject").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("Pesan Telah Terkirim");
        })
        .catch((err) => console.log(err));
}

