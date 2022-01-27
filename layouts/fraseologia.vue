<template>
  <div>
    <color-scheme-button />
    <div v-if="layout === 'atendimento'">
      <atendimento-nav />
    </div>
    <div v-if="layout === 'remoto'">
      <remoto-nav />
    </div>
    <div v-else-if="layout === 'telecom'">
      <telecom-nav />
    </div>
    <div v-else-if="layout === 'mobilidade'">
      <mobilidade-nav />
    </div>
    <div v-else-if="layout === 'vctp'">
      <vctp-nav />
    </div>
    <div v-else-if="layout === 'homologacao'">
      <homologacao-nav />
    </div>
    <form>
      <main class="main fraseologia uk-container uk-container-small uk-card">
        <nuxt />
      </main>
      <app-footer />
      <log-modal />
    </form>
  </div>
</template>

<script>
// Components
import ColorSchemeButton from '~/components/color-scheme-button.vue';
import AtendimentoNav from '~/components/atendimento-nav.vue';
import RemotoNav from '~/components/remoto-nav.vue';
import TelecomNav from '~/components/telecom-nav.vue';
import MobilidadeNav from '~/components/mobilidade-nav.vue';
import VctpNav from '~/components/vctp-nav.vue';
import HomologacaoNav from '~/components/homologacao-nav.vue';
import AppFooter from '~/components/app-footer.vue';
import LogModal from '~/components/log-modal.vue';

export default {
  components: {
    ColorSchemeButton,
    AtendimentoNav,
    RemotoNav,
    TelecomNav,
    MobilidadeNav,
    VctpNav,
    HomologacaoNav,
    AppFooter,
    LogModal,
  },
  data() {
    return {
      layout: localStorage.layout,
    };
  },
};
</script>
