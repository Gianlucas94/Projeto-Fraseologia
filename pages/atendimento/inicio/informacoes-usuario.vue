<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="descricao" class="uk-form-label required"
            >Descrição do usuário</label
          >
          <textarea
            id="descricao"
            class="uk-textarea"
            required
            v-model="descricao"
            @input="updateDetalhes"
          ></textarea>
        </div>
        <div class="uk-margin">
          <label for="hostname" class="uk-form-label"
            >Hostname / Controle de TI</label
          >
          <input
            id="hostname"
            class="uk-input"
            type="text"
            v-model="hostname"
            @input="updateDetalhes"
          />
        </div>
        <div class="uk-margin">
          <label for="telefone" class="uk-form-label required"
            >Telefone de contato</label
          >
          <input
            id="telefone"
            class="uk-input"
            type="text"
            required
            v-model="telefone"
            @input="updateDetalhes"
          />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="localidade" class="uk-form-label required"
            >Localidade</label
          >
          <input
            id="localidade"
            class="uk-input"
            type="text"
            required
            v-model="localidade"
            @input="updateDetalhes"
          />
        </div>
        <div class="uk-margin uk-grid uk-grid-medium uk-child-width-expand@s">
          <div>
            <label for="horario-trabalho" class="uk-form-label required"
              >Horário de trabalho</label
            >
            <input
              id="horario-trabalho"
              class="uk-input"
              type="text"
              required
              v-model="horarioTrabalho"
              @input="updateDetalhes"
            />
          </div>
          <div>
            <label for="horario-almoco" class="uk-form-label required"
              >Horário de almoço</label
            >
            <input
              id="horario-almoco"
              class="uk-input"
              type="text"
              required
              v-model="horarioAlmoco"
              @input="updateDetalhes"
            />
          </div>
        </div>
        <div class="uk-margin">
          <label for="procedimento" class="uk-form-label required"
            >Procedimentos efetuados</label
          >
          <textarea
            id="procedimento"
            class="uk-textarea"
            required
            v-model="procedimento"
            @input="updateDetalhes"
          ></textarea>
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
      resumo: 'Informações do Usuário',
      status: 'Em andamento',
      detalhes: '',
      // ---
      descricao: '',
      hostname: '',
      telefone: '',
      localidade: '',
      horarioTrabalho: '',
      horarioAlmoco: '',
      procedimento: '',
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
      let software = this.software ? `Software: ${this.software}\n` : '';
      let acao = this.acao ? `Relatado pelo usuário: ${this.acao}\n` : '';
      this.detalhes = `Descrição do usuário: ${this.descricao}
Procedimentos efetuados: ${this.procedimento}
Hostname / Controle de TI: ${this.hostname}
Telefone de contato: ${this.telefone}
Localidade: ${this.localidade}
Horário de trabalho: ${this.horarioTrabalho}
Horário de almoço: ${this.horarioAlmoco}`;
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
