function pageLoaded() {
  let admiralLink = document.getElementById("admiralLink");
  let sochiLink = document.getElementById("sochiLink");
  let patrioticLink = document.getElementById("patrioticLink");
  let admiralImg = document.getElementById("admiralImg");
  let sochiImg = document.getElementById("sochiImg");
  let patriotImg = document.getElementById("patrioticImg");
  let leftArrow = document.querySelector(".leftArrow");
  let rightArrow = document.querySelector(".rightArrow");
  let leftPoint = document.querySelector(".leftPoint");
  let centerPoint = document.querySelector(".centerPoint");
  let rightPoint = document.querySelector(".rightPoint");
  let pointArr = [leftPoint, centerPoint, rightPoint];
  let imageArr = [admiralImg, sochiImg, patriotImg];
  let linksArr = [admiralLink, sochiLink, patrioticLink];
  let cityText = document.querySelector(".city-text");
  let areaText = document.querySelector(".area-text");
  let timeText = document.querySelector(".time-text");
  let costText = document.querySelector(".cost-text");
  let admiralInfo = [
    "Rostov-on-Don \n LCD admiral",
    "81 m2",
    "3.5 months",
    "Upon request",
  ];
  let sochiInfo = ["Sochi Thieves", "105 m2", "4 months", "Upon request"];
  let patriotInfo = [
    "Rostov-on-Don \n Patriotic",
    "93 m2",
    "3 months",
    "Upon request",
  ];
  let onLineStatus = {
    currentImage: admiralImg,
    currentPoint: leftPoint,
    currentLink: admiralLink,
  };
  function showImage(arr, image) {
    let pos = arr.indexOf(image);
    let imageArrCopy = arr.slice();
    imageArrCopy.splice(pos, 1);
    imageArrCopy.unshift(image);
    imageArrCopy[0].setAttribute("style", "z-index:1");
    imageArrCopy[1].setAttribute("style", "z-index:-1");
    imageArrCopy[2].setAttribute("style", "z-index:-1");
    onLineStatus.currentImage = image;
    refreshInfo(onLineStatus);
  }
  function activeLink(curlink) {
    linksArr.forEach((link) => {
      link.classList.remove("currentLink");
    });
    curlink.classList.add("currentLink");
    onLineStatus.currentLink = curlink;
  }
  function activeSvg(curpoint) {
    pointArr.forEach((point) => {
      point.classList.remove("activeSvg");
    });
    curpoint.classList.add("activeSvg");
    onLineStatus.currentPoint = curpoint;
  }
  function navigateForward(onLineStatus, imageArr) {
    let curPosition = imageArr.indexOf(onLineStatus.currentImage);
    if (curPosition === 0 || curPosition === 1) {
      showImage(imageArr, imageArr[curPosition + 1]);
      activeLink(linksArr[curPosition + 1]);
      activeSvg(pointArr[curPosition + 1]);
    } else {
      showImage(imageArr, imageArr[0]);
      activeLink(linksArr[0]);
      activeSvg(pointArr[0]);
    }
  }

  function navigateBack(onLineStatus, imageArr) {
    let curPosition = imageArr.indexOf(onLineStatus.currentImage);
    if (curPosition === 2 || curPosition === 1) {
      showImage(imageArr, imageArr[curPosition - 1]);
      activeLink(linksArr[curPosition - 1]);
      activeSvg(pointArr[curPosition - 1]);
    } else {
      showImage(imageArr, imageArr[2]);
      activeLink(linksArr[2]);
      activeSvg(pointArr[2]);
    }
  }
  function refreshInfo(onLineStatus) {
    if (onLineStatus.currentImage === admiralImg) {
      cityText.innerText = admiralInfo[0];
      areaText.innerText = admiralInfo[1];
      timeText.innerText = admiralInfo[2];
      costText.innerText = admiralInfo[3];
    } else if (onLineStatus.currentImage === sochiImg) {
      cityText.innerText = sochiInfo[0];
      areaText.innerText = sochiInfo[1];
      timeText.innerText = sochiInfo[2];
      costText.innerText = sochiInfo[3];
    } else {
      cityText.innerText = patriotInfo[0];
      areaText.innerText = patriotInfo[1];
      timeText.innerText = patriotInfo[2];
      costText.innerText = patriotInfo[3];
    }
  }
  admiralLink.addEventListener("click", () => {
    showImage(imageArr, admiralImg);
    activeLink(admiralLink);
    activeSvg(leftPoint);
  });
  sochiLink.addEventListener("click", () => {
    showImage(imageArr, sochiImg);
    activeLink(sochiLink);
    activeSvg(centerPoint);
  });
  patrioticLink.addEventListener("click", () => {
    showImage(imageArr, patriotImg);
    activeLink(patrioticLink);
    activeSvg(rightPoint);
  });
  leftPoint.addEventListener("click", () => {
    showImage(imageArr, admiralImg);
    activeLink(admiralLink);
    activeSvg(leftPoint);
  });
  centerPoint.addEventListener("click", () => {
    showImage(imageArr, sochiImg);
    activeLink(sochiLink);
    activeSvg(centerPoint);
  });
  rightPoint.addEventListener("click", () => {
    showImage(imageArr, patriotImg);
    activeLink(patrioticLink);
    activeSvg(rightPoint);
  });
  rightArrow.addEventListener("click", () => {
    navigateForward(onLineStatus, imageArr);
  });
  leftArrow.addEventListener("click", () => {
    navigateBack(onLineStatus, imageArr);
  });
}

addEventListener("DOMContentLoaded", pageLoaded());
