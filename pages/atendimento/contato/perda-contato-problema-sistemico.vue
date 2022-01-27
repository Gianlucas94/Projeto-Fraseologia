<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-margin">
      <p>
        Ao retornar, acesse o Workspace &raquo; Listas (canto superior esquerdo)
        > Interações &raquo; Minhas Interações
      </p>
      <p>
        Clique em "Aberto" para ordenar as interações por data, localize as
        interações que estavam sendo tratadas antes da queda e verifique se esta
        com o status ativo. Se sim, clique sobre a interação e prossiga com o
        atendimento, se não, finalize conforme abaixo:
      </p>
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
          />
        </div>
        <div class="uk-margin">
          <label for="sub-categoria" class="uk-form-label">Subcategoria</label>
          <input
            id="sub-categoria"
            class="uk-input"
            type="text"
            value="De acordo com o motivo do contato do colaborador"
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
        value="Devido à problemas sistêmicos, houve perda de contato."
      />
    </div>
    <div class="uk-margin">
      <label for="colaborador" class="uk-form-label">Colaborador</label>
      <input
        id="descricao-resumida"
        class="uk-input"
        type="text"
        v-model="colaborador"
        placeholder="Nome do colaborador"
        @input="updateDetalhes"
      />
    </div>
    <div class="uk-margin uk-margin-medium-bottom">
      <label for="acoes" class="uk-form-label"
        >Ações tomadas (visível ao cliente)</label
      >
      <textarea
        id="acoes"
        class="uk-textarea"
        rows="7"
        style="height: auto"
        v-model="acoes"
      ></textarea>
    </div>

    <div class="uk-margin">
      <p>
        Se o motivo do contato for identificado antes da perda de interação:
      </p>
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
      resumo: 'Perda de Contato Devido Problema Sistêmico',
      colaborador: '',
      acoes: `Caro(a) colaborador(a),

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
      this.acoes = `Caro(a) ${this.colaborador},

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Atenciosamente,
Service Desk Itaú-Unibanco`;
    },
  },
};
</script>
