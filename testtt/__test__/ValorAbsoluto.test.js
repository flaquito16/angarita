const ValorAbsoluto=require('../src/ValorAbsoluto')

describe("Prueba del Valor absoluto",()=>{
    test('5 is 5',()=>{
        expect(ValorAbsoluto(5)).toBe(5)
    })
})