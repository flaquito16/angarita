const factorial=require('../src/factorial')

describe("Prueba de factorizacion",()=>{
    test('5 is 120',()=>{
        expect(factorial(5)).toBe(120)
    })
})