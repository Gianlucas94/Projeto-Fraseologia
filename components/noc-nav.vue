<template>
  <nav class="uk-navbar-container uk-margin-bottom">
    <div class="uk-container uk-container-menu">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <AppLogo />
          <MenuNoc />
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/app-logo.vue';
import MenuNoc from '~/components/noc-menu.vue';

export default {
  components: {
    AppLogo,
    MenuNoc,
  },
};
</script>