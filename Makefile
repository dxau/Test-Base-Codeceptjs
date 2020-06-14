PROJECT_NAME = "Codeceptjs"

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

lint.report:
	npm run lint:report

lint.stdout:
	npm run lint:stdout

list:
	npx codeceptjs list

sonar: lint.report
	./node_modules/.bin/sonar-scanner \
		-Dsonar.projectKey=$(PROJECT_NAME) \
		-Dsonar.sources='./' \
		-Dsonar.coverage.exclusions=./node_modules/**/*,output/**/* \
		-Dsonar.eslint.reportPaths=./output/eslint/report.json \
		