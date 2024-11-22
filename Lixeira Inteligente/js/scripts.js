// Seleciona os itens clicados
var menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
);

// Expandir o menu
var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
});


// Gráfico de Distância

// Gráfico de Distância
const distanceChartOptions = {
  series: [
    {
      name: 'Distância',
      data: [50, 40, 30, 20, 15, 5, 0], // Exemplos de dados de distância
    },
  ],
  chart: {
    type: 'line', // Gráfico de linha
    height: 250,
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1'],
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  xaxis: {
    categories: ['0s', '1s', '2s', '3s', '4s', '5s', '6s'], // Tempo (em segundos)
  },
  yaxis: {
    title: {
      text: 'Distância (cm)', // Unidade de medida (cm ou metros)
      style: {
        color: '#000000FF', // Cor do título do eixo Y
      },
    },
    labels: {
      style: {
        colors: '#000000FF', // Cor do texto do eixo Y
      },
    },
    min: 0,
    max: 50, // Valor máximo para a distância
  },
  markers: {
    size: 4,
    hover: {
      sizeOffset: 6,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: (value) => `${value} cm`,
    },
  },
  annotations: {
    yaxis: [
      {
        y: 10, // Distância crítica para indicar "cheio"
        borderColor: '#ff0000', // Cor da linha de alerta
        label: {
          text: 'Recipiente Cheio',
          style: {
            color: '#fff',
            background: '#C22C2CFF',
          },
        },
      },
    ],
  },
};

// Gráfico de Status
const statusChartOptions = {
  series: [
    {
      name: 'Status',
      data: [0, 0, 0, 1, 1, 1, 1], // 0 = Não cheio, 1 = Cheio
    },
  ],
  chart: {
    type: 'bar', // Gráfico de barras
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#ff0000'], // Cor vermelha para "cheio"
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: true, // Barra horizontal para indicar status
    },
  },
  xaxis: {
    categories: ['0s', '1s', '2s', '3s', '4s', '5s', '6s'], // Tempo (em segundos)
  },
  yaxis: {
    title: {
      text: 'Status',
      style: {
        color: '#000000FF', // Cor do título do eixo Y
      },
    },
    labels: {
      style: {
        colors: '#000000FF', // Cor do texto do eixo Y
      },
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: (value) => (value === 1 ? 'Recipiente Cheio' : 'Recipiente Vazio'),
    },
  },
};

const distanceChart = new ApexCharts(
  document.querySelector('#distance-chart'),
  distanceChartOptions
);
distanceChart.render();

const statusChart = new ApexCharts(
  document.querySelector('#status-chart'),
  statusChartOptions
);
statusChart.render();

// Script para controlar as notificações
document.getElementById("btn-notifications").addEventListener("click", function() {
  var notificationBar = document.getElementById("notification-bar");
  // Alterna a exibição das notificações
  if (notificationBar.style.display === "none" || notificationBar.style.display === "") {
    notificationBar.style.display = "block";
  } else {
    notificationBar.style.display = "none";
  }
});
