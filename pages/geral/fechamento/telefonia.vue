<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="telefone" class="uk-form-label required">Ramal</label>
          <input id="telefone" class="uk-input" type="text" required v-model="telefone" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="solucao" class="uk-form-label required">Detalhes da solução</label>
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
      detalhes: '',
      // ---
      telefone: '',
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
      this.detalhes = `Ramal: ${this.telefone}
Solução: ${this.solucao}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>