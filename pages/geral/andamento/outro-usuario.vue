<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        yan
        <div class="uk-margin">
          <label for="chamado" class="required">Tipo de solicitação</label>
          <div class="radios">
            <label> <input type="radio" name="chamado" value="Incidente" v-model="chamado" @change="updateDetalhes" /> Incidente </label>
            <label> <input type="radio" name="chamado" value="Tarefa" v-model="chamado" @change="updateDetalhes" /> Tarefa </label>
          </div>
        </div>
        <div class="uk-margin">
          <label for="inventario" class="required">Inventário</label>
          <input id="inventario" type="text" class="uk-input" required v-model="inventario" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="solicitante" class="required">Solicitante</label>
          <input id="solicitante" type="text" class="uk-input" required v-model="solicitante" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="nomeUsuario" class="required">Em nome de</label>
          <input id="nomeUsuario" type="text" class="uk-input" required v-model="nomeUsuario" @input="updateDetalhes" />
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
      resumo: 'Chamado aberto para outro usuário',
      status: 'Em andamento',
      detalhes: '',
      // ---
      chamado: 'Incidente',
      solicitante: '',
      nomeUsuario: '',
      inventario: '',
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
      this.detalhes = `${this.chamado} aberto pelo solicitante: ${this.solicitante}
Solicitante abriu o chamado EM NOME DE: ${this.nomeUsuario}
Inventário do equipamento onde será realizado atendimento: ${this.inventario}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
