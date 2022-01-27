<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="chamado" class="uk-form-label required">Nº do chamado</label>
          <input id="chamado" type="text" class="uk-input" required v-model="chamado" @change="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="nome" class="uk-form-label required">Nome do colaborador</label>
          <input id="nome" type="text" class="uk-input" required v-model="nome" @input="updateDetalhes" />
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
      resumo: 'Script do Teams',
      status: 'Em espera - Motivo: Aguardando solicitante',
      detalhes: '',
      // ---
      chamado: '',
      nome: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    if (localStorage.getItem('chamado')) {
      this.chamado = localStorage.getItem('chamado');
    }

    if (localStorage.getItem('nome')) {
      this.nome = localStorage.getItem('nome');
    }

    this.detalhes = `Olá ${this.nome}, tudo bem? Sou da equipe de TI, entro em contato para atendimento ao seu chamado número ${this.chamado}.
Caso não esteja disponível para atendimento nos próximos 05 minutos, entraremos em contato novamente no próximo período.`;

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      localStorage.setItem('chamado', this.chamado);
      localStorage.setItem('nome', this.nome);

      this.detalhes = `Olá ${this.nome}, tudo bem? Sou da equipe de TI, entro em contato para atendimento ao seu chamado número ${this.chamado}.
Caso não esteja disponível para atendimento nos próximos 05 minutos, entraremos em contato novamente no próximo período.`;
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
