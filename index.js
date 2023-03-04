let toggle = false;
const navbar1 = () => {
    let val = document.getElementsByClassName('lines');
    let nav = document.getElementById('links');
    console.log(nav);
    if (!toggle) {
        val[0].style.transform = `rotate(45deg) translate(9px, 10px)`;
        val[1].style.transform = `rotate(-45deg) translate(-2px, 4px)`;
        val[2].style.opacity = '0'
        toggle = true;
        nav.style.transform = 'translateX(0%)';
    } else {
        val[0].style.transform = `rotate(0deg) translate(0px, 3px)`;
        val[1].style.transform = `rotate(0deg) translate(0px, 1px)`;
        val[2].style.opacity = '1';
        toggle = false;
        nav.style.transform = 'translateX(200%)'
    }


}
document.getElementById('hamburger').addEventListener('click', navbar1);

