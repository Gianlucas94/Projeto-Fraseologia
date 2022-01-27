<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="software" class="required">Software</label>
          <input id="software" type="text" class="uk-input" required v-model="software" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="licenca" class="required">Verificação de licença</label>
          <div class="radios">
            <label> <input type="radio" name="licenca" value="Não" v-model="licenca" @change="updateDetalhes" /> Não </label>
            <label> <input type="radio" name="licenca" value="Sim" v-model="licenca" @change="updateDetalhes" /> Sim </label>
          </div>
        </div>
        <div class="uk-margin">
          <label for="tempo" class="required">Tempo estimado</label>
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
      resumo: 'Instalação de software',
      status: 'Em andamento',
      detalhes: '',
      // ---
      software: '',
      licenca: 'Não',
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
      this.detalhes = `Foram realizados os testes de funcionalidade e constatado a necessidade de reinstalação do software: ${this.software}
Necessário verificação de Licença de SW: ${this.licenca}
Tempo Estimado: ${this.tempo}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
