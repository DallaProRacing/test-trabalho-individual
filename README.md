# 🏍️ Equipe DallaPro Racing - Site Oficial

Site oficial da Equipe DallaPro Racing, especializada em competições de Enduro FIM. O projeto apresenta informações sobre a equipe, piloto, competições e patrocinadores.

## 🌐 Demo

**Site ao vivo:** [https://dallaproracing.github.io/test-trabalho-individual/]
## 📋 Funcionalidades

### 🏠 Página Principal
- **Hero Section** com apresentação da equipe
- **Competições** - Cards informativos sobre as principais competições
- **Próximas Etapas** - Calendário de eventos futuros
- **Patrocinadores** - Showcase dos apoiadores da equipe
- **Perfil do Piloto** - Informações sobre Ruan Dalla Rosa
- **Formulário de Contato** - Sistema de envio de emails via EmailJS

### 👤 Página de Perfil do Piloto
- **Informações Pessoais** - Biografia e dados do piloto
- **Estatísticas** - Números de provas, pódios e campeonatos
- **Resultados por Competição** - Sistema de abas com resultados detalhados
- **Galeria de Fotos** - Imagens das competições
- **Equipamentos** - Detalhes da moto e equipamentos utilizados
- **Redes Sociais** - Links para Instagram e outras plataformas

### 🏆 Páginas de Competições
- **Gaúcho de Enduro FIM** - Resultados e classificações
- **Sul Brasileiro de Enduro FIM** - Histórico de participações
- **Copa Meio Oeste** - Detalhes das etapas
- **Galeria de Fotos** - Sistema de upload e visualização
- **Classificação Geral** - Tabelas de pontuação

### 📧 Sistema de Contato
- **Validação de Formulário** - Verificação de campos obrigatórios
- **Envio via EmailJS** - Sistema sem backend para envio de emails
- **Feedback Visual** - Notificações de sucesso/erro
- **Responsividade** - Funciona em todos os dispositivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com:
  - CSS Grid e Flexbox
  - Variáveis CSS (Custom Properties)
  - Animações e transições
  - Design responsivo
- **JavaScript ES6+** - Interatividade e funcionalidades:
  - Manipulação do DOM
  - Validação de formulários
  - Sistema de abas
  - Integração com EmailJS

### Serviços Externos
- **EmailJS** - Envio de emails sem backend
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia

### Ferramentas de Desenvolvimento
- **Git** - Controle de versão
- **GitHub Pages** - Hospedagem gratuita
- **VS Code** - Editor de código

## 📁 Estrutura do Projeto

```
# 🏍️ Equipe DallaPro Racing - Site Oficial

Site oficial da Equipe DallaPro Racing, especializada em competições de Enduro FIM. O projeto apresenta informações sobre a equipe, piloto, competições e patrocinadores.

## 🌐 Demo

**Site ao vivo:** [https://dallaproracing.github.io/test-trabalho-individual/]

## 📋 Funcionalidades

### 🏠 Página Principal (index.html)
- **Hero Section** com apresentação da equipe
- **Competições** - Cards informativos sobre as principais competições
- **Próximas Etapas** - Calendário de eventos futuros
- **Patrocinadores** - Showcase dos apoiadores da equipe
- **Perfil do Piloto** - Informações sobre Ruan Dalla Rosa
- **Formulário de Contato** - Sistema de envio de emails via EmailJS

### 👤 Página de Perfil do Piloto (perfil.html)
- **Informações Pessoais** - Biografia e dados do piloto
- **Estatísticas** - Números de provas, pódios e campeonatos
- **Resultados por Competição** - Sistema de abas com resultados detalhados
- **Galeria de Fotos** - Imagens das competições
- **Equipamentos** - Detalhes da moto e equipamentos utilizados
- **Redes Sociais** - Links para Instagram e outras plataformas

### 🏆 Páginas de Competições
- **gaucho-enduro.html** - Gaúcho de Enduro FIM - Resultados e classificações
- **sul-brasileiro.html** - Sul Brasileiro de Enduro FIM - Histórico de participações
- **copa-meio-oeste.html** - Copa Meio Oeste - Detalhes das etapas
- **Galeria de Fotos** - Sistema de upload e visualização
- **Classificação Geral** - Tabelas de pontuação

### 📧 Sistema de Contato
- **Validação de Formulário** - Verificação de campos obrigatórios
- **Envio via EmailJS** - Sistema sem backend para envio de emails
- **Feedback Visual** - Notificações de sucesso/erro
- **Responsividade** - Funciona em todos os dispositivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com:
  - CSS Grid e Flexbox
  - Variáveis CSS (Custom Properties)
  - Animações e transições
  - Design responsivo
- **JavaScript ES6+** - Interatividade e funcionalidades:
  - Manipulação do DOM
  - Validação de formulários
  - Sistema de abas
  - Integração com EmailJS

### Serviços Externos
- **EmailJS** - Envio de emails sem backend
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia

### Ferramentas de Desenvolvimento
- **Git** - Controle de versão
- **GitHub Pages** - Hospedagem gratuita
- **VS Code** - Editor de código

## 📁 Estrutura do Projeto

```
equipe-dallapro-racing/
├── src/
│   ├── assets/                   # Pasta principal de recursos
│   │   ├── fonts/               # Fontes customizadas
│   │   ├── images/              # Todas as imagens do projeto
│   │   │   ├── image-copa/      # Imagens da Copa Meio Oeste
│   │   │   ├── image-gaucho/    # Imagens do Gaúcho de Enduro
│   │   │   ├── image-sul/       # Imagens do Sul Brasileiro
│   │   │   ├── competition-placeholder-CopaMeio.jpg
│   │   │   ├── competition-placeholder-Gaucho.jpg
│   │   │   ├── competition-placeholder.jpg
│   │   │   ├── hero-placeholder.jpg
│   │   │   ├── hero-placeholder1.jpg
│   │   │   ├── hero-placeholder2.jpg
│   │   │   ├── hero-placeholder3.jpg
│   │   │   ├── logo-placeholder.png
│   │   │   ├── pilot-placeholder.jpg
│   │   │   ├── sponsor-placeholder-AutoCenter.png
│   │   │   ├── sponsor-placeholder-EletroBarra.png
│   │   │   ├── sponsor-placeholder-FazendaDallaRosa.png
│   │   │   ├── sponsor-placeholder-FornaRacing.png
│   │   │   ├── sponsor-placeholder-Minella.png
│   │   │   ├── sponsor-placeholder-Posto.png
│   │   │   ├── sponsor-placeholder-Prefeitura.png
│   │   │   ├── sponsor-placeholder-studio.png
│   │   │   └── sponsor-placeholder.png
│   │   └── js/
│   │       └── contact-form.js  # Script do formulário de contato
│   ├── styles/                  # Arquivos CSS
│   │   ├── competition-details.css  # Estilos das páginas de competição
│   │   ├── contact-form.css     # Estilos do formulário
│   │   ├── fonts.css            # Importação de fontes
│   │   ├── main.css             # Estilos principais
│   │   ├── profile.css          # Estilos da página de perfil
│   │   ├── reset.css            # Reset CSS
│   │   ├── responsive.css       # Media queries
│   │   └── root.css             # Variáveis CSS
│   ├── index.html               # Página principal
│   ├── perfil.html              # Página do piloto
│   ├── gaucho-enduro.html       # Página Gaúcho de Enduro FIM
│   ├── sul-brasileiro.html      # Página Sul Brasileiro de Enduro FIM
│   └── copa-meio-oeste.html     # Página Copa Meio Oeste
├── .gitignore                   # Arquivos ignorados pelo Git
├── LICENSE                      # Licença do projeto
└── README.md                    # Documentação
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno
- Conexão com a internet (para fontes e EmailJS)

### Instalação Local
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/uri-erechim/trabalho-individual-t1-DallaProRacing.git
   cd equipe-dallapro-racing
   ```

2. **Abra o projeto:**
   - Abra o arquivo `src/index.html` em seu navegador
   - Ou use um servidor local como Live Server (VS Code)

### Configuração do EmailJS
Para que o formulário de contato funcione, você precisa configurar o EmailJS:

1. **Crie uma conta em [EmailJS](https://www.emailjs.com/)**

2. **Configure um serviço de email (Gmail recomendado)**

3. **Crie um template de email com as variáveis:**
   - `{{from_name}}` - Nome do remetente
   - `{{from_email}}` - Email do remetente
   - `{{message}}` - Mensagem
   - `{{to_email}}` - Email de destino

4. **Obtenha suas credenciais:**
   - Public Key (Account → General)
   - Service ID (Email Services)
   - Template ID (Email Templates)

5. **Atualize o arquivo `src/assets/js/contact-form.js`:**
   \