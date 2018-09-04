# DOJO Jest

## Pre-requisite

- Node.JS (9+)

We recommand the use of IDE for better developer's experience.

- [IntellJ](https://www.jetbrains.com/idea/)
- [Webstorm](https://www.jetbrains.com/webstorm/)
- [VS Code](https://code.visualstudio.com/)
  - plugins:
    - Coverage Gutters
    - eslint

## How to install

```sh
git clone https://github.com/dojo-javascript/jest.git ./dojo-jest
cd dojo-jest
npm install
```

## How to start test

```sh
# Start test runner in single run mode
npm run test

# Start test runner in watch mode
npm run test:watch

# Start test runner with code coverage
npm run test:watch -- --coverage
```

### Step 1

Contain basic tests to let you know if the current installation is correct.

```sh
git checkout step-1
```

### Step 2

Demonstrate the use of jest snapshot feature.

```sh
git checkout step-2
```

### Step 3

Test async functions with jest.

```sh
git checkout step-3
```

### Step 4

Demonstrate how to use spies and mock with jest.

```sh
git checkout step-4
```

### Step 5

How to handle exceptions in unit tests.

```sh
git checkout step-5
```

### Step 6

How to manage clock, timeout, intervals.

```sh
git checkout step-6
```

### Step 7

Reuse module mocks across tests.

```sh
git checkout step-7
```

### Step 8

Some real-world test cases.

```sh
git checkout step-8
```
