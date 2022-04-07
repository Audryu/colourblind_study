SciKit-Surgery Luminance Study
==============================

.. image:: https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg
   :target: CODE_OF_CONDUCT.md

.. image:: https://img.shields.io/twitter/follow/scikit_surgery?style=social
   :target: https://twitter.com/scikit_surgery?ref_src=twsrc%5Etfw
   :alt: Follow scikit_surgery on twitter

Can we use a web app to study the effect of object luminance on depth perception 
when viewing anatomically realistic augmented reality?

Try it here `here`_.

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
