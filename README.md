# vue-atomic (pre-alpha version)
The most flexible Vue UI Library.
Link to [npm package](https://www.npmjs.com/package/@dbetka/vue-atomic).

## Installation
```
npm i -D @dbetka/vue-atomic
```

## Usage

#### Full Bundle
```js
import VueAtomic from '@dbetka/vue-atomic'
import '@dbetka/vue-atomic/dist/theme/light.css'
import '@dbetka/vue-atomic/dist/index.css'

Vue.use(VueAtomic)
```

### Individual components
with default name
```js
import { MInput } from '@dbetka/vue-atomic'
import '@dbetka/vue-atomic/dist/theme/light.css'
import '@dbetka/vue-atomic/dist/molecules/input.css'

Vue.component(MInput.name, MInput) // component name is m-input
```
with own name
```js
import { MInput } from '@dbetka/vue-atomic'
import '@dbetka/vue-atomic/dist/theme/light.css'
import '@dbetka/vue-atomic/dist/molecules/input.css'

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

#### Props

Name         |      Description                                                             | Type                      | Default   | Required
-------------|------------------------------------------------------------------------------|---------------------------|-----------|:--------:
v-model      | The model variable to bind the input value.                                  | String, Boolean, Number   | undefined | Yes
disabled     | **In future** - Disable the input and prevent it interactions.               | Boolean                   | false     | No
placeholder  | The input placeholder. Similar to HTML5 placeholder attribute.               | String                    | ''        | No
type         | The input type. Similar to HTML5 type attribute.                             | String                    | false     | No
error        | The status changes text field border, label and assist text color to red.    | Boolean                   | false     | No
correct      | The status changes text field border and label color to red.                 | Boolean                   | false     | No
assist       | The assist message below text field.                                         | String                    | ''        | No

#### Classes

Name      | Features            | Related to state  | Description      
----------|---------------------|-------------------|:------------:
m-input   |                     |                   | - 
a-field   | f-textarea f-filled | f-error f-correct | - 
a-label   | f-field             | f-error f-correct | - 
a-assist  |                     | f-error           | - 
a-icon    | f-input             | f-error f-correct | - 

#### Events

Name     | Description      
---------|--------------------------
input    | Contains selector value.


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

#### Props

Name         |      Description                                                             | Type                      | Default   | Required
-------------|------------------------------------------------------------------------------|---------------------------|-----------|:--------:
v-model      | The model variable to bind the input value.                                  | String, Boolean, Number   | undefined | Yes
~~disabled~~ | **In future** - Disable the input and prevent it interactions.               | Boolean                   | false     | No
placeholder  | The textarea placeholder. Similar to HTML5 placeholder attribute.            | String                    | ''        | No
error        | The status changes text field border, label and assist text color to red.    | Boolean                   | false     | No
correct      | The status changes text field border and label color to red.                 | Boolean                   | false     | No
assist       | The assist message below text field.                                         | String                    | ''        | No

#### Classes

Name      | Features            | Related to state  | Description      
----------|---------------------|-------------------|:------------:
m-input   |                     |                   | - 
a-field   | f-textarea f-filled | f-error f-correct | - 
a-label   | f-field             | f-error f-correct | - 
a-assist  |                     | f-error           | - 
a-icon    | f-input             | f-error f-correct | - 

#### Events

Name     | Description      
---------|-------------------------
input    | Contains selector value

## Project maintenance 

Scripts used in `package.json` has own docs [here](scripts/README.md)
