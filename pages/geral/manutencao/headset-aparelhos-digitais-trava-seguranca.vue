<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <label for="tipo" class="uk-form-label required">Tipo de produto</label>
        <select id="tipo" class="uk-select" v-model="tipo" @change="updateDetalhes">
          <option>Headset</option>
          <option>Aparelhos digitais</option>
          <option>Trava de segurança</option>
        </select>
      </div>
      <div>
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="data" class="uk-form-label required">Previsão atualização</label>
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
      resumo: 'Headset / Aparelhos Digitais / Trava de Segurança',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      tipo: 'Headset',
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

    this.$store.commit('updateResumo', 'Headset');
    this.$store.commit('updateStatus', this.status);

    this.detalhes = `Enviado headset para área responsável pelo reparo ou troca.
Aguardando retorno da área responsável referente ao reparo ou troca do headse.
Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}.`;

    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes(e) {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      if (e.target.value === 'Headset') {
        this.$store.commit('updateResumo', 'Headset');
        this.detalhes = `Enviado headset para área responsável pelo reparo ou troca.
Aguardando retorno da área responsável referente ao reparo ou troca do headset.
Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}.`;
      } else if (e.target.value === 'Aparelhos digitais') {
        this.$store.commit('updateResumo', 'Aparelhos Digitais');
        this.detalhes = `Enviado aparelhos digitais para área responsável pelo reparo ou troca.
Aguardando retorno da área responsável referente ao reparo ou troca do aparelho.
Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}.`;
      } else if (e.target.value === 'Trava de segurança') {
        this.$store.commit('updateResumo', 'Trava de Segurança');
        this.detalhes = `Enviado e-mail de solicitação de nova trava de segurança de notebook para área responsável (Computer as Service).
Aguardando retorno da área responsável para entregar a nova trava de segurança ao usuário.
Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}.`;
      }

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
