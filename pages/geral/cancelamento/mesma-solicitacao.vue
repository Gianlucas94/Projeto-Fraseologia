<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-child-width-expand@s uk-margin">
      <div>
        <label for="tipo-chamado" class="uk-form-label required">Chamado anterior</label>
        <div>
          <label> <input type="text" class="uk-input" required v-model="chamado" @input="updateDetalhes" /></label>
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
      resumo: 'Mesma solicitação',
      status: 'Cancelado',
      detalhes: '',
      // ---
      chamado: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.detalhes = `Chamado cancelado devido à duplicidade com ${this.tipoChamado}.`;
    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.teste = this.$store.state.tipoChamado;

      this.detalhes = `Chamado cancelado devido à duplicidade com o ${this.chamado}.`;
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>