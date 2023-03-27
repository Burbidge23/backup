// // Create scene
// let gameScene = new Phaser.Scene('game');

// gameScene.init = function() {
//     // player sped
//     this.playerSpeed = 3
// }

// gameScene.preload = function() {
//     // Load our images
//     this.load.image('background', 'assets/background.png') 
//     this.load.image('player', 'assets/dragon.png')
//     this.load.image('enemy', 'assets/player.png')
//     this.load.image('goal', 'assets/treasure.png')
// }

// gameScene.create = function() {
//     this.bg = this.add.sprite(640/2, 360/2, 'background')
//     this.player = this.add.sprite(50, 360/2, 'player')
//     this.enemy = this.add.sprite(640/2, 360/2, 'enemy')
//     this.enemy2 = this.add.sprite(450, 360/2, 'enemy')
//     this.goal = this.add.sprite(640-100, 360/2, 'goal')

//     this.enemy.flipX = true
//     this.enemy2.flipY = true

//     this.player.setScale(0.3)

//     this.enemy.setScale(0.5)
//     this.enemy2.setScale(0.5)
//     this.goal.setScale(0.6)

//     // cursors = this.input.keyboard.createCursorKeys();
//     keys = this.input.keyboard.addKeys("W,A,S,D");
// }

// // this will run upto 60 times a second 
// gameScene.update = function() {
//     this.enemy.y += 1
//     this.goal.angle += 1

//     if (this.input.activePointer.isDown) {
//         this.player.x += this.playerSpeed
//     }
//     // Use WASD
//     if (keys.A.isDown && this.player.x > 20){
//         this.player.x -= this.playerSpeed;
//     } 
//     if (keys.D.isDown && this.player.x < 560){
//         this.player.x += this.playerSpeed;
//     }
//     if (keys.W.isDown && this.player.y > 20){
//         this.player.y -= this.playerSpeed;
//     } 
//     if (keys.S.isDown && this.player.y < 560){
//         this.player.y += this.playerSpeed;
//     }
//     let heroRect = this.player.getBounds();
//     let goalRect = this.goal.getBounds();
//     if (Phaser.Geom.Intersects.RectangleToRectangle(heroRect, goalRect)) {
//         console.log("Hit the goal!")
//         this.scene.restart()
//         return;
//     }
// }

// // Config
// let config = {
//     type : Phaser.AUTO, // Phaser will use your WebGL if avaible, if it's not it'll use our canvas
//     width : 640,
//     height : 360,
//     scene : gameScene
// }
// let game = new Phaser.Game(config);



// create a new scene
let gameScene = new Phaser.Scene('Game');

// initiate scene parameters
gameScene.init = function(){
  // player speed
  this.playerSpeed = 3;
  
  // enemy speed
  this.enemyMinSpeed = 1;
  this.enemyMaxSpeed = 4.5;
  
  // boundaries
  this.enemyMinY = 80;
  this.enemyMaxY = 280;
  
  // we are not terminating
  this.isTerminating = false;
};
 
// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
  this.load.image('enemy', 'assets/dragon.png');
  this.load.image('goal', 'assets/treasure.png');
  this.load.audio("music", ["assets/music.mp3"]);
};
 

// called once after the preload ends
gameScene.create = function(){
  music = this.sound.add("music", { loop: true });
  music.play();
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');
  keys = this.input.keyboard.addKeys("W,A,S,D");
  
 
  // change the origin to the top-left corner
  bg.setOrigin(0, 0);
  
  // create the player
  this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
  
  // we are reducing the width by 50%, and we are doubling the height
  this.player.setScale(0.5);
  
  // goal
  this.goal = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'goal');
  this.goal.setScale(0.6);
  
  // enemy group
  this.enemies = this.add.group({
    key: 'enemy',
    repeat: 5,
    setXY: {
      x: 90,
      y: 100,
      stepX: 80,
      stepY: 20
    }
  });
  
  //setting scale to all group elements
  Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.4, -0.4);
  
  //set flipX, and speed
  Phaser.Actions.Call(this.enemies.getChildren(), function(enemy){
    //flip enemy
    enemy.flipX = true;
    
    //set speed
    let dir = Math.random() < 0.5 ? 1 : -1;
    let speed = this.enemyMinSpeed + Math.random() * (this.enemyMaxSpeed - this.enemyMinSpeed);
    enemy.speed = dir * speed;
    
  }, this);
};

// this is called up to 60 times per second
gameScene.update = function(){
  
  // don't execute if we are terminating
  if(this.isTerminating) return;
  
    //    Use WASD
    if (keys.A.isDown && this.player.x > 20){
        this.player.x -= this.playerSpeed;
    } 
    if (keys.D.isDown && this.player.x < 560){
        this.player.x += this.playerSpeed;
    }
    if (keys.W.isDown && this.player.y > 70){
        this.player.y -= this.playerSpeed;
    } 
    if (keys.S.isDown && this.player.y < 280){
        this.player.y += this.playerSpeed;
    }
  
  // treasure overlap check
  let playerRect = this.player.getBounds();
  let treasureRect = this.goal.getBounds();
  
  if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, treasureRect)) {
    console.log('reached goal!');
    
    return this.gameOver(true);
    
  }
  
  //get enemies
  let enemies = this.enemies.getChildren();
  let numEnemies = enemies.length;
  
  for(let i = 0; i < numEnemies; i++) {
    // enemy movement
    enemies[i].y += enemies[i].speed;
  
    // check we haven't passed min or max Y
    let conditionUp = enemies[i].speed < 0 && enemies[i].y <= this.enemyMinY;
    let conditionDown = enemies[i].speed > 0 && enemies[i].y >= this.enemyMaxY;
  
    // if we passed the upper or lower limit, reverse 
    if(conditionUp || conditionDown) {
      enemies[i].speed *= -1;
    }
    
    // check enemy overlap
    let enemyRect = enemies[i].getBounds();
  
    if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)) {
      console.log('Game over!');
    
      return this.gameOver(false);
    }
  }
  
};

gameScene.gameOver = function(win) {
  
  // initiated game over sequence
  this.isTerminating = true;
  
  // shake camera
  if (! win) {
    this.cameras.main.shake(500);
  
    // listen for event completion
    this.cameras.main.on('camerashakecomplete', function(camera, effect){
    
    // fade out
    this.cameras.main.fade(500);
    }, this);

    this.cameras.main.on('camerafadeoutcomplete', function(camera, effect){
        // restart the Scene
        this.scene.restart();
    }, this);
  } else {
    this.scene.restart();
  }
  music.stop()
};
 
// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};
 
// create a new game, pass the configuration
let game = new Phaser.Game(config);