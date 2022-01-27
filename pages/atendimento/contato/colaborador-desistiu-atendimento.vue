<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

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
            value="Colaborador(a) desistiu do suporte"
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
        value="KB0010212 - Perda de Contato - Queda da Interação - Sinalização ao Colaborador "
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
        value="Durante o atendimento, colaborador(a) desistiu do suporte."
      />
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
      resumo: 'Colaborador(a) desistiu do suporte',
    };
  },
  mounted() {
    Fraseologia.selectFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();
  },
};
</script>
