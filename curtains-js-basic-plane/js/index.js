window.onload = function() {
  // get our canvas wrapper
  var canvasContainer = document.getElementById("canvas");

  // set up our WebGL context and append the canvas to our wrapper
  var webGLCurtain = new Curtains("canvas");

  // get our plane element
  var planeElement = document.getElementsByClassName("plane")[0];

  // set our initial parameters (basic uniforms)
  var params = {
    vertexShaderID: "plane-vs", // our vertex shader ID
    fragmentShaderID: "plane-fs", // our framgent shader ID
    //crossOrigin: "", // codepen specific
    uniforms: {
      time: {
        name: "uTime", // uniform name that will be passed to our shaders
        type: "1f", // this means our uniform is a float
        value: 0,
      },
    }
  }

  // create our plane mesh
  var plane = webGLCurtain.addPlane(planeElement, params);

  // set up our basic methods
  plane.onRender(function() { // fired at each requestAnimationFrame call
    plane.uniforms.time.value++; // update our time uniform value
  });

}