document.querySelectorAll(".nav-item").forEach((item) => {
    getComputedStyle(item, ':hover');
    const Colour = item.style.color;
    item.addEventListener('mousedown', () => {
        item.style.color = `rgba(255, 0, 0, 1)`;
    });
    item.addEventListener('mouseup', () => {
        item.style.color = Colour;
    });
    item.addEventListener('mouseleave', () => {
        item.style.color = Colour;
    });
});

const About = document.querySelector(".About-me");
if (About) {
    const About_A = About.querySelector('a');
    const About_h4 = About.querySelector('h4');

    About_A.addEventListener('mousedown', () => {
        About.style.boxShadow = `0 0 25px #920002`;
        About_A.style.backgroundColor = `#920002`;
        About_h4.style.textShadow = `0 0 10px #920002`;
    });
    About_A.addEventListener('mouseup', () => {
        About.style.boxShadow = `0 0 10px #cd0003`;
        About_A.style.backgroundColor = `#cd0003`;
        About_h4.style.textShadow = `0 0 15px #cd0003`;
    });
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
}

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