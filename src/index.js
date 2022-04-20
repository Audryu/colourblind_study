import '@kitware/vtk.js/favicon.js'

// Load the rendering pieces we want to use (for both WebGL and WebGPU)
import '@kitware/vtk.js/Rendering/Profiles/Geometry.js'

import vtkOpenGLRenderWindow from '@kitware/vtk.js/Rendering/OpenGL/RenderWindow.js'
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow.js'
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor.js'
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer.js'
import vtkInteractorStyleTrackballCamera from '@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera.js'

import { tumouractor } from './sksAnatomy.js'
// ----------------------------------------------------------------------------
// Standard rendering code setup
// ----------------------------------------------------------------------------

const renderWindow = vtkRenderWindow.newInstance()
const renderer = vtkRenderer.newInstance({ background: [0.0, 0.0, 0.0, 0.0] })
renderWindow.addRenderer(renderer)

// ----------------------------------------------------------------------------
// Simple pipeline ConeSource --> Mapper --> Actor
// ----------------------------------------------------------------------------

tumouractor(handleActor)

// ----------------------------------------------------------------------------
// Add the actor to the renderer and set the camera based on it
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// Use OpenGL as the backend to view the all this
// ----------------------------------------------------------------------------

const openglRenderWindow = vtkOpenGLRenderWindow.newInstance()

renderWindow.addView(openglRenderWindow)

// ----------------------------------------------------------------------------
// Create a div section to put this into
// ----------------------------------------------------------------------------

const container = document.getElementById('foreground')
openglRenderWindow.setContainer(container)

// ----------------------------------------------------------------------------
// Capture size of the video window and set it to the renderWindow
// ----------------------------------------------------------------------------
const background = document.getElementById('background')
const { width, height } = background.getBoundingClientRect()
openglRenderWindow.setSize(width, height)

// ----------------------------------------------------------------------------
// Setup an interactor to handle mouse events
// ----------------------------------------------------------------------------

const interactor = vtkRenderWindowInteractor.newInstance()
interactor.setView(openglRenderWindow)
interactor.initialize()
interactor.bindEvents(container)

// ----------------------------------------------------------------------------
// Setup interactor style to use
// ----------------------------------------------------------------------------

interactor.setInteractorStyle(vtkInteractorStyleTrackballCamera.newInstance())

function handleActor (error, actor) {
  console.log('Handling actor')
  if (error) console.error('Download error!', error)
  else {
    renderer.addActor(actor)
    console.log(actor)
    renderer.resetCamera()
  }
};
