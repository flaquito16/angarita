const dividir=require('../src/division')

describe("Prueba de division",()=>{
    test('6 / 2 is 3',()=>{
        expect(dividir(6,2)).toBe(3)
    })
})