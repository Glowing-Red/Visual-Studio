document.querySelectorAll('.Blog-post h5').forEach((h5) => {
    const contentLength = h5.textContent.length;
    if (contentLength < 20) {
        h5.style.fontSize = '24px';
    } else if (contentLength < 40) {
        h5.style.fontSize = '20px';
    } else {
        h5.style.fontSize = '16px';
    }
});

document.querySelectorAll('.Blog-post').forEach((Blog) => {
    getComputedStyle(Blog.querySelector('a'), '::before');
    Blog.querySelector('a').style.setProperty('--background-image', `url('${Blog.querySelector('img').src}')`);
});

function handleResize() {
    document.querySelectorAll('.Blog-post h5').forEach((h5) => {
        h5.style.paddingBottom = (h5.offsetHeight/3 + h5.offsetWidth/3)/1.5 + 'px';
    });
}

window.addEventListener("resize", handleResize);

handleResize();
  

// GSAP Animation
if (!sessionStorage.getItem('Intro')) {
    sessionStorage.setItem('Intro', 'true');

    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    document.querySelectorAll('.hide').forEach((hidden) => {
        hidden.style.setProperty('--hide-opacity', `0`);
    });

    let timeline = gsap.timeline();
    timeline.from(".title h1", {
        y: window.innerHeight - document.querySelector(".title h1").getBoundingClientRect().top,
        duration: 1,
    },"1.25");
    timeline.from(".title h2", {
        y: window.innerHeight - document.querySelector(".title h2").getBoundingClientRect().top,
        duration: 1,
    },"1");

    setTimeout(function() {
        document.querySelectorAll('.hide').forEach((hidden) => {
            hidden.style.setProperty('--hide-transition', `opacity 2s ease-in-out`);
        });
        document.querySelectorAll(".hide").forEach((hidden) => {
            hidden.style.opacity = 1;
        });
        setTimeout(function() {
            document.body.style.overflowY = "scroll";
            document.body.style.overflowX = "hidden";
        }, 2050)
    }, 2000);
} else {
    document.querySelectorAll('.hide').forEach((hidden) => {
        hidden.style.setProperty('--hide-transition', `opacity 0s ease-in-out`);
    });
    document.querySelectorAll(".hide").forEach((hidden) => {
        hidden.style.opacity = 1;
    });
    
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
}