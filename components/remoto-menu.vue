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
          <li>
            <n-link to="/geral/inicio/reconhecimento-chamado"
              >Reconhecimento do chamado (Bloco 2)</n-link
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
          <li><n-link to="/geral/contato/teams">Script do teams</n-link></li>
          <li>
            <n-link to="/remoto/contato/email-incidentes-tarefas"
              >E-mail incidentes/tarefas</n-link
            >
          </li>
          <li>
            <n-link to="/remoto/contato/email-instalacao-software"
              >E-mail instalação de software</n-link
            >
          </li>
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
          <li>
            <n-link to="/geral/agendamento/ferias-licenca-software"
              >Férias/Licença - Instalação de software</n-link
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
            <n-link to="/geral/andamento/necessidade-formatacao"
              >Identificado a necessidade de formatação</n-link
            >
          </li>
          <li>
            <n-link
              to="/geral/andamento/backup-arquivos"
              title="Backup de arquvios em consequência da formatação"
              >Backup de arquvios</n-link
            >
          </li>
          <li>
            <n-link to="/geral/andamento/continuidade-backup"
              >Continuidade do backup</n-link
            >
          </li>
          <li>
            <n-link
              to="/geral/andamento/velocidade-link"
              title="Velocidade do link para instalação / config de apps"
              >Velocidade do link para instalação</n-link
            >
          </li>
          <li>
            <n-link to="/geral/andamento/instalacao-software"
              >Instalação de software</n-link
            >
          </li>
          <li>
            <n-link to="/geral/andamento/outro-usuario"
              >Chamado aberto para outro usuário</n-link
            >
          </li>
          <li>
            <n-link to="/geral/andamento/enxoval-licencas"
              >Enxoval de Licenças</n-link
            >
          </li>
          <li>
            <n-link to="/geral/andamento/anexo-chamado"
              >Anexo no chamado</n-link
            >
          </li>
          <li>
            <n-link to="/geral/andamento/indisponibilidade-snow"
              >Indisponibilidade na ferramenta HPSM</n-link
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
          <li>
            <n-link to="/remoto/fechamento/chamado">Chamado</n-link>
          </li>
          <li>
            <n-link to="/geral/fechamento/finalizacoes">Finalizações</n-link>
          </li>
          <li><n-link to="/geral/fechamento/telefonia">Telefonia</n-link></li>
          <li><n-link to="/geral/fechamento/mobilidade">Mobilidade</n-link></li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Manutenção</a>
      <div
        class="uk-navbar-dropdown scroll"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li><n-link to="/geral/manutencao/bancada">Bancada</n-link></li>
          <li>
            <n-link to="/geral/manutencao/finalizacao-testes"
              >Finalização de testes</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/breakfix-inicio"
              >Breakfix - Início</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/breakfix-termino"
              >Breakfix - Término</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/breakfix-rede"
              >Breakfix - Rede</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/laboratorio">Laboratório</n-link>
          </li>
          <li>
            <n-link to="/geral/manutencao/laboratorio-atualizacao"
              >Laboratório - Atualização</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/laboratorio-alteracao-previsao"
              >Laboratório - Alteração de previsão</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/laboratorio-transporte"
              >Laboratório - Em transporte</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/laboratorio-chegada"
              >Laboratório - Chegada</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/orcamento-aguardando-emissao"
              >Aguardando emissão de orçamento</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/orcamento-aguardando-aprovacao"
              >Aguardando aprovação do orçamento</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/orcamento-aprovado"
              >Orçamento aprovado</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/orcamento-reprovado"
              >Orçamento reprovado</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/dados-recuperacao"
              >Recuperação de dados</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/dados-recuperacao-atualizacao"
              >Recuperação de dados - Atualização</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/roubo-direcionado"
              >Roubo / Furto - Direcionado para manutenção</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/roubo-interno-externo"
              >Roubo Furto Interno / Externo</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/marketplace">Marketplace</n-link>
          </li>
          <li>
            <n-link
              to="/geral/manutencao/headset-aparelhos-digitais-trava-seguranca"
              >Headset / Aparelhos Digitais / Trava Segurança</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/pendencia-usuario"
              >Pendência do usuário</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/equipamento-descontinuado"
              >Equipamento descontinuado</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/orcamento-aprovado-cdc"
              >Orçamento aprovado - Aguardando CDC</n-link
            >
          </li>
          <li>
            <n-link to="/geral/manutencao/finalizacao-testes"
              >Finalizações de testes</n-link
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
