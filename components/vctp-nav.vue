<template>
  <nav class="uk-navbar-container uk-margin-bottom">
    <div class="uk-container uk-container-small uk-container-menu">
      <nav class="uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <AppLogo />
          <ul class="uk-navbar-nav">
            <li><n-link to="/vctp/inicio/abertura">Abertura</n-link></li>
            <li><n-link to="/vctp/inicio/acao">Ação</n-link></li>
            <li><n-link to="/vctp/fechamento/chamado">Fechamento</n-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import AppLogo from '~/components/app-logo.vue';

export default {
  components: {
    AppLogo,
  },
};
</script>