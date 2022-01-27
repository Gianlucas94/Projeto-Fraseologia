<template>
  <div>
    <div class="uk-margin-bottom uk-text-right">
      <button id="limpar-campos" class="uk-button uk-button-primary" @click.prevent="resetState" uk-scroll>Limpar</button>
      <button class="uk-button uk-button-primary uk-margin-small-left" @click.prevent="goTo('bottom')"><span uk-icon="icon:triangle-down"></span></button>
    </div>

    <hr>

    <div id="homologacao">
      <h2 class="uk-h4 uk-margin-small">Dados do gerais</h2>

      <div uk-grid>
        <div class="uk-width-1-3">
          <label for="sof-solicitacao-numero" class="uk-form-label required">Número da solicitação</label>
          <input id="sof-solicitacao-numero" type="text" class="uk-input" required v-model="info.sofSolicitacaoNumero" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="data-inicio" class="uk-form-label required">Data início</label>
          <date-pick v-model="info.dataInicio" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
        </div>

        <div class="uk-width-1-3">
          <label for="data-termino" class="uk-form-label required">Data término</label>
          <date-pick v-model="info.dataTermino" @input="updateDetalhes" :displayFormat="'DD/MM/YYYY'" :prevMonthCaption="'Anterior'" :nextMonthCaption="'Próximo'" :setTimeCaption="'Hora:'" :weekdays="['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']" :months="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembero', 'Outubro', 'Novembero', 'Dezembro']"> </date-pick>
        </div>

        <div class="uk-width-1-3">
          <label for="sof-ambiente" class="uk-form-label required">Ambiente</label>
          <select id="sof-ambiente" class="uk-select" v-model="info.sofAmbiente" @change="updateDetalhes">
            <option>Itaú-Unibanco</option>
            <option>Rede</option>
            <option>IBBA</option>
          </select>
        </div>

        <div class="uk-width-1-3">
          <label for="sof-conclusao-certificacao" class="uk-form-label required">Conclusao de certificação</label>
          <select id="sconclusao-certificacao" class="uk-select" v-model="info.sofConclusaoCertificacao" @change="updateDetalhes">
            <option>Certificado</option>
            <option>Não Certificado</option>
          </select>
        </div>

        <div class="uk-width-1-3">
          <label for="sof-tipo-licenca" class="uk-form-label required">Tipo de licença</label>
          <select id="sof-tipo-licenca" class="uk-select" v-model="info.sofTipoLicenca" @change="updateDetalhes">
            <option>Corporativo</option>
            <option>Restrito</option>
            <option>Licença Especial</option>
          </select>
        </div>
      </div><!-- .grid -->

      <hr>

      <h2 class="uk-h4 uk-margin-small">Dados do analista</h2>
      <div uk-grid>
        <div class="uk-width-1-3">
          <label for="analista-nome" class="uk-form-label required">Nome do analista</label>
          <input id="analista-nome" type="text" class="uk-input" required v-model="info.analistaNome" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="analista-email" class="uk-form-label required">Email do analista</label>
          <input id="analista-email" type="email" class="uk-input" required v-model="info.analistaEmail" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="revisor-nome" class="uk-form-label">Nome do revisor</label>
          <input id="revisor-nome" type="text" class="uk-input" v-model="info.revisorNome" @input="updateDetalhes" />
        </div>
      </div><!-- .grid -->

      <hr>

      <h2 class="uk-h4 uk-margin-small">Dados do solicitante</h2>
      <div uk-grid>
        <div class="uk-width-1-3">
          <label for="solicitante-nome" class="uk-form-label required">Nome do solicitante</label>
          <input id="solicitante-nome" type="text" class="uk-input" required v-model="info.solicitanteNome" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="solicitante-email" class="uk-form-label required">Email do solicitante</label>
          <input id="solicitante-email" type="email" class="uk-input" required v-model="info.solicitanteEmail" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="solicitante-tel" class="uk-form-label required">Telefone do solicitante</label>
          <input id="solicitante-tel" type="text" class="uk-input" required v-model="info.solicitanteTel" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="solicitante-adicional-nome" class="uk-form-label">Nome do solicitante adicional</label>
          <input id="solicitante-adicional-nome" type="text" class="uk-input" v-model="info.solicitanteAdicionalNome" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="solicitante-adicional-email" class="uk-form-label">Email do solicitante adicional</label>
          <input id="solicitante-adicional-email" type="email" class="uk-input" v-model="info.solicitanteAdicionalEmail" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="solicitante-adicional-tel" class="uk-form-label">Telefone do solicitante ad</label>
          <input id="solicitante-adicional-tel" type="text" class="uk-input" v-model="info.solicitanteAdicionalTel" @input="updateDetalhes" />
        </div>
      </div><!-- .grid -->

      <hr>

      <h2 class="uk-h4 uk-margin-small">Dados da área responsável</h2>
      <div uk-grid>
        <div class="uk-width-1-2">
          <label for="coordenacao" class="uk-form-label required">Coordenacao</label>
          <input id="coordenacao" type="text" class="uk-input" required v-model="info.coordenacao" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-2">
          <label for="gerencia" class="uk-form-label required">Gerencia</label>
          <input id="gerencia" type="text" class="uk-input" required v-model="info.gerencia" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-2">
          <label for="grupo-aprovador1" class="uk-form-label required">Grupo aprovador 1</label>
          <input id="grupo-aprovador1" type="text" class="uk-input" required v-model="info.grupoAprovador1" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-2">
          <label for="grupo-aprovador2" class="uk-form-label">Grupo aprovador 2</label>
          <input id="grupo-aprovador2" type="text" class="uk-input" v-model="info.grupoAprovador2" @input="updateDetalhes" />
        </div>
      </div><!-- .grid -->

      <hr>

      <h2 class="uk-h4 uk-margin-small">Dados do produto</h2>
      <div uk-grid>
        <div class="uk-width-1-3">
          <label for="sof-nome" class="uk-form-label required">Nome do software</label>
          <input id="sof-nome" type="text" class="uk-input" required v-model="info.sofNome" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-versao" class="uk-form-label required">Versão</label>
          <input id="sof-versao" type="text" class="uk-input" required v-model="info.sofVersao" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-arquitetura" class="uk-form-label required">Arquitetura</label>
          <select id="sof-arquitetura" class="uk-select" v-model="info.sofArquitetura" @change="updateDetalhes">
            <option>64bits</option>
            <option>32bits</option>
            <option>64bits/32bits</option>
          </select>
        </div>

        <div class="uk-width-1-3">
          <label for="sof-descricao" class="uk-form-label required">Descrição</label>
          <input id="sof-descricao" class="uk-input" required v-model="info.sofDescricao" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-fabricante-nome" class="uk-form-label required">Fabricante</label>
          <input id="sof-fabricante-nome" type="text" class="uk-input" required v-model="info.sofFabricanteNome" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-fabricante-email" class="uk-form-label">Email</label>
          <input id="sof-fabricante-email" type="email" class="uk-input" v-model="info.sofFabricanteEmail" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-fabricante-site" class="uk-form-label">Site</label>
          <input id="sof-fabricante-site" type="text" class="uk-input" v-model="info.sofFabricanteSite" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-fabricante-tel" class="uk-form-label">Telefone</label>
          <input id="sof-fabricante-tel" type="text" class="uk-input" v-model="info.sofFabricanteTel" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-tamanho-setup" class="uk-form-label required">Tamanho do instalador (MB)</label>
          <input id="sof-tamanho-setup" type="text" class="uk-input" required v-model="info.sofTamanhoSetup" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-tamanho-executavel" class="uk-form-label required">Tamanho do executavel (MB)</label>
          <input id="sof-tamanho-executavel" type="text" class="uk-input" required v-model="info.sofTamanhoInstalado" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-tamanho-disco" class="uk-form-label required">Tamanho em disco (MB)</label>
          <input id="sof-tamanho-disco" type="text" class="uk-input" required v-model="info.sofTamanhoDisco" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-instalacao-comando" class="uk-form-label required">Comando de instalação</label>
          <input id="sof-instalacao-comando" type="text" class="uk-input" required v-model="info.sofInstalacaoComando" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-instalacao-parametro" class="uk-form-label required">Parâmetro de instalação</label>
          <input id="sof-instalacao-parametro" type="text" class="uk-input" required v-model="info.sofInstalacaoParamentro" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-desinstalacao-comando" class="uk-form-label required">Comando de desinstalação</label>
          <input id="sof-desinstalacao-comando" type="text" class="uk-input" required v-model="info.sofDesinstalacaoComando" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-desinstalacao-parametro" class="uk-form-label required">Parâmetro de desinstalação</label>
          <input id="sof-desinstalacao-parametro" type="text" class="uk-input" required v-model="info.sofDesinstalacaoParamentro" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-display-name" class="uk-form-label required">Display name</label>
          <input id="sof-display-name" type="text" class="uk-input" required v-model="info.sofDisplayName" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-display-version" class="uk-form-label required">Display version</label>
          <input id="sof-display-version" type="text" class="uk-input" required v-model="info.sofDisplayVersion" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-exe-nome" class="uk-form-label required">Nome do executável</label>
          <input id="sof-exe-nome" type="text" class="uk-input" required v-model="info.sofExeNome" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-chave-registro" class="uk-form-label required">Chave de registro</label>
          <input id="sof-chave-registro" type="text" class="uk-input" required v-model="info.sofChaveRegistro" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-installer" class="uk-form-label required">Installer</label>
          <input id="sof-installer" type="text" class="uk-input" required v-model="info.sofInstaller" @input="updateDetalhes" />
        </div>
      </div><!-- .grid -->

      <hr>

      <h2 class="uk-h4 uk-margin-small">Dados de pré-requisitos</h2>
      <div uk-grid>
        <div class="uk-width-1-2">
          <label for="sof-inclusos" class="uk-form-label">Pacotes inclusos</label>
          <input id="sof-inclusos" type="text" class="uk-input" v-model="info.sofInclusos" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-2">
          <label for="sof-prereq" class="uk-form-label">Pré-requisitos</label>
          <input id="sof-prereq" type="text" class="uk-input" v-model="info.sofPreReq" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-2">
          <label for="sof-prereq-har-nome" class="uk-form-label">Pré-requisitos de hardware</label>
          <input id="sof-prereq-har-nome" type="text" class="uk-input" v-model="info.sofPreReqHar" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-2">
          <label for="sof-prereq-har-desc" class="uk-form-label">Descrição</label>
          <input id="sof-prereq-har-desc" type="text" class="uk-input" v-model="info.sofPreReqHarDesc" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-2">
          <label for="sof-prereq-rede-nome" class="uk-form-label">Pré-requisitos de rede</label>
          <input id="sof-prereq-rede-nome" type="text" class="uk-input" v-model="info.sofPreReqRede" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-2">
          <label for="sof-prereq-rede-descricao" class="uk-form-label">Descrição</label>
          <input id="sof-prereq-rede-descricao" type="text" class="uk-input" v-model="info.sofPreReqRedeDesc" @input="updateDetalhes" />
        </div>
      </div><!-- .grid -->

      <hr>

      <h2 class="uk-h4 uk-margin-small">Dados do sistema operacional</h2>
      <div uk-grid>
        <div class="uk-width-1-3">
          <label for="so-nome" class="uk-form-label required">Nome</label>
          <input id="so-nome" type="text" class="uk-input" required v-model="info.soNome" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="so-versao" class="uk-form-label required">Versão</label>
          <input id="so-versao" type="text" class="uk-input" required v-model="info.soVersao" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="so-compatibilidade" class="uk-form-label required">Compatibilidade</label>
          <select id="so-compatibilidade" class="uk-select" v-model="info.soCompatibilidade" @change="updateDetalhes">
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div><!-- .grid -->

      <hr>

      <h2 class="uk-h4 uk-margin-small">Dados do pacote</h2>
      <div uk-grid>
        <div class="uk-width-1-3">
          <label for="sof-sccm-id" class="uk-form-label required">ID central de software</label>
          <input id="sof-sccm-id" type="text" class="uk-input" required v-model="info.sofSccmId" @input="updateDetalhes" />
        </div>

        <div class="uk-width-1-3">
          <label for="sof-nivel-permissao" class="uk-form-label required">Nivel de permissao</label>
          <select id="sof-nivel-permissao" class="uk-select" v-model="info.sofNivelPermissao" @change="updateDetalhes">
            <option>Administrador</option>
            <option>Usuário Avançado</option>
          </select>
        </div>

        <div class="uk-width-1-3">
          <label for="sof-req-reiniciar" class="uk-form-label required">Reiniciar?</label>
          <select id="sof-req-reiniciar" class="uk-select" v-model="info.sofReqReiniciar" @change="updateDetalhes">
            <option>Não</option>
            <option>Sim</option>
          </select>
        </div>
      </div><!-- .grid -->

      <hr>

      <h2 class="uk-h4 uk-margin-small">Descrição sobre incompatibilidades</h2>
      <div uk-grid>
        <div class="uk-width-1-expand">
          <label for="sof-descricao-incompatibilidades" class="uk-form-label">Descrição</label>
          <textarea id="sof-descricao-incompatibilidades" class="uk-textarea" v-model="info.sofDescricaoIncompatibilidades" @input="updateDetalhes"></textarea>
        </div>
      </div><!-- .grid -->

      <ul class="uk-tab" data-uk-tab="{connect:'#tipo-arquivo'}">
        <li><a href="#">Info.txt</a></li>
        <li><a href="#">Info.au3</a></li>
      </ul>

      <div id="tipo-arquivo" class="uk-switcher">
        <div class="tab-content1 uk-width-expand">
          <textarea id="sof-arquivo-info" class="uk-textarea" rows="22" style="height: auto" v-model="info.sofArquivoInfo" @input="updateDetalhes"></textarea>
        </div><!-- .tab-content1 -->

        <div class="tab-content2 uk-width-expand">
          <textarea id="sof-arquivo-info-au3" class="uk-textarea" rows="22" style="height: auto" v-model="info.sofArquivoInfoAu3" @input="updateDetalhes"></textarea>
        </div><!-- .tab-content2 -->
      </div><!-- .uk-switcher -->
    </div>

    <div class="uk-margin-top uk-text-right">
      <button id="limpar-campos" class="uk-button uk-button-primary" @click.prevent="limparCampos">Limpar</button>
      <button class="uk-button uk-button-primary uk-margin-small-left" @click.prevent="goTo('top')"><span uk-icon="icon:triangle-up"></span></button>
    </div>
  </div>
