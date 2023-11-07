const volumen=require('../src/VolumenCirculo')

describe("Prueba del volumen de un circulo",()=>{
    test('(4/3)*3.14159*(5)**3 is 523.60',()=>{
        expect(volumen(5)).toBe(523)
    })
})