<template>
  <ul class="uk-navbar-nav">
    <li>
      <a href="#">Alpargatas</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/noc/alpargatas/alertas">Alertas</n-link>
          </li>
          <li>
            <n-link to="/noc/alpargartas/comunicacao">Comunicação</n-link>
          </li>
        </ul>
      </div>
    </li>

       <li>
      <a href="#">Fink</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/noc/fink/alertas">Alertas</n-link>
          </li>
          <li>
            <n-link to="/noc/fink/comunicacao">Comunicação</n-link>
          </li>
        </ul>
      </div>
    </li>

       <li>
      <a href="#">Guide</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/noc/guide/replicacritica">Replica Crítica</n-link>
          </li>
          <li>
            <n-link to="/noc/guide/rpo20min">RPO maior que 20 minutos</n-link>
          </li>
        </ul>
      </div>
    </li>

       <li>
      <a href="#">Teleperformance</a>
      <div
        class="uk-navbar-dropdown"
        uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100"
      >
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/noc/teleperformance/alertas">Alertas</n-link>
          </li>
          <li>
            <n-link to="/noc/teleperformance/comunicacao">Comunicação</n-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>
