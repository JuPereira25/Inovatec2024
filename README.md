# 🗑️ SmartBin - Sistema de Lixeiras Inteligentes

> Dashboard para gerenciamento inteligente de coleta de resíduos urbanos

## Sobre o Projeto

O **SmartBin** é um sistema de gerenciamento de lixeiras inteligentes que utiliza sensores IoT para monitorar o nível de ocupação em tempo real. 
O dashboard permite que operadores organizem coletas de forma eficiente, priorizando lixeiras cheias e otimizando rotas para caminhões.

### Principais Funcionalidades

- **Dashboard em Tempo Real** - KPIs e métricas de lixeiras
- **Mapa Interativo** - Visualização geográfica com rotas otimizadas
- **Sistema de Prioridades** - Classificação automática por urgência
- **Design Moderno** - Interface intuitiva com Material Design

## Como Usar

### Instalação Rápida

1. **Clone o projeto**
   ```bash
   git clone https://github.com/JuPereira25/Inovatec2024.git
   cd smartbin
   ```

## Arquitetura

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Sensores IoT  │    │   Dashboard     │    │   Caminhões     │
│   nas Lixeiras  │───▶│   SmartBin      │───▶│   de Coleta     │
│                 │    │   (Frontend)    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

##  Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Mapas**: Leaflet.js + OpenStreetMap
- **Layout**: CSS Grid + Flexbox
- **Ícones**: Material Symbols
- **Tipografia**: Google Fonts (Poppins)

## Estrutura do Projeto

```
smartbin/
├── index.html          # Página principal
├── styles.css          # Estilos e layout
├── script.js           # Lógica JavaScript
├── assets/             # Recursos estáticos
│   ├──  logo.svg        # Logo do sistema
│   ├──  perfil.png      # Imagem de perfil
├──  README.md           # Esta documentação
└── 🔧 DOCUMENTACAO_TECNICA.md # Docs técnicas
```

## Funcionalidades

### Dashboard Principal
- **KPIs em Tempo Real**: Contadores de lixeiras críticas, cheias e caminhões
- **Mapa Interativo**: Visualização de rotas com sistema de cores
- **Lista de Prioridades**: Organização por urgência de coleta

### Sistema de Mapeamento
- **Coordenadas**: Manaus, AM (configurável)
- **Rotas**: Linhas coloridas para diferentes prioridades
- **Marcadores**: Pontos específicos para cada lixeira
- **Controles**: Zoom e navegação integrados
   ```

## Contribuição

1. **Fork** o projeto
2. **Crie** uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/NovaFuncionalidade`)
5. **Abra** um Pull Request

## Documentação

- **[Documentação Técnica](DOCUMENTACAO_TECNICA.md)** - Detalhes de implementação
- **[Leaflet.js](https://leafletjs.com/reference.html)** - Biblioteca de mapas
- **[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)** - Layout moderno
- **[Material Design](https://material.io/design)** - Sistema de design

## Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

- **Email**: julianapereirart@gmail.com
