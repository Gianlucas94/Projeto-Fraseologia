<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="tamanhoBackup" class="required">Tamanho do backup</label>
          <input id="tamanhoBackup" type="text" class="uk-input" required v-model="tamanhoBackup" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="aplicativos" class="required">Aplicativos instalados</label>
          <input id="aplicativos" type="text" class="uk-input" required v-model="aplicativos" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="tempo" class="required">Tempo estimado para término</label>
          <input id="tempo" type="time" class="uk-input" required v-model="tempo" @input="updateDetalhes" />
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
      resumo: 'Backup de arquvios em consequência da formatação',
      status: 'Em andamento',
      detalhes: '',
      // ---
      tamanhoBackup: '',
      aplicativos: '',
      tempo: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.hora = Fraseologia.now();

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      this.detalhes = `Formatação concluída.
Aplicativos instalados: ${this.aplicativos}
Tamanho do Backup: ${this.tamanhoBackup}
Tempo Estimado para término do backup: ${this.tempo}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
