## Requirement

- Javascript ES module

## Features

- Translate language

## Installation

```bash
npm install --save vtk-translate
```

## Usage

```javascript
import translate from "vtk-translate";

translate("Hello world!").then(function (response) {
  console.log(response);
});

// Specific language

translate("Hello world!", { from: "en", to: "vi" }).then(function (response) {
  console.log(response);
});
```

## API

### translate(text, options)

#### text

Type: [string]
The text to be translated

#### options

Type: [object]

##### [from]

Type: [string]
Default: [auto]
From language

##### [to]

Type: [string]
Default: [vi]
To language

### Returns a [text] translated
