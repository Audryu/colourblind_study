import '@kitware/vtk.js/favicon.js'

// Load the rendering pieces we want to use (for both WebGL and WebGPU)
import '@kitware/vtk.js/Rendering/Profiles/Geometry.js'

import vtkOpenGLRenderWindow from '@kitware/vtk.js/Rendering/OpenGL/RenderWindow.js'
import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow.js'
import vtkRenderWindowInteractor from '@kitware/vtk.js/Rendering/Core/RenderWindowInteractor.js'
import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer.js'
import vtkInteractorStyleTrackballCamera from '@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera.js'

import { tumouractor } from './sksAnatomy.js'

const urlString = window.location.href
const url = new URL(urlString)
let backOpacity = url.searchParams.get('background_opacity')
if (backOpacity == null) backOpacity = 0.0
// ----------------------------------------------------------------------------
// Standard rendering code setup
// ----------------------------------------------------------------------------

const renderWindow = vtkRenderWindow.newInstance()
const renderer = vtkRenderer.newInstance({ background: [0.0, 0.0, 0.0, backOpacity] })
renderWindow.addRenderer(renderer)

// ----------------------------------------------------------------------------
// Simple pipeline ConeSource --> Mapper --> Actor
// ----------------------------------------------------------------------------

tumouractor(url, handleActor)

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
  if (error) console.error('Download error!', error)
  else {
    renderer.addActor(actor)
    renderer.resetCamera()
    // I don't know why but we seem to need to invoke an interactor event to get
    // it to redraw automatically. Just calling render doesn't do it.
    // openglRenderWindow.render()
    interactor.invokeLeftButtonPress(0, 0)
  }
};
