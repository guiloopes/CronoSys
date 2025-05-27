const serviceList = document.getElementById('serviceList');
const noServices = document.getElementById('noServices');

function getServices() {
  return JSON.parse(localStorage.getItem('scheduledServices') || '[]');
}

function displayServices() {
  const services = getServices();
  serviceList.innerHTML = '';
  if (services.length === 0) {
    noServices.style.display = 'block';
    return;
  } else {
    noServices.style.display = 'none';
  }

  services.forEach((service, index) => {
    const li = document.createElement('li');

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'service-details';
    detailsDiv.innerHTML = `
      <div><strong>Nome do Pet:</strong> ${service.nomePet}</div>
      <div><strong>Nome do Dono:</strong> ${service.nomeDono}</div>
      <div><strong>Telefone:</strong> ${service.telefoneContato}</div>
      <div><strong>Serviço:</strong> ${service.servico}</div>
      <div><strong>Data:</strong> ${service.data}</div>
      <div><strong>Hora:</strong> ${service.hora}</div>
    `;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Excluir';
    deleteBtn.onclick = () => {
      deleteService(index);
    };

    li.appendChild(detailsDiv);
    li.appendChild(deleteBtn);
    serviceList.appendChild(li);
  });
}

function deleteService(index) {
  const services = getServices();
  services.splice(index, 1);
  localStorage.setItem('scheduledServices', JSON.stringify(services));
  displayServices();
}

displayServices();
