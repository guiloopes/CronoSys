const scheduleForm = document.getElementById('scheduleForm');
scheduleForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const nomePet = document.getElementById('nomePet').value;
  const nomeDono = document.getElementById('nomeDono').value;
  const telefoneContato = document.getElementById('telefoneContato').value;
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  // Create service object
  const newService = {
    nomePet,
    nomeDono,
    telefoneContato,
    servico,
    data,
    hora
  };

  // Get existing services from localStorage or initialize empty array
  const services = JSON.parse(localStorage.getItem('scheduledServices') || '[]');

  // Add new service to array
  services.push(newService);

  // Save updated array back to localStorage
  localStorage.setItem('scheduledServices', JSON.stringify(services));

  alert('Serviço agendado com sucesso!');
  scheduleForm.reset();
});
