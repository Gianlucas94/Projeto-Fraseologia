<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
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

      <div>
        <div class="uk-margin">
          <label for="atendimento" class="uk-form-label required"
            >Atendimento</label
          >
          <select
            id="atendimento"
            class="uk-select"
            required
            v-model="atendimento"
            @change="updateDetalhes"
          >
            <option>Iniciado</option>
            <option>Reiniciado</option>
          </select>
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
      resumo: 'Início do Atendimento após o Agendamento',
      status: 'Aguardando agendamento',
      detalhes: '',
      // ---
      chamado: 'Incidente',
      atendimento: 'Iniciado',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);

    this.detalhes = `${this.chamado} em atendimento.
Atendimento sendo ${this.atendimento} conforme pedido de agendamento do usuário.`;

    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      this.detalhes = `${this.chamado} em atendimento.
Atendimento sendo ${this.atendimento} conforme pedido de agendamento do usuário.`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
