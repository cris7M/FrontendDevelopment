const htmlbody = document.querySelector('body');

const randomClickFunction3 = function(){
  const colors = ["#ddd", "red", "green", "blue", "#000", "purple"];
    const randomIndex= Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    htmlbody.style.background = randomColor;
    console.log('The user Clicked and set the color to' + randomColor);
}