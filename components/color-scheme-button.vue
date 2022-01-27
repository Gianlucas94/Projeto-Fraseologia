<template>
  <button class="color-toggle" title="Trocar tema" @click="toggleColor">
    <span class="icon"></span>
  </button>
</template>

<script>
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.querySelector('html').classList.add('dark');
  localStorage.theme = 'dark';
} else {
  document.querySelector('html').classList.remove('dark');
  localStorage.theme = '';
}

export default {
  methods: {
    toggleColor(e) {
      e.preventDefault();
      if (localStorage.theme === 'dark') {
        document.querySelector('html').classList.remove('dark');
        localStorage.theme = '';
      } else {
        document.querySelector('html').classList.add('dark');
        localStorage.theme = 'dark';
      }
    },
  },
};
</script>
