# Makefile for wc-mmd Web Component

# Default target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  dev     - Start development server"
	@echo "  clean   - Remove node_modules and package-lock.json"

# Start development server
.PHONY: dev
dev:
	npx serve .

# Clean dependencies
.PHONY: clean
clean:
	rm -rf node_modules package-lock.json

# Install dependencies (if needed for future expansions)
.PHONY: install
install:
	npm install

# Show npm package info
.PHONY: info
info:
	npm info wc-mmd
