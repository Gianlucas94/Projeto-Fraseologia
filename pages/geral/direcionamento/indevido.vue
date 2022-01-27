<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="grupo" class="uk-form-label required">Grupo</label>
          <input id="grupo" type="text" class="uk-input" required v-model="grupo" @input="updateDetalhes" />
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
      resumo: 'Direcionamento Indevido',
      status: 'Direcionado',
      detalhes: '',
      // ---
      grupo: '',
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
      this.detalhes = `Verificamos que o chamado foi direcionado indevidamente para fila de Manutenção.
Ressaltamos que apenas Field Services deve direcionar chamados para filas de Manutenção, pois existem regras e processos atrelados a essas filas. Esses casos impactam internamente e o usuário pode ser impactado também, visto que a tratativa dos chamados das filas de Manutenção é diferenciada.

Chamado será devolvido para a fila: ${this.grupo}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>