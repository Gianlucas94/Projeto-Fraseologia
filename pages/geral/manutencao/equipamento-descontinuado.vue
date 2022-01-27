<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="chamado" class="uk-form-label required">Chamado</label>
          <input id="chamado" type="text" class="uk-input" required v-model="chamado" @input="updateDetalhes" />
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
      resumo: 'Equipamento Descontinuado',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      chamado: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.data = Fraseologia.today();
    this.hora = Fraseologia.now();
    this.dataHtml = Fraseologia.todayHtml(this.data);

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      this.detalhes = `De Acordo com o Laudo em anexo, o equipamento foi descontinuado.
O equipamento será enviado para Descarte Sustentável, conforme processos internos.
Foi aberto chamado ${this.chamado} para realização do processo de Descarte.
`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
