setup:
	npm install

test.local:
	npm run test:local

test.bs.single:
	npm run test:bs-chrome

test.bs.multi:
	npm run test:bs-all

list:
	npx codeceptjs list