$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();
createPlatform(0, canvas.height - 32, canvas.width, 32);
createPlatform(0, 0, 30, canvas.height);
createPlatform(canvas.width - 30, 0, 30, canvas.height);
    // TODO 2 - Create Platforms
createPlatform(150, 550, 100, 20);
createPlatform(350, 480, 120, 20);
createPlatform(600, 420, 100, 20);
createPlatform(450, 300, 150, 20);
createPlatform(200, 200, 150, 20);

createPlatform(700, 350, 40, 15);
createPlatform(750, 300, 40, 15);
createPlatform(100, 100, 200, 20);



    // TODO 3 - Create Collectables
createCollectable("database", 370, 450, 0.6, 0.6);
createCollectable("steve", 460, 450, 0.7, 0.7);
createCollectable("grace", 820, 250, 0.6, 0.6);
    // TODO 4 - Create Cannons
createCannon("left", 400, 2000);
createCannon("bottom", 500, 2500);
createCannon("right", 300, 1800);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
