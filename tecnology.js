const data = [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./images/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./images/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./images/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
let display = document.querySelectorAll('.btn');
for(let i = 0;i < display.length;i++){
    display[i].onclick = function(){
        for(let j = 0;j < display.length;j++){
            if(display[j].classList.contains('act')){
                display[j].classList.remove('act');
            }
        }
        display[i].classList.add('act');
        let heading = document.querySelector('.heading-5');
        heading.innerHTML = data[i].name;
        let paragraph = document.querySelector('.para');
        paragraph.innerHTML = data[i].description;
        let image = document.querySelectorAll('.img1');
        for(let k = 0;k < image.length;k++){
          image[k].src = data[i].images.portrait;
        }
    }
}