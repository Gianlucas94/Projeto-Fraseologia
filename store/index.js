export const state = () => ({
  layout: '',
  resumo: '',
  status: '',
  detalhes: '',
  obs: ''
});

export const mutations = {
  logGenerate(state) {
    let resumo = document.querySelector('#log-resumo');
    // let tipo = document.querySelector('#log-tipo');
    let status = document.querySelector('#log-status');
    let detalhes = document.querySelector('#log-detalhes');
    let obs = document.querySelector('#log-obs');

    // Atualiza state
    resumo.textContent = state.resumo;
    status.value = state.status;

    // Adiciona obervação caso esteja preenchida
    if (obs.value === '') {
      detalhes.value = state.detalhes;
    } else if (obs.value !== '') {
      detalhes.value = `${state.detalhes}\n\nObs: ${obs.value}`;
    } else {
      detalhes.value = `${state.detalhes}`;
    }

    // Adiciona valor de detalhes no clipboard
    const detalhesTemp = document.createElement('textarea');
    detalhesTemp.value = detalhes.value;
    detalhesTemp.setAttribute('readonly', '');
    detalhesTemp.style.position = 'absolute';
    detalhesTemp.style.left = '-9999px';
    document.body.appendChild(detalhesTemp);
    detalhesTemp.select();
    document.execCommand('copy');
    document.body.removeChild(detalhesTemp);
  },

  updateLayout(state, value) {
    state.layout = value;
  },
  updateResumo(state, value) {
    state.resumo = value;
  },
  updateStatus(state, value) {
    state.status = value;
  },
  updateDetalhes(state, value) {
    state.detalhes = value;
  },
  updateObs(state, value) {
    state.obs = value;
  }
};
