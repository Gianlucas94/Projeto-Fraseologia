<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-margin">
      <label for="encerramento" class="uk-form-label">Encerramento</label>
      <textarea id="encerramento" class="uk-textarea" readonly>
Esse bate-papo será finalizado devido à falta de interação, se você ainda precisar de ajuda, retorne ao bate-papo.</textarea
      >
    </div>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s">
      <div>
        <div class="uk-margin">
          <label for="categoria-a" class="uk-form-label">Categoria</label>
          <input
            id="categoria-a"
            class="uk-input"
            type="text"
            value="Orientação dentro do escopo"
            readonly
          />
        </div>
        <div class="uk-margin">
          <label for="sub-categoria-a" class="uk-form-label"
            >Subcategoria</label
          >
          <input
            id="sub-categoria-a"
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
          <label for="estado-a" class="uk-form-label">Estado</label>
          <input
            id="estado-a"
            class="uk-input"
            type="text"
            value="Encerrado Abandonado"
            readonly
          />
        </div>
        <div class="uk-margin">
          <label for="template-interacao-a" class="uk-form-label"
            >Template de interação</label
          >
          <input
            id="template-interacao-a"
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
      <label for="descricao-resumida-a" class="uk-form-label"
        >Descrição resumida</label
      >
      <input
        id="descricao-resumida-a"
        class="uk-input"
        type="text"
        value="KB0010212 - Perda de Contato - Perda de contato durante atendimento"
        readonly
      />
    </div>
    <div class="uk-margin">
      <label for="anotacoes-trabalho-a" class="uk-form-label"
        >Anotações de trabalho</label
      >
      <input
        id="anotacoes-trabalho-a"
        class="uk-input"
        type="text"
        value="Durante o atendimento, houve perda de contato."
        readonly
      />
    </div>
    <div class="uk-margin">
      <label for="colaborador-a" class="uk-form-label required"
        >Colaborador</label
      >
      <input
        id="colaborador-a"
        class="uk-input"
        type="text"
        v-model="colaboradorA"
        placeholder="Nome do colaborador"
        @input="updateDetalhes"
        required
      />
    </div>
    <div class="uk-margin">
      <label for="acoes-a" class="uk-form-label"
        >Ações tomadas (visível ao cliente)</label
      >
      <textarea
        id="acoes-a"
        class="uk-textarea"
        rows="8"
        style="height: auto"
        v-model="acoesA"
        readonly
      ></textarea>
    </div>

    <hr class="uk-divider-icon" />

    <h2 class="uk-h5 uk-margin-remove-top">
      Encerramento por parte do analista
    </h2>

    <div class="uk-margin">
      <label for="tentativas-b" class="uk-form-label"
        >Efetuar 3 tentativas de contato a cada 60 segundos
      </label>
      <input
        id="tentativas-b"
        class="uk-input"
        type="text"
        value="Percebemos que você está sem responder. Você ainda precisa de ajuda?"
        readonly
      />
    </div>

    <div class="uk-margin">
      <label for="encerramento-b" class="uk-form-label"
        >Encerramento após às 3 tentativas</label
      >
      <textarea id="encerramento-b" class="uk-textarea" readonly>
Esse bate-papo será finalizado devido à falta de interação, se você ainda precisar de ajuda, retorne ao bate-papo.</textarea
      >
    </div>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s">
      <div>
        <div class="uk-margin">
          <label for="categoria-b" class="uk-form-label">Categoria</label>
          <input
            id="categoria-b"
            class="uk-input"
            type="text"
            value="Orientação dentro do escopo"
            readonly
          />
        </div>
        <div class="uk-margin">
          <label for="sub-categoria-b" class="uk-form-label"
            >Subcategoria</label
          >
          <input
            id="sub-categoria-b"
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
          <label for="estado-b" class="uk-form-label">Estado</label>
          <input
            id="estado-b"
            class="uk-input"
            type="text"
            value="Encerrado Abandonado"
            readonly
          />
        </div>
        <div class="uk-margin">
          <label for="template-interacao-b" class="uk-form-label"
            >Template de interação</label
          >
          <input
            id="template-interacao-b"
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
      <label for="descricao-resumida-b" class="uk-form-label"
        >Descrição resumida</label
      >
      <input
        id="descricao-resumida-b"
        class="uk-input"
        type="text"
        value="KB0010212 - Perda de Contato - Queda da Interação - Sinalização ao Colaborador"
        readonly
      />
    </div>

    <div class="uk-margin">
      <label for="anotacoes-trabalho-b" class="uk-form-label"
        >Anotações de trabalho</label
      >
      <input
        id="anotacoes-trabalho-b"
        class="uk-input"
        type="text"
        value="Devido à falta de contato, a interação foi encerrada."
        readonly
      />
    </div>
    <div class="uk-margin">
      <label for="colaborador-b" class="uk-form-label required"
        >Colaborador</label
      >
      <input
        id="colaborador-b"
        class="uk-input"
        type="text"
        v-model="colaboradorB"
        placeholder="Nome do colaborador"
        @input="updateDetalhes"
        required
      />
    </div>
    <div class="uk-margin">
      <label for="acoes-b" class="uk-form-label"
        >Ações tomadas (visível ao cliente)</label
      >
      <textarea
        id="acoes-b"
        class="uk-textarea"
        rows="7"
        style="height: auto"
        v-model="acoesB"
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
      resumo: 'Interrupção Durante o Atendimento',
      colaboradorA: '',
      colaboradorB: '',
      acoesA: `Caro(a) colaborador(a),

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Atenciosamente,
Service Desk White Martins`,

      acoesB: `Caro(a) colaborador(a),

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
      this.acoesA = `Caro(a) ${this.colaboradorA},

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Atenciosamente,
Service Desk White Martins`;

      this.acoesB = `Caro(a) ${this.colaboradorB},

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Atenciosamente,
Service Desk White Martins`;
    },
  },
};
</script>
