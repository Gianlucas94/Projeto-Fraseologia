<template>
  <div>
    <h1 class="uk-h4 uk-text-uppercase">{{ resumo }}</h1>

    <div class="uk-grid uk-child-width-expand@s uk-margin">
      <div>
        <div class="uk-margin">
          <label for="chamado" class="uk-form-label required">Nº chamado</label>
          <input id="chamado" type="text" class="uk-input" required v-model="chamado" @input="updateDetalhes" />
        </div>
      </div>

      <div>
        <div class="uk-margin">
          <label for="tentativa" class="uk-form-label required">Tentativa</label>
          <select id="tentativa" class="uk-select" v-model="tentativa" @change="updateDetalhes">
            <option>1ª Tentativa de contato</option>
            <option>2ª Tentativa de contato</option>
            <option>3ª Tentativa de contato</option>
            <option>Encerramento</option>
            <option>Tentativa de contato pró-ativa</option>
          </select>
        </div>
      </div>
    </div>

    <log-buttons />
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import LogButtons from '~/components/log-buttons';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    LogButtons,
  },
  data() {
    return {
      resumo: 'Tentativa de Contato',
      status: 'Em espera - Motivo: Aguardando solicitante',
      detalhes: '',
      // ---
      chamado: '',
      tentativa: '1ª Tentativa de contato',
    };
  },
  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();

    if (localStorage.getItem('chamado')) {
      this.chamado = localStorage.getItem('chamado');
    }

    if (tentativa.value === '1ª Tentativa de contato') {
      this.detalhes = `1ª TENTATIVA DE CONTATO\nEfetuado tentativa de contato com o usuário via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. Será efetuado uma nova tentativa de contato no próximo período.`;
    } else if (tentativa.value === '2ª Tentativa de contato') {
      this.detalhes = `2ª TENTATIVA DE CONTATO\nEfetuado tentativa de contato com o usuário via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. Será efetuado uma nova tentativa de contato no próximo período.`;
    } else if (tentativa.value === '3ª Tentativa de contato') {
      this.detalhes = `3ª TENTATIVA DE CONTATO\nEfetuado tentativa de contato com o usuário via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. Será efetuado uma nova tentativa de contato no próximo período.`;
    } else if (tentativa.value == 'Encerramento') {
      this.detalhes = `Efetuado a última tentativa de contato via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. O chamado ficará com o status “Resolvido” e você poderá reabri-lo através da ferramenta HPSM (hpsm.linde.lds) é só seguir o caminho “Meus chamados” (no canto superior direito) selecionar o chamado que deseja reabrir e escolher a opção “Rejeitar”.`;
      this.status = 'Resolvido';
    } else if (tentativa.value == 'Tentativa de contato pró-ativa') {
      this.detalhes = `Efetuado tentativa de contato proativa com o usuário via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. Será efetuado uma nova tentativa de contato no próximo período.`;
    }

    this.$store.commit('updateResumo', this.resumo);
    this.$store.commit('updateStatus', this.status);
    this.$store.commit('updateDetalhes', this.detalhes);
  },
  methods: {
    updateDetalhes() {
      localStorage.setItem('chamado', this.chamado);

      if (tentativa.value === '1ª Tentativa de contato') {
        this.detalhes = `1ª TENTATIVA DE CONTATO\nEfetuado tentativa de contato com o usuário via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. Será efetuado uma nova tentativa de contato no próximo período.`;
      } else if (tentativa.value === '2ª Tentativa de contato') {
        this.detalhes = `2ª TENTATIVA DE CONTATO\nEfetuado tentativa de contato com o usuário via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. Será efetuado uma nova tentativa de contato no próximo período.`;
      } else if (tentativa.value === '3ª Tentativa de contato') {
        this.detalhes = `3ª TENTATIVA DE CONTATO\nEfetuado tentativa de contato com o usuário via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. Será efetuado uma nova tentativa de contato no próximo período.`;
      } else if (tentativa.value == 'Encerramento') {
        this.detalhes = `Efetuado a última tentativa de contato via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. O chamado ficará com o status “Resolvido” e você poderá reabri-lo através da ferramenta HPSM (Itau.service-now.com/tech) é só seguir o caminho “Meus chamados” (no canto superior direito) selecionar o chamado que deseja reabrir e escolher a opção “Rejeitar”.`;
        this.status = 'Resolvido';
      } else if (tentativa.value == 'Tentativa de contato pró-ativa') {
        this.detalhes = `Efetuado tentativa de contato proativa com o usuário via telefone e Teams, aguardado 05 min para retorno do contato para atendimento do chamado ${this.chamado}, mas sem sucesso conforme anexo. Será efetuado uma nova tentativa de contato no próximo período.`;
      }

      this.$store.commit('updateStatus', this.status);
      this.$store.commit('updateDetalhes', this.detalhes);
    },
  },
};
</script>
