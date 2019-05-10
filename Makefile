build:
	@echo "\n> Building assets and starting development server..."
	@yarn build

start:
	@echo "\n> Building assets and starting development server..."
	if test ! -f public/dist/bundle.js; then yarn build; fi;
	@yarn start

clean:
	@echo "\n> Cleaning project..."
	@yarn cache clean
	@rm -rf node_modules
	@rm -rf public/dist

install:
	@echo "\n> Install started..."
	@$(MAKE) clean
	@echo "\n> Installing packages..."
	@yarn install

seed:
	@echo "\n> Seeding the database..."
	@yarn seed
