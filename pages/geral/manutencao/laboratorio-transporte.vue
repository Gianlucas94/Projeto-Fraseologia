<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="transporte" class="uk-form-label required">Em transporte para</label>
          <select id="transporte" class="uk-select" v-model="transporte" @change="updateDetalhes">
            <option>Laboratório externo</option>
            <option>Bancada</option>
          </select>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="data" class="uk-form-label required">Previsão para chegada</label>
          <date-pick v-model="data" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="hora" class="uk-form-label required">Hora</label>
          <input id="hora" type="time" class="uk-input" required v-model="hora" @change="updateDetalhes" />
        </div>
      </div>
    </div>

    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import LogButtons from '~/components/log-buttons';
import DatePick from 'vue-date-pick';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    LogButtons,
    DatePick,
  },
  data() {
    return {
      resumo: 'Laboratório - Em transporte',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      transporte: 'Laboratório externo',
      data: '',
      dataHtml: '',
      hora: '',
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

    this.detalhes = `Equipamento encontra-se em transporte para: ${this.transporte}
Previsão para chegada do equipamento: ${this.dataHtml} às ${this.hora}`;

    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      this.detalhes = `Equipamento encontra-se em transporte para: ${this.transporte}
Previsão para chegada do equipamento: ${this.dataHtml} às ${this.hora}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
