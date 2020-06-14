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

lint:
	npm run lint

list:
	npx codeceptjs list

sonar:
	sonar-scanner \
		-Dsonar.projectKey=test \
		-Dsonar.sources="./" \
		-Dsonar.coverage.exclusions=./node_modules/**/*,output/**/*