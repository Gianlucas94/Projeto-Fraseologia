<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-margin">
      <label for="tentativas" class="uk-form-label"
        >Efetuar 3 tentativas de contato a cada 60 segundos</label
      >
      <input
        id="tentativas"
        class="uk-input"
        type="text"
        value="Percebemos que você está sem responder. Você ainda precisa de ajuda?"
        readonly
      />
    </div>

    <div class="uk-margin">
      <label for="encerramento" class="uk-form-label"
        >Encerramento após às 3 tentativas</label
      >
      <textarea id="encerramento" class="uk-textarea" readonly>
Esse bate-papo será finalizado devido à falta de interação, se você ainda precisar de ajuda, retorne ao bate-papo.</textarea
      >
    </div>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s">
      <div>
        <div class="uk-margin">
          <label for="categoria" class="uk-form-label">Categoria</label>
          <input
            id="categoria"
            class="uk-input"
            type="text"
            value="Orientação dentro do escopo"
            readonly
          />
        </div>
        <div class="uk-margin">
          <label for="sub-categoria" class="uk-form-label">Subcategoria</label>
          <input
            id="sub-categoria"
            class="uk-input"
            type="text"
            value="De acordo com o motivo do contato do colaborador"
            readonly
          />
        </div>
      </div>
      <!-- col -->

      <div>
        <div class="uk-margin">
          <label for="estado" class="uk-form-label">Estado</label>
          <input
            id="estado"
            class="uk-input"
            type="text"
            value="Encerrado Abandonado"
            readonly
          />
        </div>
        <div class="uk-margin">
          <label for="template-interacao" class="uk-form-label"
            >Template de interação</label
          >
          <input
            id="template-interacao"
            class="uk-input"
            type="text"
            value="Perda de contato durante atendimento"
            readonly
          />
        </div>
      </div>
      <!-- col -->
    </div>
    <!-- uk-grid -->

    <div class="uk-margin">
      <label for="descricao-resumida" class="uk-form-label"
        >Descrição resumida</label
      >
      <input
        id="descricao-resumida"
        class="uk-input"
        type="text"
        value="KB0010212 - Perda de Contato - Queda da Interação - Sinalização ao Colaborador"
        readonly
      />
    </div>

    <div class="uk-margin">
      <label for="anotacoes-trabalho" class="uk-form-label"
        >Anotações de trabalho</label
      >
      <input
        id="anotacoes-trabalho"
        class="uk-input"
        type="text"
        value="Devido à falta de contato, a interação foi encerrada."
        readonly
      />
    </div>
    <div class="uk-margin">
      <label for="colaborador" class="uk-form-label required"
        >Colaborador</label
      >
      <input
        id="descricao-resumida"
        class="uk-input"
        type="text"
        v-model="colaborador"
        placeholder="Nome do colaborador"
        @input="updateDetalhes"
        required
      />
    </div>
    <div class="uk-margin">
      <label for="acoes" class="uk-form-label"
        >Ações tomadas (visível ao cliente)</label
      >
      <textarea
        id="acoes"
        class="uk-textarea"
        rows="7"
        style="height: auto"
        v-model="acoes"
        readonly
      ></textarea>
    </div>
    <div uk-alert class="uk-alert">
      <p>
        Anexe o print da tela comprovando a falta de interação por parte do
        colaborador(a).
      </p>
    </div>
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  data() {
    return {
      resumo: 'Perda de Contato Durante o Atendimento',
      colaborador: '',
      acoes: `Caro(a) colaborador(a),

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Atenciosamente,
Service Desk White Martins`,
    };
  },
  mounted() {
    Fraseologia.selectFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();
  },
  methods: {
    updateDetalhes() {
      this.acoes = `Caro(a) ${this.colaborador},

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Atenciosamente,
Service Desk White Martins`;
    },
  },
};
</script>
