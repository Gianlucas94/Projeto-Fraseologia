<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="motivo" class="uk-label-form required">Motivo</label>
          <textarea id="motivo" class="uk-textarea" required v-model="motivo" @input="updateDetalhes"></textarea>
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
      resumo: 'Solucionado Sem Intervenção Técnica',
      status: 'Cancelado',
      detalhes: '',
      // ---
      motivo: '',
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
      this.detalhes = `Em contato com o usuário foi constatado que o problema foi solucionando pelo motivo: ${this.motivo}
Por isso, não foi necessário intervenção do suporte técnico.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>