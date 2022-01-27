<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="acoes" class="uk-form-label required">Ações realizadas</label>
          <textarea id="acoes" class="uk-textarea" required v-model="acoes" @input="updateDetalhes"></textarea>
        </div>
        <div class="uk-margin">
          <label for="motivo" class="uk-form-label required">Motivo da pendência</label>
          <textarea id="motivo" class="uk-textarea" required v-model="motivo" @input="updateDetalhes"></textarea>
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="responsavel" class="uk-form-label required">Responsável por continuidade</label>
          <input id="responsavel" type="text" class="uk-input" required v-model="responsavel" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="informado" class="uk-form-label required">Informado sobre pendência</label>
          <div class="radios">
            <label> <input type="radio" name="informado" value="Sim" v-model="informado" @change="updateDetalhes" /> Sim </label>
            <label> <input type="radio" name="informado" value="Não" v-model="informado" @change="updateDetalhes" /> Não </label>
          </div>
          <div class="uk-margin informado-motivo-form dn">
            <label for="informado-motivo" class="uk-form-label required">Motivo</label>
            <textarea id="informado-motivo" class="uk-textarea" v-model="informadoMotivo" @input="updateDetalhes"></textarea>
          </div>
        </div>
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="data" class="uk-form-label required">Término</label>
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
      resumo: 'Pendente Início',
      status: 'Em espera - Aguardando Fornecedor',
      detalhes: '',
      // ---
      acoes: '',
      motivo: '',
      responsavel: '',
      informado: 'Sim',
      informadoMotivo: '',
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
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes(e) {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      if (e.target.getAttribute('name') === 'informado') {
        if (this.informado === 'Não') {
          document.querySelector('.informado-motivo-form').classList.toggle('dn');
          document.querySelector('#informado-motivo').setAttribute('required', 'required');
        } else {
          document.querySelector('.informado-motivo-form').classList.toggle('dn');
          document.querySelector('#informado-motivo').removeAttribute('required');
          this.informadoMotivo = '';
        }
      }

      let informadoMotivo = '';
      if (this.informadoMotivo) {
        informadoMotivo = `\nMotivo: ${this.informadoMotivo}`;
      }

      this.detalhes = `Foram realizadas as ações: ${this.acoes}
Chamado pendente por motivo de: ${this.motivo}
Responsável que informará ação para continuidade do atendimento: ${this.responsavel}
Usuário informado sobre a pendência: ${this.informado}${informadoMotivo}
Previsão de término da pendência e novo contato com usuário: ${this.dataHtml} às ${this.hora}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>