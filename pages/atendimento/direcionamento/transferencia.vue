<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div>
      <label for="detalhes">Envio de chat (warm transfer) para o especializado</label>
      <textarea id="detalhes" class="uk-textarea" readonly>
Sr(a) estou te transferindo para o atendimento especializado, peço por favor que fique no chat até o analista pegar o seu atendimento, a equipe pode ter fila para essa atuação.</textarea
      >
    </div>
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  data() {
    return {
      resumo: 'Transferência',
      status: 'Em andamento',
    };
  },
  mounted() {
    Fraseologia.selectForm();
  },
};
</script>
