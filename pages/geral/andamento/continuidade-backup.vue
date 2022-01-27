<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="porcentagem" class="required">Porcentagem em andamento</label>
          <input id="porcentagem" type="text" class="uk-input" required v-model="porcentagem" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="tempo" class="required">Tempo estimado para término</label>
          <input id="tempo" type="time" class="uk-input" required v-model="tempo" @input="updateDetalhes" />
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
      resumo: 'Continuidade do backup',
      status: 'Em andamento',
      detalhes: '',
      // ---
      porcentagem: '',
      tempo: '',
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
      this.detalhes = `O backup de arquivos ainda está em andamento, falta ${this.porcentagem} para ser copiado.
Tempo estimado: ${this.tempo}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
