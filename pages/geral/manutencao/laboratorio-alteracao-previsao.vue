<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="problema" class="uk-form-label required">Problema de importação</label>
          <textarea id="problema" class="uk-textarea" required v-model="problema" @input="updateDetalhes"></textarea>
        </div>
      </div>
      <div>
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="data" class="uk-form-label required">Nova atualização</label>
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
      resumo: 'Laboratório - Alteração de previsão',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      problema: '',
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

    this.dataHtml = Fraseologia.todayHtml(this.data);
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      this.detalhes = `Devido ao problema: ${this.problema}. Houve alteração na previsão de retorno.
Nova previsão de retorno: ${this.dataHtml} às ${this.hora}.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
