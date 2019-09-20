declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $nextTick: any;
    _renderProxy: any;
  }
}

declare module '*.styl';
declare module '*.js';
declare module '*.tsx';
