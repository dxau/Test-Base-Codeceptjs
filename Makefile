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

# report.combine:
# 	find . -type f -name "report.json" 
# 	./node_modules/.bin/marge 

sonar: lint.report
	./node_modules/.bin/sonar-scanner \
		-Dsonar.projectKey=test \
		-Dsonar.sources='./' \
		-Dsonar.coverage.exclusions=./node_modules/**/*,output/**/* \
		-Dsonar.eslint.reportPaths=./output/eslint/report.json \
		