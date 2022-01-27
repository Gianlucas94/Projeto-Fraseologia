<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-child-width-expand@s uk-margin">
      <div class="uk-margin">
        <label for="chamado" class="uk-form-label required">Tipo de chamado</label>
        <div class="radios">
          <label> <input type="radio" name="chamado" value="Incidente" v-model="chamado" @change="updateDetalhes" /> Incidente </label>
          <label> <input type="radio" name="chamado" value="Tarefa" v-model="chamado" @change="updateDetalhes" /> Tarefa </label>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="analista" class="uk-form-label required">Analista</label>
          <input id="analista" type="text" class="uk-input" required v-model="analista" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="motivo" class="uk-form-label required">Motivo</label>
          <textarea id="motivo" class="uk-textarea" required v-model="motivo" @change="updateDetalhes"></textarea>
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
      resumo: 'Direcionamento Interno',
      status: 'Direcionado',
      detalhes: '',
      // ---
      chamado: 'Incidente',
      analista: '',
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
      this.detalhes = `${this.chamado} direcionado para analista: ${this.analista}
Motivo: ${this.motivo}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>