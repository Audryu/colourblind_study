SciKit-Surgery Luminance Study
==============================

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
We can pass various visualisation parameters in the url to change the appearance of the displayed anatomy. For example colour=?????? where ?????? is a 6 digit hexidecimal rgb colour definition. depth = ? where depth is an integer depth value.

::
  `Colour = red, depth = 100 <https://scikit-surgery.github.io/luminance_study/?colour=FF0000&depth=10>`_
  `Colour = blue, depth = 100 <https://scikit-surgery.github.io/luminance_study/?colour=0000FF&depth=10>`_
  `Colour = blue, depth = 100, opacity = 1.0 <https://scikit-surgery.github.io/luminance_study/?colour=0000FF&depth=10&opacity=1.0>`_
  `Colour = blue, depth = 100, opacity = 0.3 <https://scikit-surgery.github.io/luminance_study/?colour=0000FF&depth=10&opacity=0.3>`_

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
