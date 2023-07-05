const functions = require('./functions')
// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database Initialized...')
// const closeDatabase = () => console.log('Database Closed...')

const checkName = () => console.log('Checking name...')

describe('Checking Names', () => {
	beforeEach(() => checkName())
	test('User is Jeff', () => {
		const user = 'Jeff'
		expect(user).toBe('Jeff')
	})
	test('User is Karen', () => {
		const user = 'Karen'
		expect(user).toBe('Karen')
	})
})

test('add 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4)
})
test('add 2 + 2 to NOT equal 5', () => {
	expect(functions.add(2, 2)).toBe(4)
})
// toBeNull matches only null
test('Should be null', () => {
	expect(functions.isNull()).toBeNull()
})
// toBeFalsy matches anything that an if statement treats as false
test('Should be falsy', () => {
	expect(functions.checkValue()).toBeFalsy()
})
// toStrictEqual of toEqual
test('User should be Brad Traversy object', () => {
	expect(functions.createUser()).toStrictEqual({ firstName: 'Brad', lastName: 'Traversy' })
})
// Less than and greater than
test('Should be under 1600', () => {
	const load1 = 800
	const load2 = 700
	expect(load1 + load2).toBeLessThan(1600)
})
test('Should be under 1600', () => {
	const load1 = 800
	const load2 = 800
	expect(load1 + load2).toBeLessThanOrEqual(1600)
})
// Regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/)
})
// Arrays
test('Admin should bes included in the array', () => {
	usernames = ['john', 'kevin', 'admin']
	expect(usernames).toContain('admin')
})
// Working with async data

// Promises
test('User fetched name should be Leanne Graham', () => {
	expect.assertions(1)
	return functions.fetchUser().then(data => expect(data.name).toEqual('Leanne Graham'))
})
// Async/Await
test('User fetched name should be Leanne Graham', async () => {
	expect.assertions(1)
	const data = await functions.fetchUser()
	expect(data.name).toEqual('Leanne Graham')
})

// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
