# vue-atomic (pre-alpha version)
The most flexible Vue UI Library

## Installation
```
npm i -D @dbetka/vue-atomic
```

## Using
#### Add all components
```js
import VueAtomic from '@dbetka/vue-atomic'
import '@dbetka/vue-atomic/dist/style.sass'

Vue.use(VueAtomic)
```
### Add single component
with default name
```js
import { MInput } from '@dbetka/vue-atomic'
import 'vue-atomic/dist/style.sass'

Vue.component(MInput.name, MInput) // component name is m-input
```
with own name
```js
import { MInput } from '@dbetka/vue-atomic'
import '@dbetka/vue-atomic/dist/style.sass'

Vue.component('new-input', MInput) // component name is new-input
```

## List of widgets
- MInput
- MTextarea
