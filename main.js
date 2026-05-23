let myBodyColor = "#EBEBFF";    // 몸
let myShadowColor = "#D8D8F7";  // 몸 그림자

let currentAction = "normal";   
// 'normal', 'eat', 'happy', 'angry', 'bath', 'sleep'

let customMenuButtons = [];

function setup() {
  createCanvas(windowWidth, windowHeight
    
  );
  
  let btnMainMenu = createButton('🎨');
  btnMainMenu.style('background-color', '#9EB9EE');
  
  btnMainMenu.mousePressed(() => {
    for (let btn of customMenuButtons) {
      btn.show(); 
    }
  });

  let btnColor1 = createButton('purple');
  btnColor1.mousePressed(() => { myBodyColor = "#EBEBFF"; myShadowColor = "#D8D8F7"; });
  customMenuButtons.push(btnColor1);

  let btnColor2 = createButton('mint');
  btnColor2.mousePressed(() => { myBodyColor = "#E7FFFA"; myShadowColor = "#B9ECE4"; });
  customMenuButtons.push(btnColor2);

  let btnColor3 = createButton('pink');
  btnColor3.mousePressed(() => { myBodyColor = "#FCE3F0"; myShadowColor = "#FFCEE7"; });
  customMenuButtons.push(btnColor3);
  
  let btnColor4 = createButton('yellow');
  btnColor4.mousePressed(() => { myBodyColor = "#FFF9E6"; myShadowColor = "#FAE7BA"; });
  customMenuButtons.push(btnColor4);
  
  let btnColor5 = createButton('blue');
  btnColor5.mousePressed(() => { myBodyColor = "#DCEBFC"; myShadowColor = "#B6D5FC"; });
  customMenuButtons.push(btnColor5);
  
  for (let btn of customMenuButtons) {
    btn.hide(); 
  }
}


function draw() {
  background(220);
  nomal_body ()
  angry_body ()
  sleep_body ()
  eat_body ()
  happy_body ()
  bath_body ()
}