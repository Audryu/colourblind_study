SciKit-Surgery Luminance Study
==============================

.. image:: https://github.com/SciKit-Surgery/luminance_study/actions/workflows/.github/workflows/ci.yml/badge.svg
   :target: https://github.com/SciKit-Surgery/luminance_study/actions
   :alt: GitHub Actions CI status

.. image:: https://coveralls.io/repos/github/SciKit-Surgery/luminance_study/badge.svg?branch=3-tests
   :target: https://coveralls.io/github/SciKit-Surgery/luminance_study?branch=3-tests

.. image:: https://img.shields.io/badge/code_style-standard-brightgreen.svg
   :target: https://standardjs.com

.. image:: https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg
   :target: CODE_OF_CONDUCT.md

.. image:: https://img.shields.io/twitter/follow/scikit_surgery?style=social
   :target: https://twitter.com/scikit_surgery?ref_src=twsrc%5Etfw
   :alt: Follow scikit_surgery on twitter

Can we use a web app to study the effect of object luminance on depth perception 
when viewing anatomically realistic augmented reality?

Try it here `here`_.
We can pass various visualisation parameters in the url to change the appearance of the displayed anatomy. Parameters are preceded by a '?' and separated by a '&', see the examples below for some ideas on how to format your URL. Current allowable values are:

- background_opacity=?? takes a float value from 0.0 to 1.0, default 0.0. Increasing the value creates a darkened layer infront of the background image, making it appear less bright.
- spotlight if this is included in the URL we add a fixed spotlight to the scene. (defined in src/lights.js)
- veindiffuseColour=?????? sets the diffuse colour of the veins, 6 digit hexidecimal RGB code. Default 6600FF
- veinspecularColour=?????? sets the specular colour of the veins, 6 digit hexidecimal RGB code. Default 6600FF
- veindiffuse=?? sets the diffuse power of the veins, float from 0.0 to 1.0 Default 1.0
- veinspecular=?? sets the specular power of the veins, float from 0.0 to 1.0 Default 0.0
- veinopacity=?? sets the opacity of the veins, float from 0.0 to 1.0 Default 1.0
- t0diffuseColour=?????? sets the diffuse colour of the first tumour, 6 digit hexidecimal RGB code. Default 22FF22
- t0specularColour=?????? sets the specular colour of the first tumour, 6 digit hexidecimal RGB code. Default 22FF22
- t0diffuse=?? sets the diffuse power of the first tumour, float from 0.0 to 1.0 Default 1.0
- t0specular=?? sets the specular power of the first tumour, float from 0.0 to 1.0 Default 0.0
- t0opacity=?? sets the opacity of the first tumour, float from 0.0 to 1.0 Default 1.0
- t1diffuseColour=?????? sets the diffuse colour of the second tumour, 6 digit hexidecimal RGB code. Default 22FF22
- t1specularColour=?????? sets the specular colour of the second tumour, 6 digit hexidecimal RGB code. Default 22FF22
- t1diffuse=?? sets the diffuse power of the second tumour, float from 0.0 to 1.0 Default 1.0
- t1specular=?? sets the specular power of the second tumour, float from 0.0 to 1.0 Default 0.0
- t1opacity=?? sets the opacity of the second tumour, float from 0.0 to 1.0 Default 1.0

Here are some examples:

- `t0diffuseColour = red <https://scikit-surgery.github.io/luminance_study/?t0diffuseColour=FF0000>`_
- `t1diffuseColour = blue, veindiffuseColour = green <https://scikit-surgery.github.io/luminance_study/?t1diffuseColour=0000FF&veindiffuseColour=00FF00>`_
- `t1diffuseColour = blue, t1specularColour = red, t1specular = 0.8 background_opacity = 0.7 <https://scikit-surgery.github.io/luminance_study/?t1diffuseColour=0000FF&t1specularColour=FF0000&t1specular=0.8&background_opacity=0.7>`_
- `t0diffuseColour = blue, t0opacity = 0.3 <https://scikit-surgery.github.io/luminance_study/?t0diffuseColour=0000FF&t0opacity=0.3>`_
- `Multiple anatomy example <https://scikit-surgery.github.io/luminance_study/?t1opacity=0.7&t1specularColour=FF2222&t1specular=1.0&veinopacity=0.4&spotlight>`_
based on https://github.com/SciKit-Surgery/browser_ar. 

Research inspired by: 

Susanne Schmidt, Gerd Bruder and Frank Steinicke, "Depth Perception and Manipulation in Projection-Based Spatial Augmented Reality," in Presence, vol. 27, no. 2, pp. 242-256, Feb. 2020, https://doi.org/10.1162/pres_a_00329

::
  
  npm init
  npm install @kitware/vtk.js
  npm install -D webpack-cli webpack webpack-dev-server
  export NODE_OPTIONS=--openssl-legacy-provider
  npm run build
  npm run start

.. _`here`: https://scikit-surgery.github.io/luminance_study/
