<template>
  <div class="uk-margin-top">
    <div>
      <div class="uk-text-right">
        <button id="log-button" class="uk-button uk-button-primary uk-margin-left" @click.prevent="showModal">Gerar Log</button>
        <button id="obs-button" class="uk-button uk-button-default" @click.prevent="showObs"><i class="icon">+</i> Observação</button>
      </div>
      <div id="obs-form" class="uk-hidden uk-margin-bottom">
        <label for="log-obs" class="uk-form-label">Observação</label>
        <textarea id="log-obs" class="uk-textarea" placeholder="Descreva alguma observação sobre a ocorrência." v-model="obs" @input="updateObs"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import UIkit from 'uikit';

export default {
    data() {
    return {
      obs: ''
    };
  },
  methods: {
    showObs() {
      let form = document.querySelector('#obs-form');
      let textarea = document.querySelector('#log-obs');
      let button = document.querySelector('#obs-button');
      let icon = document.querySelector('#obs-button .icon');

      if (form.classList.contains('uk-hidden')) {
        form.classList.toggle('uk-hidden');
        icon.textContent = '-';
        textarea.focus();
      } else {
        form.classList.toggle('uk-hidden');
        textarea.value = '';
        icon.textContent = '+';
        this.$store.commit('updateObs', '');
      }
    },
    updateObs(e) {
      this.$store.commit('updateObs', e.target.value);
    },
    showModal() {
      // Verifica se os campos obrigatórios estão preenchidos
      let formsRequired = document.querySelectorAll('[required]');
      let formsCount = 0;

      // Adiciona classe danger caso form não esteja preenchido
      formsRequired.forEach(element => {
        if (element.checkValidity()) {
          element.classList.remove('uk-form-danger');
          formsCount++;
        } else {
          element.classList.add('uk-form-danger');
        }
      });

      // Se todos os campos obrigatórios estiverem preenchidos
      if (formsRequired.length === formsCount) {
        // Comita valores para o store
        this.$store.commit('logGenerate');

        // Rola scroll para o alto e exibe o modal preenchido
        UIkit.modal('#modal').show();
        Fraseologia.toTop();
      }
    }
  }
};
</script>
