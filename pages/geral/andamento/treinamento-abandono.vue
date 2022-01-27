<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-margin">
      <label for="site" class="required">Site</label>
      <input id="site" class="uk-input" required v-model="site" @input="updateDetalhes" />
    </div>
    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="data-inicial" class="uk-form-label required">Data inicial da evacuação</label>
          <date-pick v-model="dataInicial" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
        </div>
        <div class="uk-margin">
          <label for="hora-inicial" class="uk-form-label required">Hora inicial da evacuação</label>
          <input id="hora-inicial" type="time" class="uk-input" required v-model="horaInicial" @change="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="data-termino" class="uk-form-label required">Data de término da evacuação</label>
          <date-pick v-model="dataTermino" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
        </div>
        <div class="uk-margin">
          <label for="hora-termino" class="uk-form-label required">Hora de término da evacuação</label>
          <input id="hora-termino" type="time" class="uk-input" required v-model="horaTermino" @change="updateDetalhes" />
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
      resumo: 'TREINAMENTO PALT (Plano de abandono de local de trabalho)',
      status: 'Em andamento',
      detalhes: '',
      // ---
      site: '',
      dataInicial: '',
      horaInicial: '',
      dataInicialHtml: '',
      dataTermino: '',
      dataTerminoHtml: '',
      horaTermino: '',
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
  },
  methods: {
    updateDetalhes() {
      this.dataInicialHtml = Fraseologia.todayHtml(this.dataInicial);
      this.dataTerminoHtml = Fraseologia.todayHtml(this.dataTermino);

      this.detalhes = `Ocorreu evacuação do prédio para treinamento do PALT (Plano de abandono de local de trabalho).
Site: ${this.site} evacuação iniciou na data ${this.dataInicialHtml} horário ${this.horaInicial}, e terminou na ${this.dataTerminoHtml} horário ${this.horaTermino}.
Diante do exposto, não foi possível encontrar o usuário no local para efetuarmos atendimento.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
