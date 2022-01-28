<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <label for="detalhes" class="required">Detalhes</label>
        <textarea
          id="detalhes"
          class="uk-textarea"
          required
          v-model="detalhesSnow"
          @input="updateDetalhes"
        ></textarea>
      </div>
      <div>
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="data" class="uk-form-label required"
                >Próxima atualização</label
              >
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
          </div>
          <div>
            <div class="uk-margin">
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
      resumo: 'Indisponibilidade na ferramenta HPSM',
      status: 'Em espera',
      detalhes: '',
      // ---
      data: '',
      dataHtml: '',
      hora: '',
      detalhesSnow: '',
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
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      this.detalhes = `Identificado Indisponibilidade na ferramenta HPSM: ${this.detalhesSnow}
Essa indisponibilidade está impossibilitando a atualização de chamados e poderá ocorrer impacto no SLA.
Foram efetuados testes nos navegadores: Google Chrome e Internet Explorer, porém sem sucesso.´
Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
