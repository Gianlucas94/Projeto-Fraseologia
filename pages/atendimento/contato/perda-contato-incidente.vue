<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>
    <h2 class="uk-h5 uk-margin-remove-top">Em casos de suporte concluído:</h2>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s">
      <div>
        <div class="uk-margin">
          <label for="categoria" class="uk-form-label">Categoria</label>
          <input
            id="categoria"
            class="uk-input"
            type="text"
            value="Microinformática"
          />
        </div>
        <div class="uk-margin">
          <label for="sub-categoria" class="uk-form-label">Subcategoria</label>
          <input
            id="sub-categoria"
            class="uk-input"
            type="text"
            value="De acordo com a falha apresentada"
          />
        </div>
      </div>
      <!-- col -->

      <div>
        <div class="uk-margin">
          <label for="estado" class="uk-form-label">Estado</label>
          <input id="estado" class="uk-input" type="text" value="Resolvido" />
        </div>
        <div class="uk-margin">
          <label for="template-interacao" class="uk-form-label"
            >Template de interação</label
          >
          <input
            id="template-interacao"
            class="uk-input"
            type="text"
            value="Perda de contato no atendimento / Resolv"
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
        value="Número da KB - Título do artigo (Conforme falha apresentada) "
      />
    </div>

    <div class="uk-margin">
      <label for="colaborador-a" class="uk-form-label">Colaborador</label>
      <input
        id="colaborador-a"
        class="uk-input"
        type="text"
        v-model="colaboradorA"
        placeholder="Nome do colaborador"
        @input="updateDetalhes"
      />
    </div>
    <div class="uk-margin">
      <label for="acoes-a" class="uk-form-label"
        >Ações tomadas (visível ao cliente)</label
      >
      <textarea
        id="acoes-a"
        class="uk-textarea"
        rows="9"
        style="height: auto"
        v-model="acoesA"
      ></textarea>
    </div>

    <div uk-alert class="uk-alert">
      <p>
        Anexe o print da tela comprovando a falta de interação por parte do
        colaborador(a).
      </p>
    </div>

    <hr class="uk-divider-icon" />

    <h2 class="uk-h5 uk-margin-remove-top">
      Em casos de suporte interrompido:
    </h2>

    <div class="uk-grid uk-grid-medium uk-child-width-expand@s">
      <div>
        <div class="uk-margin">
          <label for="categoria" class="uk-form-label">Categoria</label>
          <input
            id="categoria"
            class="uk-input"
            type="text"
            value="Microinformática"
          />
        </div>
        <div class="uk-margin">
          <label for="sub-categoria" class="uk-form-label">Subcategoria</label>
          <input
            id="sub-categoria"
            class="uk-input"
            type="text"
            value="De acordo com a falha apresentada"
          />
        </div>
      </div>
      <!-- col -->

      <div>
        <div class="uk-margin">
          <label for="estado" class="uk-form-label">Estado</label>
          <input id="estado" class="uk-input" type="text" value="Cancelado" />
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
        value="Número da KB - Título do artigo (Conforme falha apresentada) "
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
        value="Descreva todos os processos realizados antes da perda de contato."
      />
    </div>
    <div class="uk-margin">
      <label for="colaborador-b" class="uk-form-label">Colaborador</label>
      <input
        id="colaborador-b"
        class="uk-input"
        type="text"
        v-model="colaboradorB"
        placeholder="Nome do colaborador"
        @input="updateDetalhes"
      />
    </div>
    <div class="uk-margin">
      <label for="acoes-b" class="uk-form-label"
        >Ações tomadas (visível ao cliente)</label
      >
      <textarea
        id="acoes-b"
        class="uk-textarea"
        rows="9"
        style="height: auto"
        v-model="acoesB"
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
      resumo: 'Perda de Contato Durante Incidente',
      colaboradorA: '',
      colaboradorB: '',

      acoesA: `Caro(a) coraborador(a),

Apesar da interrupção do atendimento, o suporte foi concluído com sucesso.

Se houver alguma dúvida, ou algo em que possamos ajudar, pedimos que retorne a Central Service Desk, onde estaremos à disposição.

Atenciosamente,
Service Desk White Martins`,

      acoesB: `Caro(a) coraborador(a),

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Informe o número do seu último incidente no menu Iu Click> Meus Chamados.

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

Apesar da interrupção do atendimento, o suporte foi concluído com sucesso.

Se houver alguma dúvida, ou algo em que possamos ajudar, pedimos que retorne a Central Service Desk, onde estaremos à disposição.

Atenciosamente,
Service Desk White Martins`;

      this.acoesB = `Caro(a) ${this.colaboradorB},

Devido à perda de contato, pedimos que retorne novamente com a Central Service Desk para darmos continuidade no atendimento.

Informe o número do seu último incidente no menu Iu Click> Meus Chamados.

Atenciosamente,
Service Desk White Martins`;
    },
  },
};
</script>
