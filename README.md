# vue-atomic (pre-alpha version)
The most flexible Vue UI Library

## Installation
```
npm i -D @dbetka/vue-atomic
```

## Usage

#### Full Bundle
```js
import VueAtomic from '@dbetka/vue-atomic'
import '@dbetka/vue-atomic/dist/style.sass'

Vue.use(VueAtomic)
```

### Individual components
with default name
```js
import { MInput } from '@dbetka/vue-atomic'
import '@dbetka/vue-atomic/dist/style.sass'

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

## Details for each widget

### MInput

```vue
<template>
  <div>
    <m-input v-model="initial" />
    
    <m-input 
      v-model="initial" 
      placeholder="Disabled" 
      disabled
    />

    <m-input 
      v-model="assist" 
      placeholder="Assist"
      assist="Some text"
    />

    <m-input 
      v-model="correct" 
      placeholder="Correct"
      correct
    />

    <m-input 
      v-model="error" 
      placeholder="Error"
      error
      assist="Some text tells where you've made mistake"
    />

    <m-input 
      v-model="password" 
      type="password"
      placeholder="Password"
    />

  </div>
</template>

<script>
  export default {
    name: 'o-form',
    data: () => ({
      initial: 'Initial Value',
      assist: null,
      correct: null,
      error: null,
      password: null,
    })
  }
</script>
```

Props:
- **v-model**: String|Boolean|Number | **default**: undefined
- **disabled**: Boolean | **default**: false
- **placeholder**: String | **default**: ''
- **type**: String | **default**: ''
- **error**: Boolean | **default**: false
- **correct**: Boolean | **default**: false
- **assist**: String | **default**: ''

Classes:
- m-input
- a-field f-filled f-error f-correct
- a-label f-field f-error f-correct
- a-assist f-error
- a-icon f-input f-error f-correct

Events:
- input: contains selector value


### MTextarea

```vue
<template>
  <div>
    <m-textarea v-model="initial" />
    
    <m-textarea 
      v-model="initial" 
      placeholder="Disabled" 
      disabled
    />

    <m-textarea 
      v-model="assist" 
      placeholder="Assist"
      assist="Some text"
    />

    <m-textarea 
      v-model="correct" 
      placeholder="Correct"
      correct
    />

    <m-textarea 
      v-model="error" 
      placeholder="Error"
      error
      assist="Some text tells where you've made mistake"
    />

  </div>
</template>

<script>
  export default {
    name: 'o-form',
    data: () => ({
      initial: 'Initial Value',
      assist: null,
      correct: null,
      error: null,
    })
  }
</script>
```

Props:
- **v-model**: String|Boolean|Number | **default**: undefined
- _in future_ // ~~**disabled**: Boolean | **default**: false~~
- **placeholder**: String | **default**: ''
- **error**: Boolean | **default**: false
- **correct**: Boolean | **default**: false
- **assist**: String | **default**: ''

Classes:
- m-input
- a-field f-textarea f-filled f-error f-correct
- a-label f-field f-error f-correct
- a-assist f-error f-correct
- a-icon f-input f-error f-correct

Events:
- input: contains selector value
