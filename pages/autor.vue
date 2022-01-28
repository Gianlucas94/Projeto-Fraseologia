<template>
  <div>
    <app-header />

    <main class="main autor uk-container uk-container-small">
      <div class="uk-card">
        <div class="uk-grid-medium uk-grid" uk-grid>
          <div class="uk-width-auto@m">
            <img src="/img/vitor-melo.jpg" width="150" height="150" alt="Vitor Melo" />
            <ul class="uk-list">
              <li>
                Site: <a href="https://vitormelo.com.br">vitormelo.com.br</a>
              </li>
              <li>
                Linkedin:
                <a href="https://www.linkedin.com/in/vitormelo">lnkdin.me/vitormelo</a>
              </li>
            </ul>
          </div>
          <div class="uk-width-expand@m">
            <h1 class="uk-h4 uk-text-uppercase">Vitor Melo</h1>
            <p>
              Atua como técnico de campo no White Martins no site Almirante Barroso no
              Rio de Janeiro.
            </p>
            <p>
              O aplicativo foi desenvolvido para aumentar a velocidade do
              preenchimento de logs.
            </p>
            <p>
              Dúvidas, sugestões e notificação de bugs
              <a href="mailto:vitemel@correio.itau.com.br">vitemel@correio.itau.com.br</a>.
            </p>
          </div>
        </div>
      </div>
    </main>

    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/app-header.vue';
import AppFooter from '~/components/app-footer.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
