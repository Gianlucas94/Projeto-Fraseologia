<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="backup" class="uk-form-label required">Colaborador operacional com</label>
          <select id="backup" class="uk-select" v-model="backup" @change="updateDetalhes">
            <option>Backup almoxarifado</option>
            <option>Backup da área</option>
          </select>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="sr" class="uk-form-label required">Número da SR</label>
          <input id="sr" type="text" class="uk-input" required v-model="sr" @input="updateDetalhes" />
        </div>
      </div>
    </div>
    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="data" class="uk-form-label required">Previsão de atualização</label>
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
      resumo: 'Marketplace',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      backup: 'Backup almoxarifado',
      sr: '',
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
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      this.detalhes = `Colaboradora operacional com: ${this.backup}

Colaboradora solicitou compra de novo equipamento através do Portal SRTI, onde foi gerado o número da SR ${this.sr}.
Aguardando chegada do equipamento para realizar entrega do mesmo ao usuário e devolução do equipamento backup.

Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
