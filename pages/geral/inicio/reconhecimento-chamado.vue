<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ log.resumo }}</h1>

    <div class="uk-grid uk-child-width-expand@s uk-margin">
      <div>
        <label for="dispatcher" class="uk-form-label">Dispatcher</label>
        <input id="dispatcher" class="uk-input" type="text" required v-model="dispatcher" @input="updateDetalhes" />
      </div>
    </div>

    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import LogButtons from '~/components/log-buttons.vue';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.log.resumo}`,
    };
  },
  components: {
    LogButtons,
  },
  data() {
    return {
      log: {
        resumo: 'Reconhecimento do Chamado (Bloco 2)',
        status: 'Em andamento',
      },

      dispatcher: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();
    this.$store.commit('updateResumo', this.log.resumo);
    this.$store.commit('updateStatus', this.log.status);
  },
  methods: {
    updateDetalhes(e) {
      this.$store.commit(
        'updateDetalhes',
        `Acionado equipe técnica para atendimento do chamado. Localidade Bloco 2.
Dispacher: ${e.target.value}`
      );
    },
  },
};
</script>