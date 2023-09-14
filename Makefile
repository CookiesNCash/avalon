install:
	npm ci

run:
	node ./src/index.js

lint:
	npx eslint .

fix-lint:
	npx eslint --fix .