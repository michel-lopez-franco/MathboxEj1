import './styles.css'


import "mathbox/mathbox.css"

import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import * as mathBox from "mathbox"


/*const app = document.getElementById("root");

app.innerHTML = "<h1> Hola Mundo </h1>";
app.innerHTML += "<h1>Webpack + Three.js</h1>";
*/

// Color Cube by Max Goldstein, CC-BY
mathbox = mathBox.mathBox({
    plugins: ["core", "controls", "cursor"],
    controls: {
      klass: OrbitControls,
    },
    camera: {},
  });
  
  three = mathbox.three;
      three.controls.maxDistance = 4;
      three.camera.position.set(2.5, 1, 2.5);
      three.renderer.setClearColor(new THREE.Color(0xeeeeee), 1.0);

      view = mathbox
        .set({
          scale: 720,
          focus: 1,
        })
        .cartesian({
          range: [
            [0, 1],
            [0, 1],
            [0, 1],
          ],
          scale: [1, 1, 1],
        });

      var rez = 10;
      view.volume({
        id: "volume",
        width: rez,
        height: rez,
        depth: rez,
        items: 1,
        channels: 4,
        live: false,
        expr: function (emit, x, y, z) {
          emit(x, y, z, 1);
        },
      });
      view.point({
        // The neat trick: use the same data for position and for color!
        // We don't actually need to specify the points source since we just defined them
        // but it emphasizes what's going on.
        // The w component 1 is ignored as a position but used as opacity as a color.
        points: "#volume",
        colors: "#volume",
        // Multiply every color component in [0..1] by 255
        color: 0xffffff,
        size: 20,
      });