<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div class="col">
        <label for="periodo" class="uk-form-label required">Período</label>
        <div class="radios">
          <label>
            <input
              type="radio"
              name="periodo"
              value="férias"
              v-model="periodo"
              @change="updateDetalhes"
            />
            Férias
          </label>
          <label>
            <input
              type="radio"
              name="periodo"
              value="licença"
              v-model="periodo"
              @change="updateDetalhes"
            />
            Licença
          </label>
        </div>
        <!-- .radio -->
      </div>
      <!-- col -->

      <div class="col">
        <div class="uk-margin uk-grid uk-grid-medium uk-child-width-expand@s">
          <div clas="col">
            <label for="data" class="uk-form-label required">Data</label>
            <date-pick
              v-model="data"
              @input="updateDetalhes"
              :displayFormat="'DD/MM/YYYY'"
              :prevMonthCaption="'Anterior'"
              :nextMonthCaption="'Próximo'"
              :setTimeCaption="'Hora:'"
              :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']"
              :months="[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembero',
                'Outubro',
                'Novembero',
                'Dezembro',
              ]"
            >
            </date-pick>
          </div>
          <!-- col -->

          <div class="col">
            <label for="hora" class="uk-form-label required">Hora</label>
            <input
              id="hora"
              type="time"
              class="uk-input"
              required
              v-model="hora"
              @change="updateDetalhes"
            />
          </div>
          <!-- col -->
        </div>
        <!-- .col -->
      </div>
      <!-- .grid2 -->
    </div>
    <!-- .grid1 -->

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
      resumo: 'Férias/Licença - Instalação de software',
      status: 'Agendamento',
      detalhes: '',
      // ---
      periodo: 'férias',
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
    this.detalhes = `Agendamento do chamado devido o usuário estar em período de ${this.periodo}, conforme evidência em anexo.

Retorno previsto para ${this.dataHtml} às ${this.hora}.`;
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);
      this.detalhes = `Agendamento do chamado devido o usuário estar em período de ${this.periodo}, conforme evidência em anexo.

Retorno previsto para ${this.dataHtml} às ${this.hora}.`;
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
