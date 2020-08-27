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
      v-if="isPassword && passwordShown === false"
      class="a-icon f-input"

      :size="26"
      @click="passwordShown = true"
    />
    <icon-eye-off
      v-if="isPassword && passwordShown"
      class="a-icon f-input"
      :size="26"
      @click="passwordShown = false"
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
      id: '',
      value: null,
      currentTypePassword: false,
      defaultTypePassword: false,
      focused: false,
      disabled: false,
      correct: false,
      error: false,
    },
  }),
  provide () {
    return {
      MField: this.MField
    }
  },
  computed: {
    isPassword () {
      return this.MField.defaultTypePassword === true;
    },
    passwordShown: {
      get() {
        return this.MField.currentTypePassword === false;
      },
      set(passwordShown) {
        this.MField.currentTypePassword = passwordShown === false
      }
    },
    additionalClasses () {
      return {
        'f-filled': this.vModel !== '',
        'f-error': this.error,
        'f-correct': this.correct,
        'f-icon': this.error || this.isPassword,
      };
    },
  },
  watch: {
    error(state) {
      this.MField.error = state
    },
    correct(state) {
      this.MField.correct = state
    },
  },
  created() {
    this.MField.error = this.error
    this.MField.correct = this.correct
  }
};
</script>
