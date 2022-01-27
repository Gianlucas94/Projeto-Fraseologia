<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="procedimento" class="uk-form-label required">Procedimento</label>
          <textarea id="procedimento" class="uk-textarea" required v-model="procedimento" @input="updateDetalhes"></textarea>
        </div>
      </div>
    </div>

    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import LogButtons from '~/components/log-buttons';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    LogButtons,
  },
  data() {
    return {
      resumo: 'Finalização de testes',
      status: 'Em andamento',
      detalhes: '',
      // ---
      procedimento: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      this.detalhes = `Efetuado procedimento: ${this.procedimento}
Equipamento em processo de finalização de testes, para posterior entrega ao usuário.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>