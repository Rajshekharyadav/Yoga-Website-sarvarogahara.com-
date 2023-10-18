/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))







/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*============= Scroll Reveal Animation ===================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})
sr.reveal('.home_header, .section_title,  .section__title, .video__button', {delay: 600})
sr.reveal('.home_footer', {delay: 700})
sr.reveal('.home_img', {delay: 900, origin:'top'})

sr.reveal('.sponsor_img, .trick__img, .portfolio__img, .videoFile', {origin:'top', interval:100})
sr.reveal('.services_data , .about_me_animate, .new__tag, .left', {origin:'left', interval:100})
sr.reveal('.services_img, .about_me_img, .right',{origin:'right'})





/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*==================== VIDEO 2 ====================*/
const videoFile2 = document.getElementById('video-file_2'),
      videoButton2 = document.getElementById('video-button_2'),
      videoIcon2 = document.getElementById('video-icon_2')

function playPause2(){ 
    if (videoFile2.paused){
        // Play video
        videoFile2.play()
        // We change the icon
        videoIcon2.classList.add('ri-pause-line')
        videoIcon2.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile2.pause(); 
        // We change the icon
        videoIcon2.classList.remove('ri-pause-line')
        videoIcon2.classList.add('ri-play-line')

    }
}
videoButton2.addEventListener('click', playPause2)

function finalVideo2(){
    // Video ends, icon change
    videoIcon2.classList.remove('ri-pause-line')
    videoIcon2.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile2.addEventListener('ended', finalVideo2)


/*==================== VIDEO 3 ====================*/
const videoFile3 = document.getElementById('video-file_3'),
      videoButton3 = document.getElementById('video-button_3'),
      videoIcon3 = document.getElementById('video-icon_3')

function playPause3(){ 
    if (videoFile3.paused){
        // Play video
        videoFile3.play()
        // We change the icon
        videoIcon3.classList.add('ri-pause-line')
        videoIcon3.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile3.pause(); 
        // We change the icon
        videoIcon3.classList.remove('ri-pause-line')
        videoIcon3.classList.add('ri-play-line')

    }
}
videoButton3.addEventListener('click', playPause3)

function finalVideo3(){
    // Video ends, icon change
    videoIcon3.classList.remove('ri-pause-line')
    videoIcon3.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile3.addEventListener('ended', finalVideo3)



/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});

// --------------PopUp-------------
document.getElementById('book1').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
})



// ---------------------Contact Us------------------------
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_k32kni6";
    const templateID = "template_1qw3ubj";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  
  
