# type-es

ECMAScript type helper


### Usage

```javascript
import { typeIs } from "type-es";

typeIs(false); // => boolean

typeIs(""); // => string

typeIs(12.1); // => number

typeIs(null); // => null

typeIs(undefined); // => undefined

typeIs([]); // => array

typeIs({}); // => object

typeIs(() => {}); // => function
```

```javascript
import { isNumber, isMoney, transformStringNumber } from "type-es";
```
