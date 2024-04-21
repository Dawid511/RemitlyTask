import {describe, expect, test} from '@jest/globals';
import {verifyInputJson} from ".."

// importing mocks
import inputMockAsterisk from './__mocks__/inputMockSingleAsterisk.json';
import inputMockNoAsterisk from './__mocks__/inputMockNoAsterisk.json';
import inputMockNotSingleAsterisk from './__mocks__/inputMockNotSingleAsterisk.json';
import inputMockNoResourceField from './__mocks__/inputMockNoResourceField.json';
import inputMockMissingFields from './__mocks__/inputMockMissingFields.json';

describe('Input JSON verification', () => {

    test('should return false if Resource field contains a single asterisk', () => {
        const result = verifyInputJson(inputMockAsterisk);

        expect(result).toBe(false);
    });

    test('should return true if Resource field does not contain a single asterisk', () => {
        const result = verifyInputJson(inputMockNoAsterisk);

        expect(result).toBe(true);
    });

    test('should return true if Resource field contain not a single asterisk', () => {
        const result = verifyInputJson(inputMockNotSingleAsterisk);

        expect(result).toBe(true);
    });

    test('should throw error if PolicyDocument or Statement field is missing', () => {
        expect(() => verifyInputJson(inputMockMissingFields)).toThrowError();
    });

    test('should return error if field resource doesnt exist', () => {
        expect(() => verifyInputJson(inputMockNoResourceField)).toThrow();
    });

});
