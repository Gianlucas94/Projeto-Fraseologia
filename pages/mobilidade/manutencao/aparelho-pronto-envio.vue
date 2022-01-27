<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="nome-colaborador" class="uk-form-label required">Nome do colaborador</label>
          <input id="nome-colaborador" type="text" class="uk-input required" required v-model="nomeColaborador" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="funcional" class="uk-form-label required">Funcional</label>
          <input id="funcional" type="text" class="uk-input required" required v-model="funcional" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="cdc" class="uk-form-label required">CDC</label>
          <input id="cdc" type="text" class="uk-input required" required v-model="cdc" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="area" class="uk-form-label required">Área</label>
          <input id="area" type="text" class="uk-input required" required v-model="area" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="linha" class="uk-form-label required">Linha</label>
          <input id="linha" type="text" class="uk-input required" required v-model="linha" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="empresa-linha" class="uk-form-label required">Empresa da linha</label>
          <input id="empresa-linha" type="text" class="uk-input required" required v-model="empresaLinha" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="marca" class="uk-form-label required">Marca</label>
          <input id="marca" type="text" class="uk-input required" required v-model="marca" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="modelo" class="uk-form-label required">Modelo</label>
          <input id="modelo" type="text" class="uk-input required" required v-model="modelo" @input="updateDetalhes" />
        </div>
      </div>
      <div>
        <div class="uk-margin">
          <label for="tel-contato" class="uk-form-label required">Telefone de contato</label>
          <input id="tel-contato" type="text" class="uk-input required" required v-model="telContato" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="email-contato" class="uk-form-label required">E-mail de contato</label>
          <input id="email-contato" type="text" class="uk-input required" required v-model="emailContato" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="endereco-envio" class="uk-form-label required">Endereco de envio</label>
          <input id="endereco-envio" type="text" class="uk-input required" required v-model="enderecoEnvio" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="nome-fornecedor" class="uk-form-label required">Nome do fornecedor</label>
          <input id="nome-fornecedor" type="text" class="uk-input required" required v-model="nomeFornecedor" @input="updateDetalhes" />
        </div>
        <div class="uk-margin">
          <label for="data" class="uk-form-label required">Nova atualização</label>
          <date-pick v-model="data" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
        </div>
        <div class="uk-margin">
          <label for="hora" class="uk-form-label required">Hora</label>
          <input id="hora" type="time" class="uk-input" required v-model="hora" @change="updateDetalhes" />
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
      resumo: 'Aparelho pronto para envio ao usuário',
      status: 'Em andamento',
      detalhes: '',
      // ---
      nomeColaborador: '',
      funcional: '',
      cdc: '',
      area: '',
      linha: '',
      empresaLinha: '',
      marca: '',
      modelo: '',
      telContato: '',
      emailContato: '',
      enderecoEnvio: '',
      nomeFornecedor: '',
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
    updateDetalhes() {
      this.dataHtml = Fraseologia.todayHtml(this.data);
      this.detalhes = `Foi preparado aparelho conforme informações abaixo:

Nome do colaborador: ${this.nomeColaborador}
Funcional: ${this.funcional}
CDC: ${this.cdc}
Área: ${this.area}
Linha e DDD: ${this.linha}
Empresa da linha: ${this.empresaLinha}
Marca / Modelo: ${this.marca} / ${this.modelo}
Telefone de contato: ${this.telContato}
E-mail de contato: ${this.emailContato}
Endereço de envio: ${this.enderecoEnvio}
Nome do recebedor: ${this.nomeFornecedor}

Será confeccionado malote para envio do aparelho ao usuário.

Previsão para nova atualização de log: ${this.dataHtml} às ${this.hora}`;

      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
