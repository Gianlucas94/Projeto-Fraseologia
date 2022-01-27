<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="chamado" class="uk-form-label required">Chamado</label>
          <input id="chamado" type="text" class="uk-input" required v-model="chamado" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="hora" class="uk-form-label required">Hora</label>
          <input id="hora" type="time" class="uk-input" required v-model="hora" @change="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="fabricante" class="uk-form-label required">Ação do fabricante</label>
          <select id="fabricante" class="uk-select" @change="updateDetalhes">
            <option>Enviado equipamento para conserto</option>
            <option>Aguardando fabricante realizar o conserto no site do cliente</option>
          </select>
        </div>
        <div class="uk-margin">
          <label for="data" class="uk-form-label required">Previsão término atividade</label>
          <date-pick v-model="data" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
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
      resumo: 'Breakfix - Início',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      chamado: '',
      fabricante: 'Enviado equipamento para conserto',
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
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      this.detalhes = `Equipamento em garantia, foi aberto chamado de número ${this.chamado} para acionamento do fabricante.
Ação do fabricante: ${this.fabricante}.
Qual a previsão de término da atividade: ${this.dataHtml} às ${this.hora}.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
