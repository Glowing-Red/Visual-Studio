document.querySelectorAll(".nav-item").forEach((item) => {
    const Colour = item.style.color;

    item.addEventListener('mousedown', () => {
        item.style.color = `rgba(255, 0, 0, 1)`;
    });
    item.addEventListener('mouseup', () => {
        item.style.color = Colour;
    });
    item.addEventListener('mouseover', function(event) {
        item.style.color = `rgba(0, 0, 0, 0.65)`;
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = Colour;
    });

    item.addEventListener('touchstart', () => {
        item.style.color = `rgba(255, 0, 0, 1)`;
    });
    item.addEventListener('touchend', () => {
        item.style.color = Colour;
    });
});

document.querySelectorAll(".About-me").forEach((About) => {
    const About_A = About.querySelector('a');
    const About_h4 = About.querySelector('h4');

    function down() {
        About.style.boxShadow = `0 0 25px #920002`;
        About_A.style.backgroundColor = `#920002`;
        About_h4.style.textShadow = `0 0 10px #920002`;
    }
    function up() {
        About.style.boxShadow = `0 0 10px #cd0003`;
        About_A.style.backgroundColor = `#cd0003`;
        About_h4.style.textShadow = `0 0 15px #cd0003`;
    }

    About_A.addEventListener('mousedown', down);
    About_A.addEventListener('mouseup', up);
    About_A.addEventListener('mouseenter', () => {
        About.style.boxShadow = `0 0 20px #B80104`;
        About_A.style.backgroundColor = `#B80104`;
        About_h4.style.textShadow = `0 0 5px #B80104`;
    });
    About_A.addEventListener('mouseleave', () => {
        About.style.boxShadow = `0 0 10px #cd0003`;
        About_A.style.backgroundColor = `#cd0003`;
        About_h4.style.textShadow = `0 0 15px #cd0003`;
    });
    
    About_A.addEventListener('touchstart', down);
    About_A.addEventListener('touchend', up);
});

document.querySelectorAll('.Continue-Reading').forEach((Continue) => {
    getComputedStyle(Continue, '::before');
    Continue.addEventListener('mousedown', () => {
        Continue.style.setProperty('--before-filter', `blur(5.5px)`);
    });
    Continue.addEventListener('mouseup', () => {
        Continue.style.setProperty('--before-filter', `blur(4px)`);
    });
    Continue.addEventListener('mouseenter', () => {
        Continue.style.setProperty('--before-filter', `blur(4px)`);
    });
    Continue.addEventListener('mouseleave', () => {
        Continue.style.setProperty('--before-filter', `blur(2.5px)`);
    });
});