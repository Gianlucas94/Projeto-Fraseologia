<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="tipo-roubo" class="uk-form-label required">Tipo roubo / furto</label>
          <div class="radios">
            <label> <input type="radio" name="tipo-roubo" value="Interno" v-model="tipoRoubo" @change="updateDetalhes" /> Interno </label>
            <label> <input type="radio" name="tipo-roubo" value="Externo" v-model="tipoRoubo" @change="updateDetalhes" /> Externo </label>
          </div>
        </div>

        <div class="uk-margin">
          <label for="alinhamento" class="uk-form-label required">Qual foi o alinhamento com líder White Martins</label>
          <textarea id="alinhamento" class="uk-textarea" required v-model="alinhamento" @input="updateDetalhes"></textarea>
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
      resumo: 'Roubo / Furto Interno',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      tipoRoubo: 'Interno',
      tipoTexto: 'Usuário relatou roubo/furto INTERNO e estamos aguardando a resposta do líder White Martins com o parecer da INSPETORIA, para continuidade do atendimento.',
      alinhamento: '',
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
  },
  methods: {
    updateDetalhes(e) {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      if (e.target.getAttribute('name') === 'tipo-roubo') {
        if (this.tipoRoubo === 'Interno') {
          this.resumo = 'Roubo / Furto Interno';
          this.$store.commit('updateResumo', 'Roubo / Furto Interno');
          this.tipoTexto = 'Usuário relatou roubo/furto INTERNO e estamos aguardando a resposta do líder White Martins com o parecer da INSPETORIA, para continuidade do atendimento.';
        } else {
          this.resumo = 'Roubo / Furto Externo';
          this.$store.commit('updateResumo', 'Roubo / Furto Externo');
          this.tipoTexto = 'Usuário relatou roubo/furto EXTERNO, conforme Boletim de Ocorrência (BO) anexo ao chamado.';
        }
      }

      this.detalhes = `${this.tipoTexto}

Alinhado esse caso com líder White Martins: Sim
Qual foi o alinhamento: ${this.alinhamento}

Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}.

*** A área de INSPETORIA não nos passou uma previsão de retorno, o líder White Martins será acionado para alinhamento. ***`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
