<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-margin">
      <label for="usuario" class="uk-form-label required">Nome do colaborador</label>
      <input id="usuario" class="uk-input" type="text" v-model="usuario" @input="updateDetalhes" required />
    </div>

    <ul uk-accordion>
      <li class="uk-open">
        <a class="uk-accordion-title" href="#">Softwares/ complementos que dependem de configurações especificas, banco de dados, etc...</a>
        <div class="uk-accordion-content">
          <textarea id="finalizacao1" class="uk-textarea" rows="6" style="height: auto" readonly v-model="finalizacao1" @input="updateDetalhes"></textarea>
        </div>
      </li>
      <li>
        <a class="uk-accordion-title" href="#">Softwares/ complementos/ apps que dependem de configurações adicionais</a>
        <div class="uk-accordion-content">
          <textarea id="finalizacao2" class="uk-textarea" rows="6" style="height: auto" readonly v-model="finalizacao2" @input="updateDetalhes"></textarea>
        </div>
      </li>
      <li>
        <a class="uk-accordion-title" href="#">Em caso de indisponibilidade do usuário em realizar os testes do software</a>
        <div class="uk-accordion-content">
          <textarea id="finalizacao3" class="uk-textarea" rows="6" style="height: auto" readonly v-model="finalizacao3" @input="updateDetalhes"></textarea>
        </div>
      </li>
    </ul>

    <div>
      <label for="pesquisa">Pesquisa de satisfação</label>
      <textarea id="pesquisa" class="uk-textarea" rows="2" style="height: auto" readonly v-model="pesquisa"></textarea>
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
      resumo: 'Finalizações',
      // ---
      usuario: '',
      finalizacao1:
        'Sr(a). o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada confirmação de que o software está funcional, estamos fechando o chamado e solicitamos sua colaboração em responder a pesquisa de satisfação. As configurações internas (como banco de dados por exemplo) dependem de especificações de cada área e orientamos que vc procure sua liderança /equipe para fazer as configurações especificas de sua área.',
      finalizacao2:
        'Sr(a). o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada confirmação de que o software está funcional, estamos fechando o chamado e solicitamos sua colaboração em responder a pesquisa de satisfação. Caso haja falha ou problema relacionado a esta instalação, pedimos que reabra o chamado em até 3 dias, e estaremos a inteira disposição para revisarmos a instalação e prover o suporte necessário.',
      finalizacao3:
        'Sr(a). o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada a não disponibilidade neste momento para testar se o software está funcional, iremos fechar o chamado e, caso haja falha ou problema relacionado a esta instalação solicitamos a gentileza de reabrir o mesmo chamado em até 3 dias, que estaremos a inteira disposição para revisarmos a instalação e prover o suporte necessário. Uma vez finalizado o suporte, solicitamos sua colaboração em responder a pesquisa de satisfação.',
      pesquisa:
        'Senhor(a) agora que finalizamos esse atendimento peço que responda a pesquisa de satisfação sobre esse atendimento que será enviado para o senhor via e-mail após o encerramento do chamado.',
    };
  },
  mounted() {
    Fraseologia.selectFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();
  },
  methods: {
    updateDetalhes() {
      this.finalizacao1 = `Sr(a). ${this.usuario} o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso.. Dada confirmação de que o software está funcional, estamos fechando o chamado e solicitamos sua colaboração em responder a pesquisa de satisfação. As configurações internas ( como banco de dados por exemplo) dependem de especificações de cada área e orientamos que vc procure sua liderança /equipe para fazer as configurações especificas de sua área.`;
      this.finalizacao2 = `Sr(a). ${this.usuario} o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada confirmação de que o software está funcional, estamos fechando o chamado e solicitamos sua colaboração em responder a pesquisa de satisfação. Caso haja falha ou problema relacionado a esta instalação, pedimos que reabra o chamado em até 3 dias, e estaremos a inteira disposição para revisarmos a instalação e prover o suporte necessário.`;
      this.finalizacao3 = `Sr(a). ${this.usuario} o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada a não disponibilidade neste momento para testar se o software está funcional, iremos fechar o chamado e, caso haja falha ou problema relacionado a esta instalação solicitamos a gentileza de reabrir o mesmo chamado em até 3 dias, que estaremos a inteira disposição para revisarmos a instalação e prover o suporte necessário. Uma vez finalizado o suporte, solicitamos sua colaboração em responder a pesquisa de satisfação.`;
    },
  },
};
</script>
