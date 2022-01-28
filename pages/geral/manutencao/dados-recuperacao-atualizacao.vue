<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="processo" class="uk-form-label required">HD encontra-se no processo</label>
          <select id="processo" class="uk-select" v-model="processo" @change="updateDetalhes">
            <option>Em transporte</option>
            <option>Em processo de recuperação</option>
            <option>HD não foi enviado para recuperação</option>
          </select>
        </div>
        <div class="uk-margin processo-form dn">
          <label for="processo-motivo" class="uk-form-label required">Motivo</label>
          <textarea id="processo-motivo" class="uk-textarea" v-model="processoMotivo" @input="updateDetalhes"></textarea>
        </div>
      </div>
      <div>
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="data" class="uk-form-label required">Previsão atividade</label>
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
      resumo: 'Recuperação de dados - Atualização',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      processo: 'Em transporte',
      processoMotivo: '',
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
    this.detalhes = `
HD encontra-se no processo abaixo:
Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}.

*** Líder White Martins não nos informou prazo, o mesmo está ciente deste caso. ***`;
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      let processoMotivo = '';
      let processo = document.querySelector('#processo');
      let processoForm = document.querySelector('.processo-form');
      let processoTextArea = document.querySelector('#processo-motivo');

      if (processo.selectedIndex === 2) {
        processoForm.classList.remove('dn');
        processoTextArea.setAttribute('required', 'required');
      } else {
        processoForm.classList.add('dn');
        processoTextArea.removeAttribute('required', 'required');
      }

      if (this.processoMotivo !== '') {
        processoMotivo = `\nMotivo do não envio: ${this.processoMotivo}`;
      }

      this.detalhes = `HD encontra-se no processo: Em transporte para fornecedor tentar recuperar os dados.
Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}. ${processoMotivo}

*** Líder White Martins não nos informou prazo, o mesmo está ciente deste caso. *** `;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
