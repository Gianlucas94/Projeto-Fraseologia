<template>
  <div>
    <app-header />

    <main
      class="
        main
        uk-container uk-container-small uk-card uk-margin-large-bottom
      "
    >
      <h1 class="uk-h4 uk-text-uppercase">Áreas</h1>
      <div class="uk-child-width-1-5@m uk-grid-small uk-grid-match" uk-grid>
        
          <div>
          <n-link
            to="/atendimento/inicio/chat"
            class="uk-button uk-button-default"
            @click.native="updateLayout('atendimento')"
            >Atendimento</n-link
          >
        </div>
        <div>
          <n-link
            to="/geral/inicio/atendimento"
            class="uk-button uk-button-default"
            @click.native="updateLayout('remoto')"
            >Field</n-link
          >
        </div>
        <div>
          <n-link
            to="/geral/inicio/atendimento"
            class="uk-button uk-button-default"
            @click.native="updateLayout('noc')"
            >Noc</n-link
          >
        </div>
        <!--
        <div>
          <n-link
            to="/geral/inicio/atendimento"
            class="uk-button uk-button-default"
            @click.native="updateLayout('telecom')"
            >Telefonia</n-link
          >
        </div>
        <div>
          <n-link
            to="/geral/inicio/atendimento"
            class="uk-button uk-button-default"
            @click.native="updateLayout('mobilidade')"
            >Mobilidade</n-link
          >
        </div>
        <div>
          <n-link
            to="/geral/inicio/atendimento"
            class="uk-button uk-button-default"
            @click.native="updateLayout('vctp')"
            >VCTP</n-link
          >
        </div>
        !-->
      </div>
      
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/app-header.vue';
import AppFooter from '~/components/app-footer.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    updateLayout(layout) {
      localStorage.layout = layout;
      this.$store.commit('updateLayout', layout);
    },
  },
};
</script>
