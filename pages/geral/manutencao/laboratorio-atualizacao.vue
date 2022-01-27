<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="atividade" class="uk-form-label required">Atividade executada</label>
          <select id="atividade" class="uk-select" v-model="atividade" @change="updateDetalhes">
            <option>Em diagnóstico</option>
            <option>Em reparo</option>
            <option>Troca da Peça</option>
          </select>
        </div>
        <div class="uk-margin reparo-form dn">
          <label for="reparo" class="uk-form-label">Motivo do reparo</label>
          <textarea id="reparo" class="uk-textarea" v-model="reparo" @input="updateDetalhes"></textarea>
        </div>
        <div class="uk-margin peca-form dn">
          <label for="peca" class="uk-form-label">Qual peça</label>
          <textarea id="peca" class="uk-textarea" v-model="peca" @input="updateDetalhes"></textarea>
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
      resumo: 'Laboratório - Atualização',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      atividade: 'Em diagnóstico',
      reparo: '',
      peca: '',
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

    this.detalhes = `Equipamento encontra-se em laboratório externo.
Atividade que está sendo executada no laboratório: ${this.atividade}.
Previsão para término da atividade: ${this.dataHtml} às ${this.hora}.`;

    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      let atividade = document.querySelector('#atividade');
      let reparoForm = document.querySelector('.reparo-form');
      let pecaForm = document.querySelector('.peca-form');
      let reparo = document.querySelector('#reparo');
      let peca = document.querySelector('#peca');
      let reparoTexto = '';
      let pecaTexto = '';

      if (atividade.selectedIndex === 0) {
        reparoForm.classList.add('dn');
        pecaForm.classList.add('dn');
        reparo.removeAttribute('required');
        peca.removeAttribute('required');
        this.reparo = '';
        this.peca = '';
        reparoTexto = '';
        pecaTexto = '';
      } else if (atividade.selectedIndex === 1) {
        reparoForm.classList.remove('dn');
        pecaForm.classList.add('dn');
        reparo.setAttribute('required', 'required');
        reparo.focus();
        peca.removeAttribute('required');
        pecaTexto = '';
        this.peca = '';
      } else if (atividade.selectedIndex === 2) {
        pecaForm.classList.remove('dn');
        reparoForm.classList.add('dn');
        peca.setAttribute('required', 'required');
        peca.focus();
        reparo.removeAttribute('required');
        reparoTexto = '';
        this.reparo = '';
      }

      if (this.reparo !== '') {
        reparoTexto = `\nReparo: ${this.reparo}`;
      }

      if (this.peca !== '') {
        pecaTexto = `\nPeça: ${this.peca}`;
      }

      this.detalhes = `Equipamento encontra-se em laboratório externo.
Atividade que está sendo executada no laboratório: ${this.atividade} ${reparoTexto} ${pecaTexto}
Previsão para término da atividade: ${this.dataHtml} às ${this.hora}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
