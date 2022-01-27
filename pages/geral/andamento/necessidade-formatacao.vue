<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="acoes" class="required">Ações</label>
          <input id="acoes" type="text" class="uk-input" required v-model="acoes" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="aplicativos" class="required">Aplicativos instalados</label>
          <input id="aplicativos" type="text" class="uk-input" required v-model="aplicativos" @input="updateDetalhe" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="tamanhoBackup" class="required">Tamanho do backup</label>
          <input id="tamanhoBackup" type="text" class="uk-input" required v-model="tamanhoBackup" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="servidor" class="required">Servidor</label>
          <input id="servidor" type="text" class="uk-input" required v-model="servidor" @input="updateDetalhes" />
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
      resumo: 'Identificado a necessidade de formatação',
      status: 'Em andamento',
      detalhes: '',
      // ---
      acoes: '',
      aplicativos: '',
      servidor: '',
      tamanhoBackup: '',
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
      this.detalhes = `Foram realizadas as ações ${this.acoes}, não resolveram o problema. Identificando necessidade de formatação do equipamento.
Necessário Backup de Arquivos, que será feito via servidor: ${this.servidor}
Tamanho do Backup: ${this.tamanhoBackup}
Aplicativos a serem instalados: ${this.aplicativos}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
