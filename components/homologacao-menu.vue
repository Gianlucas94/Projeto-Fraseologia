<template>
  <ul class="uk-navbar-nav">
    <li>
      <a href="#">Inicio</a>
      <div class="uk-navbar-dropdown" uk-dropdown="animation: uk-animation-fade; duration: 100; delay-hide: 100">
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li>
            <n-link to="/homologacao/info-config">Informações e configuração</n-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>