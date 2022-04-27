import vtkLight from '@kitware/vtk.js/Rendering/Core/Light.js'

export function setupLights (url, renderer) {
  const spotLightOn = url.searchParams.get('spotlight')
  if (spotLightOn != null) {
    const light0 = vtkLight.newInstance()
    light0.setLightTypeToSceneLight()
    light0.setFocalPoint(150, 0, 0)
    light0.setPosition(150, 200, 200)
    renderer.addLight(light0)
  }
}
