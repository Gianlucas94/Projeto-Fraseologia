<template>
  <ul class="uk-navbar-nav">
    <li>
      <a href="#">Início</a>
      <div class="uk-navbar-dropdown" uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100">
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/atendimento/inicio/chat">Chat</n-link>
          </li>
          <li>
            <n-link to="/atendimento/inicio/informacoes-usuario">Informações do usuário</n-link>
          </li>
        </ul>
      </div>
    </li>

    <li>
      <a href="#">Contato</a>
      <div class="uk-navbar-dropdown" uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100">
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/atendimento/contato/colaborador-nao-responde"
              >Colaborador não responde</n-link
            >
          </li>
          <li>
            <n-link to="/atendimento/contato/perda-contato-durante-atendimento"
              >Perda de contato durante o atendimento</n-link
            >
          </li>
          <li>
            <n-link to="/atendimento/contato/interrupcao-durante-atendimento"
              >Interrupção durante atendimento</n-link
            >
          </li>
          <li>
            <n-link to="/atendimento/contato/colaborador-desistiu-atendimento"
              >Colaborador desistiu do atendimento</n-link
            >
          </li>
          <li>
            <n-link to="/atendimento/contato/perda-contato-problema-sistemico"
              >Perda de contato devido problema sistêmico</n-link
            >
          </li>
          <li>
            <n-link to="/atendimento/contato/perda-contato-incidente"
              >Perda de contato durante incidente</n-link
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
          <li>
            <n-link to="/atendimento/direcionamento/software">Software</n-link>
          </li>
          <li>
            <n-link to="/atendimento/direcionamento/padrao">Padrao</n-link>
          </li>
          <li>
            <n-link to="/atendimento/direcionamento/telefone-fixo-avaya"
              >Telefone Fixo e Avaya</n-link
            >
          </li>
          <li>
            <n-link to="/atendimento/direcionamento/telefone-movel"
              >Telefone Móvel</n-link
            >
          </li>
          <li><n-link to="/atendimento/direcionamento/vctp">VCTP</n-link></li>
        </ul>
      </div>
    </li>

    <li>
      <n-link to="/atendimento/fechamento/chamado">Fechamento</n-link>
    </li>

    <li>
      <n-link to="/atendimento/direcionamento/transferencia"
        >Transferência</n-link
      >
    </li>
  </ul>
</template>
