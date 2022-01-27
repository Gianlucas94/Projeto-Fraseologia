<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="descricao" class="uk-form-label required">Descrição</label>
          <input id="descricao" type="text" class="uk-input" required v-model="descricao" @change="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <div class="uk-margin uk-grid uk-grid-medium uk-child-width-expand@s">
            <div>
              <label for="data" class="uk-form-label required">Data</label>
              <date-pick v-model="data" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
            </div>
            <div>
              <label for="hora" class="uk-form-label required">Término previsto</label>
              <input id="hora" type="time" class="uk-input" required v-model="hora" @change="updateDetalhes" />
            </div>
          </div>
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
      resumo: 'Em andamento',
      status: 'Em andamento',
      detalhes: '',
      // ---
      descricao: '',
      data: '',
      dataHtml: '',
      hora: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.data = Fraseologia.today();
    this.dataHtml = Fraseologia.todayHtml(this.data);
    this.hora = Fraseologia.now();

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
    this.detalhes = `Descrição: ${this.descricao}
Término previsto: ${this.dataHtml} à5555s ${this.hora}`;
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);
      this.detalhes = `Descrição: ${this.descricao}
Término previsto: ${this.dataHtml} às ${this.hora}`;
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
