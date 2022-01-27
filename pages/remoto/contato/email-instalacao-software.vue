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
          <input id="nome" type="text" class="uk-input" required v-model="nome" @change="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="software" class="uk-form-label required">Software</label>
          <input id="software" type="text" class="uk-input" required v-model="software" @input="updateDetalhes" />
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
      resumo: 'E-mail Instalação de Software',
      status: 'Em espera - Motivo: Aguardando solicitante',
      detalhes: '',
      // ---
      chamado: '',
      nome: '',
      software: '',
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

    this.detalhes = `Assunto: Contato referente ao chamado ${this.chamado}

Prezado colaborador ${this.nome}, tudo bem?
Esse e-mail é referente a instalação do software ${this.software}, você se encontra disponível para o atendimento?
Se não houver retorno da disponibilidade em até 5 minutos realizarei uma nova tentativa de contato no próximo período. Obrigado(a)!`;
    this.$store.commit('updateDetalhes', this.detalhes);

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      localStorage.setItem('chamado', this.chamado);
      localStorage.setItem('nome', this.nome);

      this.detalhes = `Assunto: Contato referente ao chamado ${this.chamado}

Prezado colaborador ${this.nome}, tudo bem?
Esse e-mail é referente a instalação do software ${this.software}, você se encontra disponível para o atendimento?
Se não houver retorno da disponibilidade em até 5 minutos realizarei uma nova tentativa de contato no próximo período. Obrigado(a)!`;
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
