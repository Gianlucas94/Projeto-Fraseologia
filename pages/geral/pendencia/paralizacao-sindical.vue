<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="site" class="uk-label-form required">Nome do site</label>
          <input type="text" id="site" class="uk-input" v-model="site" @input="updateDetalhes" />
        </div>
      </div>
    </div>
    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import LogButtons from '~/components/log-buttons';
import DatePick from 'vue-date-pick';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    LogButtons,
    DatePick,
  },
  data() {
    return {
      resumo: 'Paralisação Sindical (PCLT)',
      status: 'Em espera - Aguardando Problema',
      detalhes: '',
      // ---
      site: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.detalhes = `Informamos que devido a paralisação sindical, o site ${this.site} foi paralisado, não sendo possível atendimento até a normalização.`;
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>