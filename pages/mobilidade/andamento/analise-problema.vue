<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="problema" class="uk-form-label required">Problema</label>
          <textarea id="problema" class="uk-textarea" required v-model="problema" @change="updateDetalhes"></textarea>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="acao" class="uk-form-label required">Ação para correção</label>
          <textarea id="acao" class="uk-textarea" required v-model="acao" @change="updateDetalhes"></textarea>
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
      resumo: 'Análise do problema',
      status: 'Em andamento',
      nome: '',
      detalhes: '',
      // ---
      problema: '',
      acao: '',
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
      this.detalhes = `Foi identificado problema: ${this.problema}
Ação realizada para correção do problema: ${this.acao}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>