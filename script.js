let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
      

	});
};







// servic management  


const details = gsap.utils.toArray(".hero-section-text:not(:first-child)")
const photos = gsap.utils.toArray(".hero-manage-section-photos:not(:first-child)")


gsap.set(photos, {yPercent:100})

const allPhotos = gsap.utils.toArray(".hero-section-photos")


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 500px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".hero-manage-property-section-gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail, index)=> {

	let headline = detail.querySelector("p")
	let animation = gsap.timeline()
	   .to(photos[index], {yPercent:0})
	   .set(allPhotos[index], {autoAlpha:0})
	ScrollTrigger.create({
		trigger:headline,
		start:"top 85%",
		end:"top 55%",
		animation:animation,
		scrub:1,
		// markers:true,

		
	})
})
	
	
  
  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
	  console.log("mobile")
  };
});


// nav ................

let tl = gsap.timeline()



tl.from("header",  {
	y:-100,
	duration:0.5,
})

tl.from("#e12weg1 h1 ",{
	x:-100,
	duration:0.5,
	opacity:0,
})

tl.from("#e12weg1 p ",{ 
	y:100, 
	duration:0.5,
	opacity:0,
})

gsap.from("#ahr456",{
	y:-100,
	duration:2,
	opacity:0,

})

tl.from("#af5475ae",{
	x:100,
	// duration:0.5,
	opacity:0,

})






// About 

gsap.from("#gs h1", {
	duration:0.5,
	opacity:0,
	x:30,
	duration:0.5,
	opacity:0,
	
	scrollTrigger: {
		trigger: "#gs h1",
		start: "top 100%",
		// end: "top 10% ",
		toggleActions: "play  play reverse",
		// markers: true
	},
	
  })


  gsap.from("#gs p", {
	duration:0.5,
	opacity:0,
	x:-30,
	duration:0.5,
	opacity:0,
	
	scrollTrigger: {
		trigger: "#gs p",
		start: "top 100%",
		// end: "top 10% ",
		// scrub:1,
		toggleActions: "play  play reverse",
		// markers: true
	},
	
  })

  gsap.from("#hlfs445", {
	duration:0.5,
	opacity:0,
	x:30,
	duration:0.5,
	opacity:0,
	
	scrollTrigger: {
		trigger: "#hlfs445",
		start: "top 100%",
		// end: "top 10% ",
		// scrub:1,
		toggleActions: "play  play reverse",
		// markers: true
	},
	
  })

//   why choose us........

gsap.from("#kjsg55 img", {
	duration:0.8,
	opacity:0,
	y:-30,
	opacity:0,
	
	scrollTrigger: {
		trigger: "#kjsg55 img",
		start: "top 80%",
		// end: "top 10% ",
		// scrub:1,
		toggleActions: "play  play reverse",
		// markers: true
	},
	
  })

  gsap.from("#kjsg55 h1", {
	duration:0.8,
	opacity:0,
	x:-30,
	opacity:0,
	
	scrollTrigger: {
		trigger: "#kjsg55 h1",
		start: "top 100%",
		// end: "top 10% ",
		// scrub:1,
		toggleActions: "play  play reverse",
		// markers: true
	},
	
  })

  gsap.from("#kjsg55 p", {
	duration:0.8,
	opacity:0,
	x:30,

	opacity:0,
	
	scrollTrigger: {
		trigger: "#kjsg55 p",
		start: "top 100%",
		// end: "top 10% ",
		// scrub:1,
		toggleActions: "play  play reverse",
		// markers: true
	},
	
  })


// Contact...................



gsap.from("#contact #daf56 input" , {
	duration:0.1,
	opacity:0,
	y:20,

	opacity:0,
	
	scrollTrigger: {
		trigger: "#daf56 input",
		start: "top 100%",
		// end: "top 10% ",
		// scrub:1,
		toggleActions: "play  play reverse",
		// markers: true
	},
	
  })


  gsap.from("#contact #daf56 textarea" , {
	duration:0.1,
	opacity:0,
	y:20,

	opacity:0,
	
	scrollTrigger: {
		trigger: "#daf56 textarea",
		start: "top 100%",
		// end: "top 10% ",
		// scrub:1,
		toggleActions: "play  play reverse",
		// markers: true
	},
	
  })


  gsap.from("#contact #daf56 i" , {
	duration:0.1,
	opacity:0,
	y:-30,

	opacity:0,
	
	scrollTrigger: {
		trigger: "#daf56 i",
		start: "top 100%",
		// end: "top 10% ",
		// scrub:1,
		toggleActions: "play  play reverse",
		// markers: true
	},
	
  })



