const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
const hiddenrightElements = document.querySelectorAll('.hidden-right');
const hiddenleftElements = document.querySelectorAll('.hidden-left');
const hiddenopacityElements = document.querySelectorAll('.hidden-opacity');
hiddenElements.forEach((el) => observer.observe(el));
hiddenrightElements.forEach((el) => observer.observe(el));
hiddenleftElements.forEach((el) => observer.observe(el));
hiddenopacityElements.forEach((el) => observer.observe(el));
