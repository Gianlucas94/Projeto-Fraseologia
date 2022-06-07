<template>
  <div>
    <ul class="uk-tab" data-uk-tab="{connect:'#alerta-opcoes'}">
      <li><a href="#">Início</a></li>
      <li><a href="#">Frases de Strike</a></li>
      <li><a href="#">Finalização</a></li>
    </ul>
    <div id="alerta-opcoes" class="uk-switcher">
      <div class="tab-content1">

        <div class="uk-grid uk-grid-medium uk-child-width-expand@s uk-margin">
          <div>
            <label for="alerta">Apresentação</label>
            <textarea id="apresentacao" class="uk-textarea" v-model="apresentacao" readonly></textarea>
          </div>
          <div>
            <div class="uk-margin">
              <label for="nome-tecnico" class="uk-form-label required">Nome do técnico</label>
              <input id="nome-tecnico" class="uk-input" type="text" v-model="nomeTecnico" @input="updateDetalhes" required />
            </div>
          </div>
        </div>

        <div class="uk-margin">
          <label id="informacoes-usuario" for="alerta">Informações do Usuário</label>
          <textarea id="informacoes-usuario" class="uk-textarea" rows="9" style="height: auto" readonly v-model="informacoesUsuario"></textarea>
        </div>

        <div class="uk-margin">
          <label id="acesso-remoto" for="alerta">Logar no equipamento?</label>
          <textarea id="acesso-remoto" class="uk-textarea" readonly v-model="acessoRemoto"></textarea>
        </div>

        <div class="uk-margin">
          <label for="ip">Qual seu controle de TI ou IPV4?</label>
          <textarea id="ip" class="uk-textarea" rows="9" style="height: auto" readonly v-model="ip"></textarea>
        </div>

        <div>
          <label for="reinicio-equipamento">Reinicio de equipamento</label>
          <textarea id="ip" class="uk-textarea" rows="4" style="height: auto" readonly v-model="reinicioEquipamento"></textarea>
        </div>
      </div><!-- .tab-content1 -->

      <div class="tab-content2">
        <div class="uk-margin">
          <label id="frase-strike" for="rase-strike">Falta de resposta</label>
          <textarea id="frase-strike" class="uk-textarea" rows="3" style="height: auto" readonly v-model="fraseStrike"></textarea>
        </div>

        <div class="uk-margin">
          <label id="frase-abandono1" for="frase-abandono1">Falta de interação</label>
          <textarea id="frase-abandono1" class="uk-textarea" rows="3" style="height: auto" readonly v-model="fraseAbandono1"></textarea>
        </div>

        <div class="uk-margin">
          <label id="frase-abandono2" for="frase-abandono1">Comunicação de encerramento</label>
          <textarea id="frase-abandono2" class="uk-textarea" rows="3" style="height: auto" readonly v-model="fraseAbandono2"></textarea>
        </div>

        <div class="uk-margin">
          <label id="frase-abandono3" for="frase-abandono1">Encerramento</label>
          <textarea id="frase-abandono3" class="uk-textarea" rows="3" style="height: auto" readonly v-model="fraseAbandono3"></textarea>
        </div>
      </div><!-- .tab-content2 -->

      <div class="tab-content3">
        <div class="uk-margin">
          <label for="usuario" class="uk-form-label required">Nome do colaborador</label>
          <input id="usuario" class="uk-input" type="text" v-model="nomeUsuario" @input="updateDetalhes" required />
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
              <textarea id="finalizacao3" class="uk,k-textarea" rows="6" style="height: auto" readonly v-model="finalizacao3" @input="updateDetalhes"></textarea>
            </div>
          </li>
        </ul>

        <div class="uk-margin">
          <label for="ajuda">Dúvida</label>
          <input id="ajuda" class="uk-input" type="text" readonly v-model="ajuda">
        </div>

        <div>
          <label for="pesquisa">Pesquisa de satisfação</label>
          <textarea id="pesquisa" class="uk-textarea" rows="2" style="height: auto" readonly v-model="pesquisa"></textarea>
        </div>
      </div><!-- .tab-content3 -->
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
      resumo: 'Alertas',
      // ---
      nomeTecnico: '',
      apresentacao: `Service Desk, bom dia, me chamo
Em que posso ajudar?`,

      informacoesUsuario: `Poderia enviar seguintes informações:

Descrição do usuário: 
Procedimentos efetuados: 
Hostname / Controle de TI: 
Telefone de contato: 
Localidade: 
Horário de trabalho: 
Horário de almoço: `,

      acessoRemoto: `Vou tentar acessar remotamente seu equipamento. Por gentileza, salve todos os arquivos abertos e feche os confidenciais para podermos prosseguir.`,

      ip: `- Clique no botão iniciar do Windows 
- Digite cmd e pressione Enter em seguida
- O Prompt de Comando (tela preta) irá abrir
- Digite o comando IPCONFIG e pressione Enter

O console irá exibir algumas informações sobre a conexão.
Informe o valor do endereço IPv4 que se inicia com 10.92, 10.95 ou 10.100.

Caso tenha reiniciado o computador, verifique o número novamente.`,

      reinicioEquipamento: `Por favor peço que reinicie o seu equipamento, porém com o navegador aberto e volte para o chat à fim de concluirmos esse atendimento.

Obs: Aguarde até 6min para o retorno do colaborador`,

      fraseStrike:
        'Percebemos que você está sem responder. Você ainda precisa de ajuda?',
      fraseAbandono1:
        'Esse bate-papo será finalizado devido à falta de interação, se você ainda precisar de ajuda, retorne ao bate-papo.',
      fraseAbandono2:
        'Por falta de comunicação o contato esta sendo encerrado, se precisar retorne estaremos a sua disposição, obrigada. Bom dia e um ótimo trabalho!',
      fraseAbandono3:
        'Por falta de comunicação, o chat foi encerrado. Caso ainda precise de ajuda, entre em contato com a gente novamente!',

      nomeUsuario: '',
      finalizacao1:
        'Sr(a). o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada confirmação de que o software está funcional, estamos fechando o chamado e solicitamos sua colaboração em responder a pesquisa de satisfação. As configurações internas (como banco de dados por exemplo) dependem de especificações de cada área e orientamos que vc procure sua liderança /equipe para fazer as configurações especificas de sua área.',
      finalizacao2:
        'Sr(a). o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada confirmação de que o software está funcional, estamos fechando o chamado e solicitamos sua colaboração em responder a pesquisa de satisfação. Caso haja falha ou problema relacionado a esta instalação, pedimos que reabra o chamado em até 3 dias, e estaremos a inteira disposição para revisarmos a instalação e prover o suporte necessário.',
      finalizacao3:
        'Sr(a). o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada a não disponibilidade neste momento para testar se o software está funcional, iremos fechar o chamado e, caso haja falha ou problema relacionado a esta instalação solicitamos a gentileza de reabrir o mesmo chamado em até 3 dias, que estaremos a inteira disposição para revisarmos a instalação e prover o suporte necessário. Uma vez finalizado o suporte, solicitamos sua colaboração em responder a pesquisa de satisfação.',
      ajuda: `Existe mais alguma dúvida ou mais alguma questão que eu possa ajudar?`,
      pesquisa:
        'Senhor(a) agora que finalizamos esse atendimento peço que aguarde no chat para responder a pesquisa de satisfação sobre esse atendimento que será enviado para o senhor agora.​',
    };
  },
  mounted() {
    Fraseologia.selectFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();

    if (localStorage.getItem('nomeTecnico')) {
      this.nomeTecnico = localStorage.getItem('nomeTecnico');
      this.apresentacao = `Service Desk, bom dia, me chamo ${this.nomeTecnico}
Em que posso ajudar?`;
    }
  },
  methods: {
    updateDetalhes() {
      this.apresentacao = `Service Desk, bom dia, me chamo ${this.nomeTecnico}.
Em que posso ajudar?`;
      localStorage.setItem('nomeTecnico', this.nomeTecnico);

      this.finalizacao1 = `Sr(a). ${this.nomeUsuario} o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso.. Dada confirmação de que o software está funcional, estamos fechando o chamado e solicitamos sua colaboração em responder a pesquisa de satisfação. As configurações internas ( como banco de dados por exemplo) dependem de especificações de cada área e orientamos que vc procure sua liderança /equipe para fazer as configurações especificas de sua área.`;
      this.finalizacao2 = `Sr(a). ${this.nomeUsuario} o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada confirmação de que o software está funcional, estamos fechando o chamado e solicitamos sua colaboração em responder a pesquisa de satisfação. Caso haja falha ou problema relacionado a esta instalação, pedimos que reabra o chamado em até 3 dias, e estaremos a inteira disposição para revisarmos a instalação e prover o suporte necessário.`;
      this.finalizacao3 = `Sr(a). ${this.nomeUsuario} o escopo de Service Desk para atendimento deste chamado é dado como concluído com a instalação e testes realizados com sucesso. Dada a não disponibilidade neste momento para testar se o software está funcional, iremos fechar o chamado e, caso haja falha ou problema relacionado a esta instalação solicitamos a gentileza de reabrir o mesmo chamado em até 3 dias, que estaremos a inteira disposição para revisarmos a instalação e prover o suporte necessário. Uma vez finalizado o suporte, solicitamos sua colaboração em responder a pesquisa de satisfação.`;
    },
  },
};
</script>
