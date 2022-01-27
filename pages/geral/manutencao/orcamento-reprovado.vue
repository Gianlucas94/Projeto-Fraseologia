<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="sr" class="uk-form-label required">Número da SR de compra de máquina nova</label>
          <input id="sr" type="text" class="uk-input" required v-model="sr" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="consertado" class="uk-form-label required">O que foi consertado</label>
          <select id="consertado" class="uk-select" v-model="consertado" @change="updateDetalhes">
            <option>Equipamento</option>
            <option>Peça</option>
          </select>
        </div>
      </div>
    </div>
    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="data" class="uk-form-label required">Previsão de término</label>
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
      resumo: 'Orçamento Reprovado',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      consertado: 'Equipamento',
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

    let consertado = document.querySelector('#consertado');
    let consertadoTexto = '';
    if (consertado.selectedIndex === 0) {
      consertadoTexto = `Aguardar retorno do equipamento.`;
    } else if (consertado.selectedIndex === 1) {
      consertadoTexto = `Aguardar retorno da peça.`;
    }

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      let consertado = document.querySelector('#consertado');
      let consertadoTexto = '';
      if (consertado.selectedIndex === 0) {
        consertadoTexto = `Aguardar retorno do equipamento.`;
      } else if (consertado.selectedIndex === 1) {
        consertadoTexto = `Aguardar retorno da peça.`;
      }

      this.detalhes = `Orçamento REPROVADO conforme evidência em anexo (E-mail).
${consertadoTexto}
Qual o número da SR de compra de máquina nova: ${this.sr}.
Qual a previsão de término da atividade: ${this.dataHtml} às ${this.hora}.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
