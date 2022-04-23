
const spiderman = require('../app/spiderman')

describe("Unit tests for spiderman class", () => {
    test('1- Create an spiderman object', () => {

      // escribir el codigo que queremos usar para instanciar un objeto de spiderman con esta inf.
      const AndrewGarfield = new spiderman('Spiderman 2', 31, 'Andrew Garfield', 2, 'Sony')
      
      //esperemos que al validar el codigo funcione

      expect(AndrewGarfield.name).toBe('Spiderman 2')
      expect(AndrewGarfield.age).toBe( 31 )
      expect(AndrewGarfield.actor).toBe('Andrew Garfield')
      expect(AndrewGarfield.movies).toBe( 2 )
      expect(AndrewGarfield.studio).toBe('Sony')
    });
  })