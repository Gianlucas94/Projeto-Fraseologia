<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="acao" class="uk-form-label required">Ação</label>
          <input id="acao" class="uk-input" type="text" required v-model="acao" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="id" class="uk-form-label required">ID</label>
          <input id="id" class="uk-input" type="text" required v-model="id" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="funcional" class="uk-form-label required">Funcional</label>
          <input id="funcional" class="uk-input" type="text" required v-model="funcional" @input="updateDetalhes" />
        </div>
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="data-inicio" class="uk-form-label required">Data início</label>
              <date-pick v-model="dataInicio" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
            </div>
          </div>
          <div>
            <div class="uk-margin">
              <label for="hora-inicio" class="uk-form-label required">Hora Início</label>
              <input id="hora-inicio" type="time" class="uk-input" required v-model="horaInicio" @change="updateDetalhes" />
            </div>
          </div>
        </div>
        <div class="uk-margin">
          <label for="vip" class="required">VIP</label>
          <div class="radios">
            <label> <input type="radio" name="vip" value="Não" v-model="vip" @change="updateDetalhes" /> Não </label>
            <label> <input type="radio" name="vip" value="Sim" v-model="vip" @change="updateDetalhes" /> Sim </label>
          </div>
        </div>
      </div>
    </div>

    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import DatePick from 'vue-date-pick';
import LogButtons from '~/components/log-buttons.vue';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    DatePick,
    LogButtons,
  },
  data() {
    return {
      resumo: 'Ação',
      status: 'Em andamento',
      detalhes: '',
      // ---
      acao: '',
      id: '',
      funcional: '',
      dataInicio: '',
      dataInicioHtml: '',
      horaInicio: '',
      horaTermino: '',
      vip: 'Não',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();

    this.dataInicio = Fraseologia.today();
    this.horaInicio = Fraseologia.now();
    this.dataInicioHtml = Fraseologia.todayHtml(this.dataInicio);

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      this.dataInicioHtml = Fraseologia.todayHtml(this.dataInicio);

      this.detalhes = `Ação: ${this.acao}
ID: ${this.id}
Funcional: ${this.funcional}
Data e Hora Início: ${this.dataInicioHtml} - ${this.horaInicio}
Participantes VIP: ${this.vip}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>