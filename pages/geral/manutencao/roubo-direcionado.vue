<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="tipo" class="uk-form-label required">Tipo roubo / furto</label>
          <div class="radios">
            <label> <input type="radio" name="tipo-roubo" value="Interno" v-model="tipoRoubo" @change="updateDetalhes" /> Interno </label>
            <label> <input type="radio" name="tipo-roubo" value="Externo" v-model="tipoRoubo" @change="updateDetalhes" /> Externo </label>
          </div>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="termo" class="uk-form-label required">Termo de responsabilidade backup em anexo</label>
          <div class="radios">
            <label> <input type="radio" name="termo" value="Sim" v-model="termo" @change="updateDetalhes" /> Sim </label>
            <label> <input type="radio" name="termo" value="Não" v-model="termo" @change="updateDetalhes" /> Não </label>
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
      resumo: 'Roubo / Furto - Direcionado para manutenção',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      tipoRoubo: 'Interno',
      termo: 'Sim',
      termoTexto: 'Sim, O usuário está operacional com um equipamento Backup.',
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

    this.detalhes = `Trata-se de roubo/furto de equipamento corporativo.
Qual o tipo de roubo/furto: ${this.tipoRoubo}.

Checklist de Retirada de Equipamento Anexo? 
Não, por motivo de: trata-se de roubo/furto, portanto não há equipamento para retirar.

Termo de Responsabilidade do Equipamento de Backup Anexo?
${this.termoTexto}

O líder Itaú será acionado para alinhamento.
`;

    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes(e) {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      if (e.target.getAttribute('name') === 'tipo-roubo') {
        if (this.tipoRoubo === 'Interno') {
          this.tipoRoubo = 'Interno';
        } else {
          this.tipoRoubo = 'Externo';
        }
      }

      if (e.target.getAttribute('name') === 'termo') {
        if (this.termo === 'Sim') {
          this.termoTexto = 'Sim, O usuário está operacional com um equipamento Backup.';
        } else {
          this.termoTexto = 'Não, O usuário está operacional com equipamento da própria Área ao qual pertence.';
        }
      }

      this.detalhes = `Trata-se de roubo/furto de equipamento corporativo.
Qual tipo roubo/furto: ${this.tipoRoubo}.

Checklist de Retirada de Equipamento Anexo? 
Não, por motivo de: trata-se de roubo/furto, portanto não há equipamento para retirar.

Termo de Responsabilidade do Equipamento de Backup Anexo?
${this.termoTexto}

O líder Itaú será acionado para alinhamento.
`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
