# vue-atomic (is not finished)
The most flexible Vue UI Library

## Installation
```
npm i -D @dominik.betka/vue-atomic
```

## Using
#### Add all components
```js
import VueAtomic from 'vue-atomic'
import 'vue-atomic/dist/style.css'

Vue.use(VueAtomic)
```
### Add single component
with default name
```js
import {AButton} from 'vue-atomic'
import 'vue-atomic/dist/atoms/button.sass' // file not exists yet

Vue.component(AButton.name, AButton) // component name is a-button
```
with own name
```js
import {AButton} from 'vue-atomic'
import 'vue-atomic/dist/atoms/button.sass' // file not exists yet

Vue.component('new-button', AButton) // component name is new-button
```
