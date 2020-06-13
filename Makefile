setup:
	npm install

test.all:
	npm run test:all

test.chrome:
	npm run test:chrome

test.safari:
	npm run test:safari

test.firefox:
	npm run test:firefox

list:
	npx codeceptjs list