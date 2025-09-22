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
createPlatform(100, 580, 175, 20, "green");
createPlatform(320, 500, 140, 20, "lime");
createPlatform(550, 430, 120, 20, "yellow");
createPlatform(750, 300, 90, 20, "orange");
createPlatform(950, 300, 90, 20, "red");

createPlatform(450, 260, 150, 20, "blue");
createPlatform(220, 200, 120, 20, "cyan");
createPlatform(60, 130, 100, 20, "purple");
createPlatform(600, 180, 140, 20, "gold");

    // TODO 3 - Create Collectables
createCollectable("database", 560, 400, 0.6, 0.6);
createCollectable("steve",970, 260, 0.7, 0.7);
createCollectable("grace", 80, 90, 0.6, 0.6);
    // TODO 4 - Create Cannons
createCannon("left", 430, 1900);
createCannon("bottom", 650, 1700);
createCannon("right", 350, 2500);
createCannon("top", 850, 2200);
  
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
