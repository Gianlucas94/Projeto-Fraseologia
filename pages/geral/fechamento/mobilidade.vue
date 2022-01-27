<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="imei" class="uk-form-label required">IMEI</label>
          <input id="imei" class="uk-input" type="text" required v-model="imei" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="linha" class="uk-form-label required">Nº da linha</label>
          <input id="linha" class="uk-input" type="text" required v-model="linha" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="solucao" class="uk-form-label required">Solução</label>
          <textarea id="solucao" class="uk-textarea" required v-model="solucao" @input="updateDetalhes"></textarea>
        </div>
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
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    LogButtons,
  },
  data() {
    return {
      resumo: 'Fechamento de Chamado',
      status: 'Resolvido',
      // ---
      imei: '',
      linha: '',
      solucao: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      this.detalhes = `IMEI: ${this.imei}
Número da Linha: ${this.linha}
Solução: ${this.solucao}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>