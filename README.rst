SciKit-Surgery Colour-Blindness Study
==============================
Protanopia Compatibility:
https://audryu.github.io/colourblind_study/?v1diffuseColour=FFFFFF&v2diffuseColour=E0B0FF

Colour Blindness Filters inspired by:
https://github.com/DaltonLens/libDaltonLens

Based on algorithms:
Computerized simulation of color appearance for dichromats by Brettel, H. and Viénot, F. and Mollon, J. D. (1997). 

Digital video colourmaps for checking the legibility of displays by dichromats by Viénot, F. and Brettel, H. and Mollon, J. D. (1999). 


::
  
  npm init
  npm install @kitware/vtk.js
  npm install -D webpack-cli webpack webpack-dev-server
  export NODE_OPTIONS=--openssl-legacy-provider
  npm run build
  npm run start

.. _`here`: https://scikit-surgery.github.io/colourblind_study/
