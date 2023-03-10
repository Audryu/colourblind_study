import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper.js'
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor.js'
import vtkXMLPolyDataReader from '@kitware/vtk.js/IO/XML/XMLPolyDataReader.js'

const path = 'https://raw.githubusercontent.com/Audryu/colourblind_study/master/dist/'



export function liveractor (urlOptions, callback) {
  const id = 'liver'
  const defaultColour = '6600FF'
  const actor = vtkActor.newInstance()
  const opacity = 0.3
  const {
    diffuseColour, specularColour, diffusePower, specularPower
  } = unpackOptions(id, urlOptions, defaultColour)
  applyProperties(actor, diffuseColour, specularColour,
    diffusePower, specularPower, opacity)

  const reader = vtkXMLPolyDataReader.newInstance()
  const filename = 'assets/liver.vtp'
  let error = false
  reader.setUrl(path + filename).then(() => {
    const polydata = reader.getOutputData(0)
    const mapper = vtkMapper.newInstance()

    actor.setMapper(mapper)
    mapper.setInputData(polydata)
    actor.setPosition(-0, 0, -1500)
    actor.rotateWXYZ(-495, 0, 0, 1)
    callback(error, actor)
  })
    .catch(err => {
      error = true
      callback(err, null)
    })
}

export function gallbladderactor (urlOptions, callback) {
  const id = 'gallbladder'
  const defaultColour = '22FF22'

  const actor = vtkActor.newInstance()
  const {
    diffuseColour, specularColour, diffusePower, specularPower, opacity
  } = unpackOptions(id, urlOptions, defaultColour)
  applyProperties(actor, diffuseColour, specularColour,
    diffusePower, specularPower, opacity)

  const reader = vtkXMLPolyDataReader.newInstance()
  const filename = 'assets/gallbladder.vtp'
  let error = false
  reader.setUrl(path + filename).then(() => {
    const polydata = reader.getOutputData(0)
    const mapper = vtkMapper.newInstance()

    actor.setMapper(mapper)
    mapper.setInputData(polydata)
    actor.setPosition(-0, 0, -1500)
    actor.rotateWXYZ(-495, 0, 0, 1)
    callback(error, actor)
  })
    .catch(err => {
      error = true
      callback(err, null)
    })
}

export function hepaticveinactor (urlOptions, callback) {
  const id = 'v1'
  const defaultColour = 'FF0000'
  const actor = vtkActor.newInstance()
  const mapper = vtkMapper.newInstance() // Define the mapper variable

  const {
    diffuseColour, specularColour, diffusePower, specularPower, opacity
  } = unpackOptions(id, urlOptions, defaultColour)
  applyProperties(actor, diffuseColour, specularColour,
    diffusePower, specularPower, opacity)

  const reader = vtkXMLPolyDataReader.newInstance()
  const filename = 'assets/hepaticveins.vtp'
  let error = false
  reader.setUrl(path + filename).then(() => {
    const polydata = reader.getOutputData(0)

    actor.setMapper(mapper)
    mapper.setInputData(polydata)
    actor.setPosition(-10, 20, 160)
    actor.rotateWXYZ(230, 1, 0, 0)
    actor.rotateWXYZ(190, 0, 0, 1)
    callback(error, actor)
  })
    .catch(err => {
      error = true
      callback(err, null)
    })
  }

export function portalveinactor (urlOptions, callback) {
  const id = 'v2'
  const defaultColour = '00FF00'
  const actor = vtkActor.newInstance()

  const {
    diffuseColour, specularColour, diffusePower, specularPower, opacity
  } = unpackOptions(id, urlOptions, defaultColour)
  applyProperties(actor, diffuseColour, specularColour,
    diffusePower, specularPower, opacity)

  const reader = vtkXMLPolyDataReader.newInstance()
  const filename = 'assets/portalvein.vtp'
  let error = false
  reader.setUrl(path + filename).then(() => {
    const polydata = reader.getOutputData(0)
    const mapper = vtkMapper.newInstance()

    actor.setMapper(mapper)
    mapper.setInputData(polydata)
    actor.setPosition(10, 6, 80)
    actor.rotateWXYZ(-270, 1, 0, 0)
    actor.rotateWXYZ(350, 0, 0, 1)
    actor.rotateWXYZ(190, 0, 1, 0)
    callback(error, actor)
  })
    .catch(err => {
      error = true
      callback(err, null)
    })
}

export function arteryactor (urlOptions, callback) {
  const id = 'artery'
  const defaultColour = '00FF00'
  const actor = vtkActor.newInstance()

  const {
    diffuseColour, specularColour, diffusePower, specularPower, opacity
  } = unpackOptions(id, urlOptions, defaultColour)
  applyProperties(actor, diffuseColour, specularColour,
    diffusePower, specularPower, opacity)

  const reader = vtkXMLPolyDataReader.newInstance()
  const filename = 'assets/arteries.vtp'
  let error = false
  reader.setUrl(path + filename).then(() => {
    const polydata = reader.getOutputData(0)
    const mapper = vtkMapper.newInstance()

    actor.setMapper(mapper)
    mapper.setInputData(polydata)
    actor.setPosition(-5, 65, 90)
    actor.rotateWXYZ(230, 1, 0, 0)
    actor.rotateWXYZ(100, 0, 1, 0)
    actor.rotateWXYZ(-20, 0, 0 ,1)

    callback(error, actor)
  })
    .catch(err => {
      error = true
      callback(err, null)
    })
}
function hexToRgb (hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
      }
    : null
}

function unpackOptions (id, urlOptions, defaultColour) {
  let diffuseColour = urlOptions.searchParams.get(id + 'diffuseColour')
  let specularColour = urlOptions.searchParams.get(id + 'specularColour')
  let diffusePower = urlOptions.searchParams.get(id + 'diffuse')
  let specularPower = urlOptions.searchParams.get(id + 'specular')
  let opacity = urlOptions.searchParams.get(id + 'opacity')

  if (diffuseColour == null) diffuseColour = defaultColour
  if (specularColour == null) specularColour = defaultColour
  diffuseColour = hexToRgb('#' + diffuseColour)
  specularColour = hexToRgb('#' + specularColour)
  if (diffusePower == null) diffusePower = 1.0
  if (specularPower == null) specularPower = 0.0
  if (opacity == null) opacity = 1.0

  return {
    diffuseColour, specularColour, diffusePower, specularPower, opacity
  }
}

function applyProperties (actor, diffuseColour, specularColour,
  diffusePower, specularPower, opacity) {
  actor.getProperty().setOpacity(opacity)
  actor.getProperty().setDiffuseColor(diffuseColour.r, diffuseColour.g,
    diffuseColour.b)
  actor.getProperty().setDiffuse(diffusePower)
  console.log(specularColour)
  actor.getProperty().setSpecularColor(specularColour.r, specularColour.g,
    specularColour.b)
  actor.getProperty().setSpecular(specularPower)
}
