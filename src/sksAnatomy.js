// Pull the logic for making anatomy actors out of main loop
import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource.js'
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper.js'
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor.js'
import vtkXMLPolyDataReader from '@kitware/vtk.js/IO/XML/XMLPolyDataReader.js'

export function coneactor() {

	const coneSource = vtkConeSource.newInstance({ height: 1.0 })

	const mapper = vtkMapper.newInstance()
	mapper.setInputConnection(coneSource.getOutputPort())

	const sksactor = vtkActor.newInstance()
	sksactor.setMapper(mapper)
	sksactor.getProperty().setOpacity(0.5)

	return sksactor
}

export function tumouractor(callback) {
	const reader = vtkXMLPolyDataReader.newInstance()
	const filename='011_tumor.vtp'
	reader.setUrl(`assets/${filename}`).then(() => {
  		const polydata = reader.getOutputData(0)
  		const mapper = vtkMapper.newInstance()
  		const actor = vtkActor.newInstance()

  		actor.setMapper(mapper)
  		mapper.setInputData(polydata)
		callback(false, actor)
	})
}


