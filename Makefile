install:
	npm ci

lint:
	npm run lint

lint-js:
	npm run lint:js

lint-scss:
	npm run lint:scss

prettify:
	npm run prettify

clean:
	rm -rf build/*

clean-dist:
	rm -rf dist/*

build: clean
	npm run lint
	npm run prettify
	npm run build:scss-to-css
	npm run build:pug-to-html
	npm run build:post-css
	npm run build:js
	npm run copy
	npm run sprite
	npm run webp
	npm run rename:images
	npm run minify:images

dist: clean-dist
	npm run copy:dist
	npm run minify:html
	npm run minify:js

fast-deploy: dist
	npm run deploy

deploy: build dist
	npm run deploy

start:
	npm run start
