UNITS = $(shell find test -name "*.test.js")

unit:
	NODE_ENV=test ./node_modules/.bin/mocha $(UNITS)

test:
	NODE_ENV=test ./node_modules/.bin/mocha $(UNITS) $(SPECS)

.PHONY: test unit