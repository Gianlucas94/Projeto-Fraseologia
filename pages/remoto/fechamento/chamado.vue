<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="software" class="uk-form-label">Software</label>
          <v-select id="software" class="v-select" v-model="software" :options="options" :selectOnTab="true" @input="updateDetalhes">
            <div slot="no-options">Software não encontrado.</div>
          </v-select>
        </div>
        <div class="uk-margin so dn">
          <label for="sistema-operacional" class="uk-form-label required">Sistema operacional</label>
          <select id="sistema-operacional" class="uk-select" v-model="sistemaOperacional" @change="updateDetalhes">
            <option>Windows</option>
            <option>Mac</option>
            <option>Linux</option>
          </select>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="solucao" class="uk-form-label required">Solução</label>
          <textarea id="solucao" class="uk-textarea" required v-model="solucao" @input="updateDetalhes"></textarea>
        </div>
      </div>
    </div>

    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import { softwares } from '~/pages//data/softwares';
import vSelect from 'vue-select';
import LogButtons from '~/components/log-buttons.vue';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    LogButtons,
    vSelect,
  },
  data() {
    return {
      resumo: 'Fechamento de Chamado',
      status: 'Resolvido',
      detalhes: '',
      // ---
      software: '',
      sistemaOperacional: 'Windows',
      soTemp: '',
      solucao: '',
      options: softwares,
    };
  },
  mounted() {
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();
    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      this.soTemp = this.sistemaOperacional;
      let soElement = document.querySelector('.so');

      if (this.software !== '' && this.software !== null) {
        if (soElement.classList.contains('dn')) {
          soElement.classList.remove('dn');
        }
        this.soTemp = `Sistema operacional: ${this.sistemaOperacional}\n`;
      } else {
        soElement.classList.add('dn');
        this.soTemp = '';
      }

      let software = this.software ? `Software: ${this.software}\n` : '';

      this.detalhes = `${software}${this.soTemp}Solução: ${this.solucao}`;
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
