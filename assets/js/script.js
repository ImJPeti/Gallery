
let arrowRight = document.getElementById("arrow-right");
let arrowLeft = document.getElementById("arrow-left");
let thumbnailImage = document.getElementById("imgThumbnail");
let thumbnailContainer = document.getElementById("thumbIcon");


let imageDetails = [
  {
    id: 0,
    title: "Gogh",
    desc: "asdbasdgagsdgasdgasg",
    img: "assets/img/gogh.jpg",
  },
  {
    id: 1,
    title: "Adam",
    desc: "ogkhokgijhij",
    img: "assets/img/adam.jpg",
  },
  {
    id:2,
    title: "Gucci",
    desc: "okdfojidjaijsdasdasdasdasdasd",
    img: "assets/img/gucci.jpg",
  },
  {
    id:3,
    title: "Gogh02 xd",
    desc: "sample text",
    img: "assets/img/vangogh.jpg",
  },
];




document.getElementById("imageId").src = imageDetails[0].img;
document.getElementById("name").innerHTML = imageDetails[0].title;
document.getElementById("imageDetails").innerHTML=imageDetails[0].desc;

let activeImage = 0;

let count = 0;
arrowRight.onclick = function () {
  if (count < imageDetails.length-1) {
    count += 1;
    document.getElementById("imageId").src = imageDetails[count].img;
    document.getElementById("name").innerHTML = imageDetails[count].title;
    document.getElementById("imageDetails").innerHTML = imageDetails[count].desc;
    activeImage = imageDetails[count].id;
    console.log(activeImage);
  } else {
    document.getElementById("imageId").src = imageDetails[0].img;
    document.getElementById("name").innerHTML = imageDetails[0].title;
    document.getElementById("imageDetails").innerHTML = imageDetails[0].desc;
    activeImage = imageDetails[count].id;
    console.log(activeImage);
    count = 0;
  }

}

arrowLeft.onclick = function () {
  if (count === 0) {
    count = imageDetails.length - 1;
     document.getElementById("imageId").src = imageDetails[count].img;
     document.getElementById("name").innerHTML = imageDetails[count].title;
    document.getElementById("imageDetails").innerHTML = imageDetails[count].desc;
    activeImage = imageDetails[count].id;
        console.log(activeImage);

  } else { 
    count -= 1;
         document.getElementById("imageId").src = imageDetails[count].img;
         document.getElementById("name").innerHTML = imageDetails[count].title;
         document.getElementById("imageDetails").innerHTML = imageDetails[count].desc;
        activeImage = imageDetails[count].id;
            console.log(activeImage);
  }
}




for (let index = 0; index < imageDetails.length; index++){
  let image = document.createElement("img");
  image.src = imageDetails[index].img;
  image.setAttribute("id", "imgThumbnail");

  thumbnailContainer.append(image) 
}

