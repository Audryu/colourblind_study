// Pull the logic for making anatomy actors out of main loop
import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource.js'
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper.js'
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor.js'
import vtkXMLPolyDataReader from '@kitware/vtk.js/IO/XML/XMLPolyDataReader.js'

export function coneactor () {
  const coneSource = vtkConeSource.newInstance({ height: 1.0 })

  const mapper = vtkMapper.newInstance()
  mapper.setInputConnection(coneSource.getOutputPort())

  const sksactor = vtkActor.newInstance()
  sksactor.setMapper(mapper)
  sksactor.getProperty().setOpacity(0.5)

  return sksactor
}

export function veinactor (urlOptions, callback) {
  let colour = urlOptions.searchParams.get('colour')
  let depth = urlOptions.searchParams.get('depth')
  let opacity = urlOptions.searchParams.get('opacity')
  if (colour == null) colour = 'FF00FF'
  if (depth == null) depth = 0
  if (opacity == null) opacity = 1.0
  colour = '#' + colour

  const reader = vtkXMLPolyDataReader.newInstance()
  const filename = 'vtp/hepatic veins.vtp'
  let error = false
  reader.setUrl(`assets/${filename}`).then(() => {
    const polydata = reader.getOutputData(0)
    const mapper = vtkMapper.newInstance()
    const actor = vtkActor.newInstance()

    actor.setMapper(mapper)
    mapper.setInputData(polydata)
    const rgbcol = hexToRgb(colour)
    actor.getProperty().setColor(rgbcol.r, rgbcol.g, rgbcol.b)
    actor.getProperty().setOpacity(opacity)
    callback(error, actor)
  })
    .catch(err => {
      error = true
      callback(err, null)
    })
}

export function tumouractor0 (urlOptions, callback) {
  let colour = urlOptions.searchParams.get('colour')
  let depth = urlOptions.searchParams.get('depth')
  let opacity = urlOptions.searchParams.get('opacity')
  if (colour == null) colour = 'FFFFFF'
  if (depth == null) depth = 0
  if (opacity == null) opacity = 1.0
  colour = '#' + colour

  const reader = vtkXMLPolyDataReader.newInstance()
  const filename = 'vtp/tumor.vtp'
  let error = false
  reader.setUrl(`assets/${filename}`).then(() => {
    const polydata = reader.getOutputData(0)
    const mapper = vtkMapper.newInstance()
    const actor = vtkActor.newInstance()

    actor.setMapper(mapper)
    mapper.setInputData(polydata)
    const rgbcol = hexToRgb(colour)
    actor.getProperty().setColor(rgbcol.r, rgbcol.g, rgbcol.b)
    actor.getProperty().setOpacity(opacity)
    actor.setPosition(110, 0, 0)
    callback(error, actor)
  })
    .catch(err => {
      error = true
      callback(err, null)
    })
}

export function tumouractor1 (urlOptions, callback) {
  let colour = urlOptions.searchParams.get('colour')
  let depth = urlOptions.searchParams.get('depth')
  let opacity = urlOptions.searchParams.get('opacity')
  if (colour == null) colour = 'FFFFFF'
  if (depth == null) depth = 0
  if (opacity == null) opacity = 1.0
  colour = '#' + colour

  const reader = vtkXMLPolyDataReader.newInstance()
  const filename = 'vtp/tumor.vtp'
  let error = false
  reader.setUrl(`assets/${filename}`).then(() => {
    const polydata = reader.getOutputData(0)
    const mapper = vtkMapper.newInstance()
    const actor = vtkActor.newInstance()

    actor.setMapper(mapper)
    mapper.setInputData(polydata)
    const rgbcol = hexToRgb(colour)
    actor.getProperty().setColor(rgbcol.r, rgbcol.g, rgbcol.b)
    actor.getProperty().setOpacity(opacity)
    actor.setPosition(100, 20, 100)
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
