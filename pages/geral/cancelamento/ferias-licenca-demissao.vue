<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label class="uk-label-form required">Período</label>
          <div class="radios">
            <label><input type="radio" name="periodo" value="férias" v-model="periodo" @change="updateDetalhes" /> Férias</label>
            <label><input type="radio" name="periodo" value="licença" v-model="periodo" @change="updateDetalhes" /> Licença</label>
            <label><input type="radio" name="periodo" value="demissão" v-model="periodo" @change="updateDetalhes" /> Demissão</label>
          </div>
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
      resumo: 'Solicitante em período férias / licença / demissão',
      status: 'Cancelado',
      detalhes: '',
      // ---
      periodo: 'férias',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.detalhes = `Chamado cancelado devido o usuário estar em período de ${this.periodo}, conforme evidência em anexo.
Solicitamos a abertura de um novo chamado após seu retorno.`;

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.detalhes = `Chamado cancelado devido o usuário estar em período de ${this.periodo}, conforme evidência em anexo.
Solicitamos a abertura de um novo chamado após seu retorno.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>