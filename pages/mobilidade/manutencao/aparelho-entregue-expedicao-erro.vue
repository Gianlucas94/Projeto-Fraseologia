<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="funcional" class="uk-form-label required">Funcional</label>
          <input id="funcional" type="text" class="uk-input required" required v-model="funcional" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="modelo" class="uk-form-label required">Modelo</label>
          <input id="modelo" type="text" class="uk-input required" required v-model="modelo" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="imei" class="uk-form-label required">IMEI</label>
          <input id="imei" type="text" class="uk-input required" required v-model="imei" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="data-entrega" class="uk-form-label required">Entregue na expedição</label>
          <date-pick v-model="dataEntrega" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="endereco" class="uk-form-label required">Endereço de entrega</label>
          <input id="endereco" type="text" class="uk-input required" required v-model="endereco" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="codigo-rastreio" class="uk-form-label required">Código de rastreio</label>
          <input id="codigo-rastreio" type="text" class="uk-input required" required v-model="codigoRastreio" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="prazo-entrega" class="uk-form-label required">Prazo para entrega do aparelho</label>
          <date-pick v-model="prazoEntrega" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
        </div>
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
      resumo: 'Aparelho entregue na expedição',
      status: 'Pendente',
      detalhes: '',
      // ---
      funcional: '',
      modelo: '',
      imei: '',
      dataEntrega: '',
      dataEntregaHtml: '',
      endereco: '',
      codigoRastreio: '',
      nomeFornecedor: '',
      prazoEntrega: '',
      prazoEntregaHtml: '',
      hora: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.dataEntrega = Fraseologia.today();
    this.prazoEntrega = Fraseologia.today();
    this.dataEntregaHtml = Fraseologia.todayHtml(this.dataEntrega);
    this.prazoEntregaHtml = Fraseologia.todayHtml(this.prazoEntrega);
    this.hora = Fraseologia.now();

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      this.dataEntregaHtml = Fraseologia.todayHtml(this.dataEntrega);
      this.prazoEntregaHtml = Fraseologia.todayHtml(this.prazoEntrega);

      this.detalhes = `Aparelho entregue na expedição dia: ${this.dataEntregaHtml}
Endereço de entrega: ${this.endereco}
Código de rastreio: ${this.codigoRastreio}
Prazo previsto para entrega do aparelho na localidade do usuário: ${this.prazoEntregaHtml} às ${this.hora}
Modelo: ${this.modelo}
IMEI: ${this.imei}
Funcional: ${this.funcional}

Assinar o termo e confirmação de recebimento do aparelho assim que chegar o novo, ambos foram enviados por email via sistema.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
