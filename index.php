<?php


?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Valentine</title>
  </head>
  <body>
    <video src="video/fondo2.mp4" autoplay="true" muted="true" loop="true"></video>
    <main class="container">
      <h1 id="text0" class="neon" style="color: aliceblue;">♥ Dale Clic Hermosa♥</h1>
      <img id="catimg" class="cat-img" src="img/cat-0.jpeg" alt="MI HERMOSA" />
      <p class="title"></p>
      <h5  id="text1" class="neon" style="color: aliceblue;;"></h5>
      <div class="buttons">
        <button id="btn1" type="button" style="background-color: green; color: aliceblue;  font-size: 14px !important;"  class="btn btn--yes">SI</button>
        <button id="btn2" type="button" style="background-color: red; color: aliceblue;"class="btn btn--no">NO</button>
      </div>
    </main>

    <script type="module" src="script.js"></script>
  </body>
</html>
