<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="polos" class="uk-form-label required">Polos</label>
          <input id="polos" class="uk-input" type="text" required v-model="polos" @input="updateDetalhes" />
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
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="data-termino" class="uk-form-label required">Data término</label>
              <date-pick v-model="dataTermino" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
            </div>
          </div>
          <div>
            <div class="uk-margin">
              <label for="hora-termino" class="uk-form-label required">Hora Término</label>
              <input id="hora-termino" type="time" class="uk-input" required v-model="horaTermino" @change="updateDetalhes" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="usuario" class="uk-form-label required">Usuário</label>
          <input id="usuario" type="text" class="uk-input" required v-model="usuario" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="id" class="uk-form-label required">ID</label>
          <input id="id" class="uk-input" type="text" required v-model="id" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="sala" class="uk-form-label required">Sala</label>
          <input id="sala" class="uk-input" type="text" required v-model="sala" @input="updateDetalhes" />
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
      resumo: 'Abertura de Chamado',
      status: 'Em andamento',
      detalhes: '',
      // ---
      polos: '',
      dataInicio: '',
      dataInicioHtml: '',
      dataTermino: '',
      dataTerminoHtml: '',
      horaInicio: '',
      horaTermino: '',
      usuario: '',
      id: '',
      sala: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();

    this.dataInicio = Fraseologia.today();
    this.dataTermino = Fraseologia.today();
    this.horaInicio = Fraseologia.now();
    this.horaTermino = Fraseologia.now();

    this.dataInicioHtml = Fraseologia.todayHtml(this.dataInicio);
    this.dataTerminoHtml = Fraseologia.todayHtml(this.dataTermino);

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      this.dataInicioHtml = Fraseologia.todayHtml(this.dataInicio);
      this.dataTerminoHtml = Fraseologia.todayHtml(this.dataTermino);

      this.detalhes = `Agendamento solicitado pelo usuário ${this.usuario}, atendimento para o dia ${this.dataInicioHtml}
Das: ${this.dataInicioHtml} as ${this.dataTerminoHtml}
ID: ${this.id}
Polos: ${this.polos}
Sala: ${this.sala}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>