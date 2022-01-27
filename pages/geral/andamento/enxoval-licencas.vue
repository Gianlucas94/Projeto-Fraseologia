<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="hostname-antigo" class="required">Hostname antigo</label>
          <input id="hostname-antigo" type="text" class="uk-input" required v-model="hostnameAntigo" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="nome" class="required">Nome do usuário do equipamento</label>
          <input id="nome" type="text" class="uk-input" required v-model="nome" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="funcional" class="required">Funcional</label>
          <input id="funcional" type="text" class="uk-input" required v-model="funcional" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="racf" class="required">RACF</label>
          <input id="racf" type="text" class="uk-input" required v-model="racf" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="telefone" class="required">Telefone</label>
          <input id="telefone" type="text" class="uk-input" required v-model="telefone" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="localidade" class="required">Localidade</label>
          <input id="localidade" type="text" class="uk-input" required v-model="localidade" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="hostname-novo" class="required">Hostname novo</label>
          <input id="hostname-novo" type="text" class="uk-input" required v-model="hostnameNovo" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="inventario-novo" class="required">Inventário novo</label>
          <input id="inventario-novo" type="text" class="uk-input" required v-model="inventarioNovo" @input="updateDetalhes" />
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
      resumo: 'Softwares licenciáveis instalados',
      status: 'Em andamento',
      detalhes: '',
      // ---
      hostnameAntigo: '',
      nome: '',
      funcional: '',
      racf: '',
      telefone: '',
      localidade: '',
      hostnameNovo: '',
      inventarioNovo: '',
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
      this.detalhes = `Hostname antigo: ${this.hostnameAntigo}
Nome do usuário do equipamento: ${this.nome}
Funcional o usuário: ${this.funcional}
RACF do usuário: ${this.racf}
Telefone do usuário: ${this.telefone}
Localidade do usuário: ${this.localidade}
Hostname novo: ${this.hostnameNovo}
Inventário novo: ${this.inventarioNovo}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
