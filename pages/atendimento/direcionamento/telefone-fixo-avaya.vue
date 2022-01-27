<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="hostname" class="uk-form-label required">Hostname / Controle TI</label>
          <input id="hostname" type="text" class="uk-input" required v-model="hostname" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="ramal" class="uk-form-label required">Ramal</label>
          <input id="ramal" type="text" class="uk-input" required v-model="ramal" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="telefone" class="uk-form-label required">Telefone</label>
          <input id="telefone" type="text" class="uk-input" required v-model="telefone" @change="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="localidade" class="uk-form-label required">Localidade</label>
          <input id="localidade" type="text" class="uk-input" required v-model="localidade" @change="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
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
        <div class="uk-margin">
          <label for="procedimento" class="uk-form-label required">Procedimentos efetuados</label>
          <textarea id="procedimento" class="uk-textarea" required v-model="procedimento" @input="updateDetalhes"></textarea>
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
      resumo: 'Telefone Fixo e Avaya',
      status: 'Em andamento',
      detalhes: '',
      // ---
      descricao: '',
      procedimento: '',
      software: '',
      hostname: '',
      ramal: '',
      telefone: '',
      localidade: '',
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
      this.detalhes = `Descrição do usuário: ${this.descricao}
Procedimentos efetuados: ${this.procedimento}
Ramal: ${this.ramal}
Hostname/Controle de TI: ${this.hostname}
Telefone de contato: ${this.telefone}
Localidade: ${this.localidade}
Horário de trabalho: ${this.horarioTrabalho}
Horário de almoço: ${this.horarioAlmoco}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
