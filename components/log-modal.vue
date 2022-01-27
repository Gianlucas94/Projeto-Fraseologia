<template>
  <div id="modal" class="modal">
    <div class="uk-modal-dialog uk-modal-body">
      <button class="uk-modal-close-default" type="button" uk-close></button>

      <div class="uk-margin-small">
        <div class="uk-margin">
          <h2 id="log-resumo" class="uk-h4">Log gerada</h2>
        </div>

        <div class="uk-margin uk-position-relative">
          <label for="log-detalhes" class="uk-form-label">Detalhes</label>
          <textarea id="log-detalhes" class="uk-textarea" readonly autofocus></textarea>
          <label for="log-detalhes" class="copy-msg">Copiado</label>
        </div>

        <div class="uk-grid-small" uk-grid>
          <div class="uk-width-expand@m">
            <label for="log-status" class="uk-form-label">Estado</label>
            <input id="log-status" class="uk-input" type="text" readonly />
          </div>
          <div class="uk-width-auto@m uk-label-bottom">
            <button class="uk-button uk-button-primary uk-modal-close" type="button">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import UIkit from 'uikit';

export default {
  mounted() {
    Fraseologia.selectForm();
  },
};
</script>

