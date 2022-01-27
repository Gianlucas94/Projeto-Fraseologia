<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-child-width-expand@s uk-margin">
      <div>
        <label for="chamado" class="uk-form-label required"
          >Tipo de chamado</label
        >
        <div class="radios">
          <label>
            <input
              type="radio"
              name="chamado"
              value="Incidente"
              v-model="chamado"
              @change="updateDetalhes"
            />
            Incidente
          </label>
          <label>
            <input
              type="radio"
              name="chamado"
              value="Tarefa"
              v-model="chamado"
              @change="updateDetalhes"
            />
            Tarefa
          </label>
        </div>
      </div>
    </div>

    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
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
  },
  data() {
    return {
      resumo: 'Início de Atendimento',
      status: 'Em andamento',
      detalhes: '',
      // ---
      chamado: 'Incidente',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.detalhes = `${this.chamado} em atendimento. Iniciando atendimento junto ao usuário neste momento.`;
    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.detalhes = `${this.chamado} em atendimento. Iniciando atendimento junto ao usuário neste momento.`;
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
