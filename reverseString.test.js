const reverseStr = require('./reverseString')

test('reverseStr function exist', () => {
	expect(reverseStr).toBeDefined()
})
test('String reverses', () => {
	expect(reverseStr('hello')).toBe('olleh')
})
test('String reverses with uppercases', () => {
	expect(reverseStr('Hello')).toBe('olleh')
})
