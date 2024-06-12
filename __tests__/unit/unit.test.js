
import exp from '../../src/modules/calculation/util/exp';
import gcd from '../../src/modules/calculation/util/gcd';
import percentage from '../../src/modules/calculation/util/percentage';


describe('exp function', () => {
    test('exp function exists', () => {
        expect(exp).toBeDefined();
    });

    test('2 raised to the power of 3 is 8', () => {
        expect(exp(2, 3)).toBe(8);
    });

    test('5 raised to the power of 0 is 1', () => {
        expect(exp(5, 0)).toBe(1);
    });

    test('3 raised to the power of 2 is 9', () => {
        expect(exp(3, 2)).toBe(9);
    });

    test('1 raised to the power of 5 is 1', () => {
        expect(exp(1, 5)).toBe(1);
    });

    test('4 raised to the power of 1 is 4', () => {
        expect(exp(4, 1)).toBe(4);
    });


    /*  // negative test cases
  
      test('should return 1 if exponent is 0', () => {
          const result = exp(5, 0);
          expect(result).toBe(1);
      });
  
      test('should return 1 if base is 1', () => {
          const result = exp(1, 10);
          expect(result).toBe(1);
      });
  
      test('should return 0 if base is 0 and exponent is greater than 0', () => {
          const result = exp(0, 10);
          expect(result).toBe(0);
      });
  
      test('should return NaN if base is NaN', () => {
          const result = exp(NaN, 10);
          expect(result).toBeNaN();
      });
  
      test('should return NaN if exponent is NaN', () => {
          const result = exp(5, NaN);
          expect(result).toBeNaN();
      });
  
      test('should return NaN if both base and exponent are NaN', () => {
          const result = exp(NaN, NaN);
          expect(result).toBeNaN();
      });
  
      test('should return NaN if base is Infinity', () => {
          const result = exp(Infinity, 10);
          expect(result).toBeNaN();
      });
  
      test('should return Infinity if exponent is Infinity', () => {
          const result = exp(5, Infinity);
          expect(result).toBe(Infinity);
      });
  
      test('should return 0 if base is negative and exponent is an odd number', () => {
          const result = exp(-5, 3);
          expect(result).toBe(-125);
      });*/
});



// Greatest Common divisor
describe('gcd function', () => {
    test('gcd function exists', () => {
        expect(gcd).toBeDefined();
    });

    test('gcd of 12 and 8 is 4', () => {
        expect(gcd(12, 8)).toBe(4);
    });

    test('gcd of 54 and 24 is 6', () => {
        expect(gcd(54, 24)).toBe(6);
    });

    test('gcd of 101 and 103 is 1 (co-prime numbers)', () => {
        expect(gcd(101, 103)).toBe(1);
    });

    test('gcd of 0 and 5 is 5', () => {
        expect(gcd(0, 5)).toBe(5);
    });

    test('gcd of 5 and 0 is 5', () => {
        expect(gcd(5, 0)).toBe(5);
    });

    test('gcd of 0 and 0 is 0', () => {
        expect(gcd(0, 0)).toBe(0);
    });

    test('gcd of negative numbers -48 and 18 is 6', () => {
        expect(gcd(-48, 18)).toBe(6);
    });


    /*// negative test cases

    test('should return 1 if both numbers are coprime', () => {
        const result = gcd(13, 7);
        expect(result).toBe(1);
    });

    test('should return 0 if one of the numbers is 0', () => {
        const result = gcd(0, 5);
        expect(result).toBe(5);
    });

    test('should return 0 if both numbers are 0', () => {
        const result = gcd(0, 0);
        expect(result).toBe(0);
    });

    test('should return NaN if one of the numbers is NaN', () => {
        const result = gcd(NaN, 5);
        expect(result).toBeNaN();
    });

    test('should return NaN if both numbers are NaN', () => {
        const result = gcd(NaN, NaN);
        expect(result).toBeNaN();
    });

    test('should return NaN if one of the numbers is Infinity', () => {
        const result = gcd(Infinity, 5);
        expect(result).toBeNaN();
    });

    test('should return NaN if both numbers are Infinity', () => {
        const result = gcd(Infinity, Infinity);
        expect(result).toBeNaN();
    });

    test('should return NaN if one of the numbers is negative', () => {
        const result = gcd(-10, 5);
        expect(result).toBeNaN();
    });

    test('should return NaN if both numbers are negative', () => {
        const result = gcd(-10, -5);
        expect(result).toBeNaN();
    });

    test('should return NaN if both numbers are not integers', () => {
        const result = gcd(10.5, 5);
        expect(result).toBeNaN();
    });*/

});

// percentage
describe('percentage function', () => {
    test('percentage function exists', () => {
        expect(percentage).toBeDefined();
    });

    test('50 is 50% of 100', () => {
        expect(percentage(50, 100)).toBe(50);
    });

    test('25 is 25% of 100', () => {
        expect(percentage(25, 100)).toBe(25);
    });

    test('0 is 0% of 100', () => {
        expect(percentage(0, 100)).toBe(0);
    });

    test('100 is 100% of 100', () => {
        expect(percentage(100, 100)).toBe(100);
    });

    test('50 is 50% of 200', () => {
        expect(percentage(50, 200)).toBe(25);
    });

    test('handling division by zero gracefully', () => {
        expect(percentage(50, 0)).toBe(Infinity); // or you might want to handle this differently
    });

    test('handling negative numbers', () => {
        expect(percentage(-50, 100)).toBe(-50);
    });

    test('handling both negative numerator and denominator', () => {
        expect(percentage(-50, -100)).toBe(50);
    });

    /* // negative test cases
     test('should return NaN if x is not a number', () => {
         const result = percentage('abc', 10);
         expect(result).toBeNaN();
     });
 
     test('should return NaN if y is not a number', () => {
         const result = percentage(50, 'abc');
         expect(result).toBeNaN();
     });
 
     test('should return NaN if both x and y are not numbers', () => {
         const result = percentage('abc', 'def');
         expect(result).toBeNaN();
     });
 
     test('should return NaN if y is zero', () => {
         const result = percentage(50, 0);
         expect(result).toBeNaN();
     });
 
     test('should return NaN if x is negative', () => {
         const result = percentage(-50, 100);
         expect(result).toBeNaN();
     });
 
     test('should return NaN if y is negative', () => {
         const result = percentage(50, -100);
         expect(result).toBeNaN();
     });
 
     test('should return NaN if both x and y are negative', () => {
         const result = percentage(-50, -100);
         expect(result).toBeNaN();
     });
 
     test('should return 0 if x is zero', () => {
         const result = percentage(0, 100);
         expect(result).toBe(0);
     });*/

});

