<template>
  <div class="m-field">
    <slot/>
<!--    <label-->
<!--      class="a-label f-field"-->
<!--      :class="{ 'f-correct': correct, 'f-error': error }"-->
<!--      :for="id"-->
<!--    >-->
<!--      {{ placeholder }}-->
<!--    </label>-->
    <icon-eye
      v-if="isPassword && showPassword === false"
      class="a-icon f-input"

      :size="26"
      @click="showPassword = true"
    />
    <icon-eye-off
      v-if="isPassword && showPassword"
      class="a-icon f-input"
      :size="26"
      @click="showPassword = false"
    />
    <icon-alert
      v-if="error && isPassword === false"
      class="a-icon f-input f-error"
      :size="26"
    />
    <icon-check-bold
      v-if="correct && isPassword === false && error === false"
      class="a-icon f-input f-correct"
      :size="26"
    />
    <div
      class="a-assist"
      :class="{ 'f-error': error }"
    >
      {{ assist }}
    </div>
  </div>
</template>

<script>
import IconEye from 'vue-material-design-icons/Eye';
import IconEyeOff from 'vue-material-design-icons/EyeOff';
import IconAlert from 'vue-material-design-icons/Alert';
import IconCheckBold from 'vue-material-design-icons/CheckBold';

export default {
  name: 'm-field',
  components: {
    IconEye,
    IconEyeOff,
    IconAlert,
    IconCheckBold,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    correct: {
      type: Boolean,
      default: false,
    },
    assist: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    MField: {
      value: null,
      showPassword: false,
      typePassword: false,
      focused: false,
      disabled: false,
      correct: false,
      error: true
    },
    id: '',
    showPassword: false,
  }),
  provide () {
    return {
      MField: this.MField
    }
  },
  computed: {
    isPassword () {
      return this.MField.typePassword === true;
    },
    additionalClasses () {
      return {
        'f-filled': this.vModel !== '',
        'f-error': this.error,
        'f-correct': this.correct,
        'f-icon': this.error || this.typePassword,
      };
    },
    getType () {
      if (this.isPassword) {
        return this.showPassword ? '' : this.type;
      } else {
        return this.type;
      }
    },
  },
  mounted() {
    console.log(this);
  }
};
</script>
