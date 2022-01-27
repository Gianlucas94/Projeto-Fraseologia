<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="nome" class="uk-form-label required">Nome</label>
          <input id="nome" class="uk-input" type="text" required v-model="nome" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="solicitacao" class="uk-form-label required">Solicitação</label>
          <input id="solicitacao" class="uk-input" type="text" required v-model="solicitacao" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="funcional" class="uk-form-label required">Funcional</label>
          <input id="funcional" class="uk-input" type="text" required v-model="funcional" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="centro-custo" class="uk-form-label">Centro de custo</label>
          <input id="centro-custo" class="uk-input" type="text" v-model="centroCusto" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="canais" class="uk-form-label">Canais</label>
          <input id="canais" class="uk-input" type="text" v-model="canais" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="id" class="uk-form-label required">ID</label>
          <input id="id" class="uk-input" type="text" required v-model="id" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="salas" class="uk-form-label required">Salas</label>
          <input id="salas" class="uk-input" type="text" required v-model="salas" @input="updateDetalhes" />
        </div>
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="data-inicio" class="uk-form-label required">Data início</label>
              <date-pick v-model="dataInicio" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
            </div>
          </div>
        </div>
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="hora-inicio" class="uk-form-label required">Hora Início</label>
              <input id="hora-inicio" type="time" class="uk-input" required v-model="horaInicio" @change="updateDetalhes" />
            </div>
          </div>
          <div>
            <div class="uk-margin">
              <label for="hora-termino" class="uk-form-label required">Hora Término</label>
              <input id="hora-termino" type="time" class="uk-input" required v-model="horaTermino" @change="updateDetalhes" />
            </div>
          </div>
        </div>
        <div class="uk-margin">
          <label for="informacoes-adicionais" class="uk-form-label">Informações adicionais:</label>
          <input id="informacoes-adicionais" class="uk-input" type="text" v-model="informacoesAdicionais" @input="updateDetalhes" />
        </div>
      </div>
    </div>

    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import DatePick from 'vue-date-pick';
import LogButtons from '~/components/log-buttons.vue';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    DatePick,
    LogButtons,
  },
  data() {
    return {
      resumo: 'VCTP',
      status: 'Agendado',
      detalhes: '',
      // ---
      nome: '',
      solicitacao: '',
      funcional: '',
      centroCusto: '',
      canais: '',
      id: '',
      salas: '',
      dataInicio: '',
      dataInicioHtml: '',
      horaInicio: '',
      horaTermino: '',
      informacoesAdicionais: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();

    this.dataInicio = Fraseologia.today();
    this.horaInicio = Fraseologia.now();
    this.horaTermino = Fraseologia.now();

    this.dataInicioHtml = Fraseologia.todayHtml(this.dataInicio);

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      this.dataInicioHtml = Fraseologia.todayHtml(this.dataInicio);

      this.detalhes = `Nome: ${this.nome}
Solicitação: ${this.solicitacao}
Funcional: ${this.funcional}
Data: ${this.dataInicioHtml}
Inicio: ${this.horaInicio}
Termino: ${this.horaTermino}
Centro de custo: ${this.centroCusto}
Canais: ${this.canais}
ID: ${this.id}
Salas: ${this.salas}
Informações adicionais: ${this.informacoesAdicionais}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>