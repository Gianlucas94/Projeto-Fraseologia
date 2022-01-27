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
          <label for="tempo-acompanhamento" class="uk-form-label required">Tempo de acompanhamento</label>
          <input id="tempo-acompanhamento" type="time" class="uk-input" required v-model="tempoAcompanhamento" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="participantes" class="uk-form-label required">Participantes</label>
          <input id="participantes" class="uk-input" type="number" required v-model="participantes" @input="updateDetalhes" />
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
      resumo: 'Fechamento de Chamado',
      status: 'Resolvido tecnicamente',
      detalhes: '',
      // ---
      polos: '',
      dataInicio: '',
      dataInicioHtml: '',
      dataTermino: '',
      dataTerminoHtml: '',
      horaInicio: '',
      horaTermino: '',
      tempoAcompanhamento: '00:30',
      participantes: '',
      vip: 'Não',
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

      this.detalhes = `ACOMPANHAMENTO TÉCNICO de Video Conferência e Telepresença
Polos: ${this.polos}
Data e Hora Inicio: ${this.dataInicioHtml} - ${this.horaInicio}
Data e Hora Término: ${this.dataTerminoHtml} - ${this.horaTermino}
Tempo do acompanhamento: ${this.tempoAcompanhamento}
Quantidade de Participantes: ${this.participantes}
Participantes VIP: ${this.vip}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>