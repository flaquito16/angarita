const triangulo=require('../src/AreaTriangulo')

describe("Prueba del area de un triangulo",()=>{
    test('(6 * 8)/2 is 24',()=>{
        expect(triangulo(6,8)).toBe(24)
    })
})