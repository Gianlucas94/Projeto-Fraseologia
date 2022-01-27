<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="problema" class="required">Problema</label>
          <input id="problema" type="text" class="uk-input" required v-model="problema" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="tempo" class="required">Tempo gasto até o momento</label>
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
      resumo: 'Velocidade do link para instalação / config de apps',
      status: 'Em andamento',
      detalhes: '',
      // ---
      problema: '',
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
      this.detalhes = `Foi identificado que e velocidade do link está abaixo de 512 kbps causando o problema: ${this.problema}
Tempo gasto até o momento: ${this.tempo}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
