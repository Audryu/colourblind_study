import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer.js'
import { setupLights } from '../lights.js';

describe('Set up Lights Test', () => {
 const rendererns = vtkRenderer.newInstance()
 const urlns = new URL('https://test.com?nospjjotlight')
 const lightsBefore = rendererns.getLights().length
 it('should run without spotlight', () => {
   setupLights (urlns, rendererns)
   const lightsAfter = rendererns.getLights().length
   console.log(lightsBefore + ' : ' + lightsAfter)
   expect(lightsAfter).toBe(lightsBefore)
    });

 const url = new URL('https://test.com?spotlight')
 const renderer = vtkRenderer.newInstance()
 const lightsBeforeSpot = renderer.getLights().length
 it('should add a spotlight', () => {
   setupLights (url, renderer)
   expect(renderer.getLights().length).toBe(lightsBeforeSpot + 1)
    });
});
