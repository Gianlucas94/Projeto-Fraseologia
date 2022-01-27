<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="problema" class="uk-form-label required">Problema</label>
          <textarea id="problema" class="uk-textarea" required v-model="problema" @input="updateDetalhes"></textarea>
        </div>
        <div class="uk-margin">
          <label for="marca-modelo" class="uk-form-label required">Marca / Modelo</label>
          <input id="marca-modelo" type="text" class="uk-input" required v-model="marcaModelo" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="numserie" class="uk-form-label required">Nº de série</label>
          <input id="numserie" type="text" class="uk-input" required v-model="numserie" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="formulario" class="uk-form-label required">Formulário de retirada de equipamento para manutenção e disponibilização de equipamento backup está anexo?</label>
          <div class="radios">
            <label> <input type="radio" name="formulario" value="Sim" v-model="formulario" @change="updateDetalhes" /> Sim </label>
            <label> <input type="radio" name="formulario" value="Não" v-model="formulario" @change="updateDetalhes" /> Não </label>
          </div>
        </div>
        <div class="uk-margin formulario-form dn">
          <label for="formulario-informado" class="uk-form-label required">Motivo</label>
          <textarea id="formulario-informado" class="uk-textarea" v-model="formularioInformado" @input="updateDetalhes"></textarea>
        </div>
        <div class="uk-margin">
          <label for="informado" class="uk-form-label required">Foi disponibilizado backup?</label>
          <div class="radios">
            <label> <input type="radio" name="backup" value="Sim" v-model="backup" @change="updateDetalhes" /> Sim </label>
            <label> <input type="radio" name="backup" value="Não" v-model="backup" @change="updateDetalhes" /> Não </label>
          </div>
        </div>
        <div class="uk-margin backup-form dn">
          <label for="backup-informado" class="uk-form-label required">Motivo</label>
          <textarea id="backup-informado" class="uk-textarea" v-model="backupInformado" @input="updateDetalhes"></textarea>
        </div>
        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <div class="uk-margin">
              <label for="data" class="uk-form-label required">Nova atualização</label>
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
      resumo: 'Direcionamento manutenção',
      status: 'PENDENTE',
      detalhes: '',
      // ---
      problema: '',
      marcaModelo: '',
      numserie: '',
      formulario: 'Sim',
      formularioInformado: '',
      backup: 'Sim',
      backupInformado: '',
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
  },
  methods: {
    updateDetalhes(e) {
      this.dataHtml = Fraseologia.todayHtml(this.data);

      if (e.target.getAttribute('name') === 'formulario') {
        if (this.formulario === 'Não') {
          document.querySelector('.formulario-form').classList.toggle('dn');
          document.querySelector('#formulario-informado').setAttribute('required', 'required');
          document.querySelector('#formulario-informado').focus();
        } else {
          document.querySelector('.formulario-form').classList.toggle('dn');
          document.querySelector('#formulario-informado').removeAttribute('required');
          this.formularioInformado = '';
        }
      } else if (e.target.getAttribute('name') === 'backup') {
        if (this.backup === 'Não') {
          document.querySelector('.backup-form').classList.toggle('dn');
          document.querySelector('#backup-informado').setAttribute('required', 'required');
          document.querySelector('#backup-informado').focus();
        } else {
          document.querySelector('.backup-form').classList.toggle('dn');
          document.querySelector('#backup-informado').removeAttribute('required');
          this.backupInformado = '';
        }
      }

      let formularioInformado = '';
      if (this.formularioInformado) {
        formularioInformado = `\nMotivo: ${this.formularioInformado}`;
      }

      let backupInformado = '';
      if (this.backupInformado) {
        backupInformado = `\nMotivo: ${this.backupInformado}`;
      }

      this.detalhes = `Após realização do procedimento de análise do equipamento, foi diagnosticado problema: ${this.problema}

Detalhes do Equipamento:
Marca e Modelo: ${this.marcaModelo}
Número de Série: ${this.numserie}

Formulário de retirada de equipamento para manutenção e disponibilização de equipamento backup está anexo: ${this.formulario}${formularioInformado}
Foi disponibilizado equipamento de backup: ${this.backup}${backupInformado}
Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>