</template>

<script>
import Fraseologia from '~/plugins/fraseologia.js';
import DatePick from 'vue-date-pick';

export default {
  layout: 'fraseologia',
  head() {
    return {
      titleTemplate: `%s - ${this.resumo}`,
    };
  },
  components: {
    DatePick,
  },

  data() {
    return this.initialState();
  },

  mounted() {
    Fraseologia.focusFirst();
    Fraseologia.selectForm();
    Fraseologia.onPasteFocusNext();

    // Adiciona margem superior se não houver elemento nav
    if (document.querySelector('nav') === null) {
      document.querySelector('.main').style.marginTop = '32px';
    }

    // Formato da data
    this.info.dataInicioHtml = Fraseologia.todayHtml(this.info.dataInicio);
    this.info.dataTerminoHtml = Fraseologia.todayHtml(this.info.dataTermino);

    // Pega conteúdo dos arquivos
    this.info.sofArquivoInfo = this.getArquivoInfo();
    this.info.sofArquivoInfoAu3 = this.convertArquivoInfoToAu3(this.info.sofArquivoInfo);

    // Storages
    // if (localStorage.getItem('sofAmbiente')) { this.info.sofAmbiente = localStorage.getItem('sofAmbiente'); }

    for (let key in this.info) {
      if (localStorage.getItem(key)) { this.info[key] = localStorage.getItem(key); }
    }

  },
  methods: {
    initialState() {
      return {
        resumo: 'Gerador de arquivos',

        info: {
          // Dados gerais
          sofSolicitacaoNumero: '',
          sofAmbiente: 'Itaú-Unibanco',
          sofConclusaoCertificacao: 'Certificado',
          sofTipoLicenca: 'Corporativo',
          dataInicio: '',
          dataInicioHtml: '',
          dataTermino: '',
          dataTerminoHtml: '',

          // Dados do analista
          analistaNome: '',
          analistaEmail: '',
          revisorNome: '',

          // Dados do solicitante
          solicitanteNome: '',
          solicitanteEmail: '',
          solicitanteTel: '',
          solicitanteAdicionalNome: '',
          solicitanteAdicionalEmail: '',
          solicitanteAdicionalTel: '',

          // Dados da área responsável
          coordenacao: '',
          gerencia: '',
          grupoAprovador1: '',
          grupoAprovador2: '',

          // Dados do produto
          sofNome: '',
          sofVersao: '',
          sofEdicao: '1.0',
          sofArquitetura: '64bits',
          sofDescricao: '',
          sofFabricanteNome: '',
          sofFabricanteSite: '',
          sofFabricanteEmail: '',
          sofFabricanteTel: '',
          sofTamanhoSetup: '0.000',
          sofTamanhoInstalado: '0.000',
          sofTamanhoDisco: '0.000',
          sofInstalacaoComando: '',
          sofInstalacaoParamentro: '',
          sofDesinstalacaoComando: '',
          sofDesinstalacaoParamentro: '',
          sofDisplayName: '',
          sofDisplayVersion: '',
          sofExeNome: '',
          sofExeCaminho: '',
          sofExeCaminhoCompleto: '',
          sofChaveRegistro: '',
          sofInstaller: '',
          sofArquivoAu3: '',

          // Pré-requisitos
          sofInclusos: 'Nenhum',
          sofPreReq: 'Nenhum',

          // Pré-requisitos de hardware
          sofPreReqHar: '',
          sofPreReqHarDesc: '',

          // Pré-requisitos de rede
          sofPreReqRede: '',
          sofPreReqRedeDesc: '',

          // Dados do sistema operacional
          soNome: 'Windows 10',
          soVersao: '20H2',
          soCompatibilidade: 'Sim',

          // Requerimento do pacote
          sofMapeamento: '',
          sofRepositorio: '',
          sofRepositorioExecutavel: '',
          sofDocVersao: '1.0',
          sofDocRepositorio: '',
          sofDocArquivo: '',
          sofSccmId: '',
          sofSccmLink: '',
          sofNivelPermissao: 'Administrador',
          sofPacoteParamInstalacao: '-silentinstall - Executar em modo silencioso.',
          sofPacoteParamDesinstalacao: '-showuninstall - Desinstalar aplicação.',
          sofReqReiniciar: 'Não',

          // Descrição de imcompatibilidades
          sofDescricaoIncompatibilidades: '',

          // Conteúdo dos arquivos
          sofArquivoInfo: '',
          sofArquivoInfoAu3: '',
        },

      }
    },

    // Ir ao final e início da página
    goTo(location) {
      if (location == 'bottom') {
        window.scrollTo({ top: document.querySelector('.main').offsetHeight, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },

    // Reseta todos os campos
    resetState() {
      Object.assign(this.$data, this.initialState());
    },

    getCaminho(sofArquitetura) {
      let sofExeCaminho = '';

      if (sofArquitetura === '64bits') {
        sofExeCaminho = 'C:\\Program Files';
      } else {
        sofExeCaminho = 'C:\\Program Files (x86)';
      }
      return sofExeCaminho;
    },

    getCaminhoCompletoExe(sofArquitetura, sofExeCaminho, sofExeNome) {
      if (sofArquitetura === '64bits') {
        sofExeCaminho = 'C:\\Program Files\\';
      } else {
        sofExeCaminho = 'C:\\Program Files (x86)\\';
      }
      return `${sofExeCaminho}${sofExeNome}.exe`;
    },

    getMapeamento(sofAmbiente, sofTipoLicenca) {
      let caminhoItau = '\\\\fswcorp\\cto\\SASM';
      let caminhoRede = '\\\\172.20.201.93\\Golddisk\\Fieldservice JK';
      let mapeamento = '';

      if ((sofAmbiente === 'Itaú-Unibanco' || sofAmbiente === 'IBBA') && sofTipoLicenca === 'Corporativo') {
        mapeamento = `${caminhoItau}\\SOFTWARE_CORPORATIVO`;
      } else if ((sofAmbiente === 'Itaú-Unibanco' || sofAmbiente === 'IBBA') && sofTipoLicenca === 'Restrito') {
        mapeamento = `${caminhoItau}\\SOFTWARE_RESTRITO`;
      } else if ((sofAmbiente === 'Itaú-Unibanco' || sofAmbiente === 'IBBA') && tipoLicenca === 'Licença') {
        mapeamento = `${caminhoItau}\\SOFTWARE_LICENCIADO`;

      } else if (sofAmbiente === 'Rede' && sofTipoLicenca === 'Corporativo') {
        mapeamento = `${caminhoRede}\\CORPORATIVO`;
      } else if (sofAmbiente === 'Rede' && sofTipoLicenca === 'Restrito') {
        mapeamento = `${caminhoRede}\\RESTRITO`;
      } else if (sofAmbiente === 'Rede' && tipoLicenca === 'Licença') {
        mapeamento = `${caminhoRede}\\LICENCIADO`;
      }

      return mapeamento;
    },

    getRepositorio(sofNome, sofVersao) {
      return `N:\\${sofNome}\\${sofVersao}\\Instalador`;
    },

    getRepositorioExecutavel(sofAmbiente, sofMapeamento, sofNome, sofVersao) {
      let repositorio = `${sofMapeamento}\\Instalador\\${sofNome}\\${sofVersao}`;
      return repositorio;
    },

    getSccmLink(sofSccmId) {
      return `systemcenter:${sofSccmId}`;
    },

    getDocRepositorio(sofNome, sofVersao) {
      return `\\\\fswcorp\\cto\\SASM\\DOCUMENTACAO_TECNICA\\Software\\LAUDO DE CERTIFICACAO\\${sofNome}\\${sofVersao}`;
    },

    getDocArquivo(sofNome, sofVersao) {
      return `\\\\fswcorp\\cto\\SASM\\DOCUMENTACAO_TECNICA\\Software\\LAUDO DE CERTIFICACAO\\${sofNome}\\${sofVersao}\\Documentação Técnica - ${sofNome} ${sofVersao}.pdf`;
    },

    getArquivoAu3(sofNome, sofVersao) {
      return `${sofNome} ${sofVersao}.au3`;
    },

    convertArquivoInfoToAu3(content) {
      let reSearch = /#/g;
      let reReplace = ';';
      content = content.replace(reSearch, reReplace);

      reSearch = /(.*)(?:: )(.*)/g;
      reReplace = "$$info.Add('$1', '$2')";
      content = content.replace(reSearch, reReplace);

      reSearch = /; Dados gerais/g;
      reReplace = "; Cria dicionário\n$info = ObjCreate('Scripting.Dictionary')\n\n; Dados gerais"
      content = content.replace(reSearch, reReplace);
      return content;
    },

    limparCampos() {
      querySelectorAll('input[type="text"]').value = '';
    },

    updateDetalhes() {
      // Une variáveis
      this.info.sofExeCaminho = this.getCaminho(this.info.sofArquitetura);
      this.info.sofExeCaminhoCompleto = this.getCaminhoCompletoExe(this.info.sofArquitetura, this.info.sofExeCaminho, this.info.sofExeNome);
      this.info.sofMapeamento = this.getMapeamento(this.info.sofAmbiente, this.info.sofTipoLicenca);
      this.info.sofRepositorio = this.getRepositorio(this.info.sofNome, this.info.sofVersao);
      this.info.sofRepositorioExecutavel = this.getRepositorioExecutavel(this.info.sofAmbiente, this.info.sofMapeamento, this.info.sofNome, this.info.sofVersao);
      this.info.sofSccmLink = this.getSccmLink(this.info.sofSccmId);
      this.info.sofDocRepositorio = this.getDocRepositorio(this.info.sofNome, this.info.sofVersao);
      this.info.sofDocArquivo = this.getDocArquivo(this.info.sofNome, this.info.sofVersao);
      this.info.sofArquivoAu3 = this.getArquivoAu3(this.info.sofNome, this.info.sofVersao);

      // Formato da data
      this.info.dataInicioHtml = Fraseologia.todayHtml(this.info.dataInicio);
      this.info.dataTerminoHtml = Fraseologia.todayHtml(this.info.dataTermino);

      // Pega conteúdo dos arquivos
      this.info.sofArquivoInfo = this.getArquivoInfo();
      this.info.sofArquivoInfoAu3 = this.convertArquivoInfoToAu3(this.info.sofArquivoInfo);

      // Storages
      // localStorage.setItem('sofAmbiente', this.info.sofAmbiente);

      for (let key in this.info) {
        localStorage.setItem(key, this.info[key]);
      }
    },

    getArquivoInfo() {
      let arquivoInfoContent = `# ------------------------------------------------------------------------------
# Arquivo de informações do pacote
# ------------------------------------------------------------------------------

# Dados gerais
solicitacao_numero: ${this.info.sofSolicitacaoNumero}
ambiente: ${this.info.sofAmbiente}
conclusao_certificacao: ${this.info.sofConclusaoCertificacao}
tipo_licenca: ${this.info.sofTipoLicenca}
data_inicio: ${this.info.dataInicioHtml}
data_termino: ${this.info.dataTerminoHtml}

# Dados do analista
analista_nome: ${this.info.analistaNome}
analista_email: ${this.info.analistaEmail}
revisor_nome: ${this.info.revisorNome}

# Dados do solicitante
solicitante_nome: ${this.info.solicitanteNome}
solicitante_email: ${this.info.solicitanteEmail}
solicitante_tel: ${this.info.solicitanteTel}
solicitante_adicional_nome: ${this.info.solicitanteAdicionalNome}
solicitante_adicional_email: ${this.info.solicitanteAdicionalEmail}
solicitante_adicional_tel: ${this.info.solicitanteAdicionalTel}

# Dados da área responsável
coordenacao: ${this.info.coordenacao}
gerencia: ${this.info.gerencia}
grupo_aprovador1: ${this.info.grupoAprovador1}
grupo_aprovador2: ${this.info.grupoAprovador2}

# Dados do produto
sof_nome: ${this.info.sofNome}
sof_versao: ${this.info.sofVersao}
sof_edicao: ${this.info.sofEdicao}
sof_arquitetura: ${this.info.sofArquitetura}
sof_descricao: ${this.info.sofDescricao}
sof_fabricante_nome: ${this.info.sofFabricanteNome}
sof_fabricante_site: ${this.info.sofFabricanteSite}
sof_fabricante_email: ${this.info.sofFabricanteEmail}
sof_fabricante_tel: ${this.info.sofFabricanteTel}
sof_tamanho_setup: ${this.info.sofTamanhoSetup}
sof_tamanho_instalado: ${this.info.sofTamanhoInstalado}
sof_tamanho_disco: ${this.info.sofTamanhoDisco}
sof_instalacao_comando: ${this.info.sofInstalacaoComando}
sof_instalacao_parametro: ${this.info.sofInstalacaoParamentro}
sof_desinstalacao_comando: ${this.info.sofDesinstalacaoComando}
sof_desinstalacao_parametro: ${this.info.sofDesinstalacaoParamentro}
sof_display_name: ${this.info.sofDisplayName}
sof_display_version: ${this.info.sofDisplayVersion}
sof_executavel_nome: ${this.info.sofExeNome}
sof_executavel_caminho: ${this.info.sofExeCaminho}
sof_executavel_caminho_completo: ${this.info.sofExeCaminhoCompleto}
sof_chave_registro: ${this.info.sofChaveRegistro}
sof_installer: ${this.info.sofInstaller}
sof_arquivo_au3: ${this.info.sofArquivoAu3}

# Pré-requisitos
sof_inclusos: ${this.info.sofInclusos}
sof_pre_requisitos: ${this.info.sofPreReq}
sof_pre_requisitos_hardware: ${this.info.sofPreReqHar}
sof_pre_requisitos_hardware_descricao: ${this.info.sofPreReqHarDesc}
sof_pre_requisitos_rede: ${this.info.sofPreReqRede}
sof_pre_requisitos_rede_descricao: ${this.info.sofPreReqRedeDesc}

# Dados do S.O
so_nome: ${this.info.soNome}
so_versao: ${this.info.soVersao}
so_compatibilidade: ${this.info.soCompatibilidade}

# Dados do pacote
sof_mapeamento: ${this.info.sofMapeamento}
sof_repositorio: ${this.info.sofRepositorio}
sof_repositorio_executavel: ${this.info.sofRepositorioExecutavel}
sof_doc_versao: ${this.info.sofDocVersao}
sof_doc_repositorio: ${this.info.sofDocRepositorio}
sof_doc_arquivo: ${this.info.sofDocArquivo}
sof_sccm_id: ${this.info.sofSccmId}
sof_sccm_link: ${this.info.sofSccmLink}
sof_nivel_permissao: ${this.info.sofNivelPermissao}
sof_pacote_paramento_instalacao: ${this.info.sofPacoteParamInstalacao}
sof_pacote_paramento_desinstalacao: ${this.info.sofPacoteParamDesinstalacao}
sof_necessario_reiniciar: ${this.info.sofReqReiniciar}
relatorio_incompatibilidades: ${this.info.sofDescricaoIncompatibilidades}`;

      return arquivoInfoContent;
    },
  },
};
</script>
