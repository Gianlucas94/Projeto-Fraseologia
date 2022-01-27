<template>
  <ul class="uk-navbar-nav">
    <li>
      <a href="#">Inicio</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/geral/inicio/atendimento"
              >Início de atendimento</n-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Contato</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/geral/contato/tentativa">Tentativa de contato</n-link>
          </li>
          <li><n-link to="/geral/contato/teams">Script do Teams</n-link></li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Agendamento</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/geral/agendamento/agendamento">Agendamento</n-link>
          </li>
          <li>
            <n-link to="/geral/agendamento/antecipacao">Antecipação</n-link>
          </li>
          <li>
            <n-link to="/geral/agendamento/atendimento-pos-agendamento"
              >Início do atendimento após o agendamento</n-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Andamento</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/geral/andamento/em-andamento">Em andamento</n-link>
          </li>
          <li>
            <n-link to="/mobilidade/andamento/analise-problema"
              >Análise do problema</n-link
            >
          </li>
          <li>
            <n-link to="/geral/andamento/indisponibilidade-snow"
              >Indisponibilidade na ferramenta Service Now</n-link
            >
          </li>
          <li>
            <n-link to="/geral/andamento/treinamento-abandono"
              >Treinamento (PALT)</n-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Pendência</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/geral/pendencia/usuario-inicio"
              >Pendente informação do usuário Início</n-link
            >
          </li>
          <li>
            <n-link to="/geral/pendencia/usuario-atualizacao"
              >Pendente informação do usuário Atualização</n-link
            >
          </li>
          <li>
            <n-link to="/geral/pendencia/usuario-fim"
              >Pendente informação do usuário Fim</n-link
            >
          </li>
          <li><n-link to="/geral/pendencia/inicio">Pendente Início</n-link></li>
          <li>
            <n-link to="/geral/pendencia/atualizacao"
              >Pendente Atualização</n-link
            >
          </li>
          <li><n-link to="/geral/pendencia/fim">Pendente Fim</n-link></li>
          <li>
            <n-link to="/geral/pendencia/aprovacao-inicio"
              >Pendente de aprovação Início</n-link
            >
          </li>
          <li>
            <n-link to="/geral/pendencia/aprovacao-atualizacao"
              >Pendente de aprovação Atualização</n-link
            >
          </li>
          <li>
            <n-link to="/geral/pendencia/aprovacao-fim"
              >Pendente de aprovação Fim</n-link
            >
          </li>
          <li>
            <n-link to="/mobilidade/pendencia/aprovacao-fim"
              >Envio do Aparelho</n-link
            >
          </li>
          <li>
            <n-link to="/mobilidade/pendencia/confirmacao-recebimento"
              >Confirmação de recebimento</n-link
            >
          </li>
          <li>
            <n-link to="/geral/pendencia/paralizacao-sindical"
              >Paralisação Sindical (PCLT)</n-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Direcionamento</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li><n-link to="/geral/direcionamento/externo">Externo</n-link></li>
          <li><n-link to="/geral/direcionamento/interno">Interno</n-link></li>
          <li>
            <n-link to="/geral/direcionamento/manutencao">Manutenção</n-link>
          </li>
          <li><n-link to="/geral/direcionamento/indevido">Indevido</n-link></li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Fechamento</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li><n-link to="/mobilidade/fechamento/chamado">Chamado</n-link></li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Manutenção</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/mobilidade/manutencao/solicitado-aparelho-estoque"
              >Solicitado aparelho ao estoque</n-link
            >
          </li>
          <li>
            <n-link to="/mobilidade/manutencao/aparelho-pronto-envio"
              >Aparelho pronto para envio ao usuário</n-link
            >
          </li>
          <li>
            <n-link to="/mobilidade/manutencao/aparelho-entregue-expedicao"
              >Aparelho entregue na expedição</n-link
            >
          </li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Cancelamento</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/geral/cancelamento/sem-intervencao"
              >Solucionado sem intervenção técnica</n-link
            >
          </li>
          <li>
            <n-link to="/geral/cancelamento/mesma-solicitacao"
              >Mais de um chamado para a mesma solicitação</n-link
            >
          </li>
          <li>
            <n-link to="/geral/cancelamento/ferias-licenca-demissao"
              >Férias / Licença / Demissão</n-link
            >
          </li>
          <li>
            <n-link to="/geral/cancelamento/pedido-solicitante"
              >Mediante pedido do próprio solicitante</n-link
            >
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>