<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>
    <div class="uk-margin">
      <label for="primeira-tentativa" class="uk-form-label"
        >Tentativa deve ser feita após 60 segundos da apresentação</label
      >
      <input
        id="primeira-tentativa"
        class="uk-input"
        type="text"
        value="Percebemos que você está sem responder. Você ainda precisa de ajuda?"
        readonly
      />
    </div>
    <div class="uk-margin">
      <label for="encerramento" class="uk-form-label" readonly
        >Encerramento deve ser feito após 60 segundos da primeira
        tentativa</label
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
            value="Orientação fora do escopo"
            readonly
          />
        </div>
        <div class="uk-margin">
          <label for="sub-categoria" class="uk-form-label">Subcategoria</label>
          <input
            id="sub-categoria"
            class="uk-input"
            type="text"
            value="Colaborador Abandonou"
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
            value="Contato encerrado parte analista"
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
        value="KB0010212 - Perda de Contato -  Encerramento por parte do analista"
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
        rows="8"
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
      resumo: 'Colaborador não responde',
      colaborador: '',
      acoes: `Descrição:
Caro(a) colaborador(a),

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Atenciosamente,
Service Desk Itaú-Unibanco`,
    };
  },
  mounted() {
    Fraseologia.selectFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();
  },
  methods: {
    updateDetalhes() {
      this.acoes = `Descrição:
Caro(a) ${this.colaborador},

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Atenciosamente,
Service Desk Itaú-Unibanco`;
    },
  },
};
</script>
