# type-es

ECMAScript type helper

### Usage

```javascript
import { typeIs } from "type-es";

typeIs(false); // => boolean

typeIs(""); // => string

typeIs(12.1); // => number

typeIs(NaN); // => number

typeIs(null); // => null

typeIs(undefined); // => undefined

typeIs([]); // => array

typeIs({}); // => object

typeIs(() => {}); // => function

typeIs(function a() {}); // => function
```

```javascript
import { isNumber } from "type-es";

isNumber('123'); // => false

isNumber(NaN); // => false

isNumber(.123); // => true
```

```javascript 
import { isStringNumber } from "type-es";

isStringNumber(''); // => false

isStringNumber(.123); // => true

isStringNumber('.1223f'); // => true

isStringNumber('1223f', true); // => false

isStringNumber('.1223', true); // => true
```

```javascript 
import { transformStringNumber } from "type-es";

transformStringNumber(''); // => undefined

transformStringNumber(.123); // => 0.123

transformStringNumber('.123f'); // => 0.123

transformStringNumber('1223f', true); // => undefined

transformStringNumber('1223f', true, '--'); // => --

transformStringNumber('.1223', true); // => 0.1223
```

```javascript 
import { thousandsNumber } from "type-es";

thousandsNumber(''); // => undefined

thousandsNumber('12123f'); // => 12,123

thousandsNumber('1223f', true); // => undefined

thousandsNumber('1223f', true, '--'); // => --

thousandsNumber('1111.1223', true); // => 1,111.1223
```

```javascript 
import { isMoney } from "type-es";

isMoney('.123'); // => false

isMoney('.12'); // => true

isMoney(123); // => true

isMoney('123.'); // => false

isMoney('0'); // => true
```

 
 