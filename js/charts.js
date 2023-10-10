const data = {
    labels: [
      'Não Conforme',
      'Conforme'
    ],
    datasets: [{
      labels:[
        'Não Conforme',
        'Conforme'
      ],
      data: [18,72],
      backgroundColor: [
        'rgb(0,70,70)',
        'rgb(163,207,209)'
      ],
      hoverOffset: 4
    }]
  };

  const ctx = document.getElementById('piechart');
  new Chart (ctx, {
    type: 'pie',
    data: data,
    options: {
      plugins: {
          legend: {
              position: "bottom"
          }
        }
      }
  });

  const data2 = {
    labels: [
      'Nao Conforme',
      'Conforme',
      'Whatever'
    ],
    datasets: [{
      label: 'whatever',
      data: [18,72,90],
      backgroundColor: [
        'rgb(0,70,70)',
        'rgb(163,207,209)',
        'rgb(178,209,153)'
      ],
      hoverOffset: 4
    }]
  };

  const ctx2 = document.getElementById('bars');
  new Chart (ctx2, {
    type: 'bar',
    data: data2,
    options: {
      plugins: {
          legend: {
              display: false
          }
        }
      }
  });