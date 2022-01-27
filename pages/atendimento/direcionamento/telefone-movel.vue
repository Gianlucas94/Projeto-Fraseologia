<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="area" class="uk-form-label">Área</label>
          <input id="area" type="text" class="uk-input" v-model="area" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="centro-custo" class="uk-form-label">Centro de custo</label>
          <input id="centro-custo" type="text" class="uk-input" v-model="centroCusto" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="linha" class="uk-form-label required">Número da linha</label>
          <input id="linha" type="text" class="uk-input" required v-model="linha" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="imei" class="uk-form-label required">IMEI</label>
          <input id="imei" type="text" class="uk-input" required v-model="imei" @change="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="telefone" class="uk-form-label required">Telefone para contato</label>
          <input id="telefone" type="text" class="uk-input" required v-model="telefone" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="chip" class="uk-form-label">Número do chip</label>
          <input id="chip" type="text" class="uk-input" v-model="chip" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="modelo" class="uk-form-label required">Modelo do aparelho</label>
          <input id="modelo" type="text" class="uk-input" v-model="modelo" @change="updateDetalhes" />
        </div>
        <div class=uk-margin>
          <div class="uk-margin uk-grid uk-grid-medium uk-child-width-expand@s">
            <div>
              <label for="horario-trabalho" class="uk-form-label required">Horário de trabalho</label>
              <input id="horario-trabalho" class="uk-input" type="text" required v-model="horarioTrabalho" @input="updateDetalhes" />
            </div>
            <div>
              <label for="horario-almoco" class="uk-form-label required">Horário de almoço</label>
              <input id="horario-almoco" class="uk-input" type="text" required v-model="horarioAlmoco" @input="updateDetalhes" />
            </div>
          </div>
        </div>
        <div class="uk-margin">
          <label for="descricao" class="uk-form-label required">Descrição da solicitação</label>
          <textarea id="descricao" class="uk-textarea" required v-model="descricao" @input="updateDetalhes"></textarea>
        </div>
      </div>
    </div>
    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import LogButtons from '~/components/log-buttons';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    LogButtons,
  },
  data() {
    return {
      resumo: 'Telefone Móvel',
      status: 'Em andamento',
      detalhes: '',
      // ---
      area: '',
      centroCusto: '',
      linha: '',
      imei: '',
      telefone: '',
      chip: '',
      modelo: '',
      descricao: '',
      horarioTrabalho: '',
      horarioAlmoco: '',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
  },
  methods: {
    updateDetalhes() {
      this.detalhes = `Descrição da solicitação: ${this.descricao}
Área: ${this.area}
Centro de custo: ${this.centroCusto}
Número da linha: ${this.linha}
IMEI: ${this.imei}
Telefone para contato: ${this.telefone}
Número do CHIP: ${this.chip}
Modelo do aparelho: ${this.modelo}
Horário de trabalho: ${this.horarioTrabalho}
Horário de almoço: ${this.horarioAlmoco}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
