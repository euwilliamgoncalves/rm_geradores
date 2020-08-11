const servicesList = [
    {id: 0, name: 'Manutenção', icon: '<i class="icofont-wrench"></i>', image: './assets/img/services/maintenance.jpg', description: 'Realizamos manutenções preventiva, corretiva e preditiva em grupos geradores e nobreak, assegurando o bom estado e prolongando a vida útil dos seus geradores e nobreaks.<br><br>As manutenções podem ser realizadas de forma avulsa, medianta orçamento, ou dentro de um contrato de manutenção. Entre em contato e descubra como podemos ajudar sua empresa.'},
    {id: 1, name: 'Contrato', icon: '<i class="icofont-tools-bag"></i>', image: './assets/img/services/contract.jpg', description: 'Nos contratos de manutenção, disponibilizamos nossa equipe para atendimentos emergencias, 24 horas por dia, 7 dias por semana.<br><br>Como opcional, oferecemos reposição de peças para os equipamentos atendidos no contrato. Todos os contratos incluem mão-de-obra, preventivas agendadas, além dos atendimentos emergenciais, com SLA ajustável.'},
    {id: 2, name: 'Venda', icon: '<i class="icofont-truck-loaded"></i>', image: './assets/img/services/sale.jpg', description: 'Fornecemos grupos geradores para operação em sala técnica ou cabinados, para operação externa, com baixo nível de ruído e emissão de gases, além de nobreaks para diversas aplicações.<br><br>Nossas soluções possuem diversas configurações e potências e o usuário ainda pode optar por equipamentos movidos a diesel ou gás natural. Os motores funcionam em operação stand by, contínua ou base loads, assim como paralelo com a rede elétrica'},
    {id: 3, name: 'Projeto e Instalação', icon: '<i class="icofont-tools-1"></i>', image: './assets/img/services/installation.jpg', description: 'Além de fornecermos os equipamentos, damos todo o suporte necessário para construção e instalação de toda infraestrutura e instalações referentes aos equipamento de energia.<br><br>Com esse suporte, sua empresa garante o melhor custo-benefício para atender sua necessidade, bem como toda a infra necessária para receber os novos equipamentos.'},
    {id: 4, name: 'Operação Assistida', icon: '<i class="icofont-workers-group"></i>', image: './assets/img/services/operation.jpg', description: 'Nas operações críticas, oferecemos o serviço de operação assistida junto ao equipamento do cliente, em que o técnico permanecerá no local durante todo o período necessário, para cobrir eventuais intercorrências.<br><br>Com isso, garantimos que qualquer problema possa ser resolvido de maneira mais rápida, para que você não tenha períodos de indisponibilidade.'},
    {id: 5, name: 'Locação', icon: '<i class="icofont-energy-oil"></i>', image: './assets/img/services/tenancy.jpeg', description: 'Fornecemos soluções temporárias de geração de energia com a rapidez que você precisa e no período em que precisar.<br><br>Nossa equipe técnica é altamente competente e experiente, garantindo todas as etapas do processo de locação, desde a logística, até a instalação, manutenção e operação dos equipamentos alugados.'},
];

const contactsList = [
    {id: 0, href: 'tel:+5521965514734', icon: '<i class="icofont-phone"></i>', text: '021 96551 4734'},
    {id: 1, href: 'mailto:rickmota156@gmail.com', icon: '<i class="icofont-email"></i>', text: 'E-mail'},
    {id: 2, href: 'https://wa.me/5521965514734', icon: '<i class="icofont-whatsapp"></i>', text: 'Fale pelo WhatsApp'},
];

const headerTitle = document.querySelector('.header-title h1');
const headerText = document.querySelector ('.header-title p');
const servicesSelector = document.querySelector('#services .services-selection');
const serviceContent = document.querySelector('#services .services-content');
const contactImage = document.querySelector('#contact .contact-image');
const contactContent = document.querySelector('#contact .contact-content');

headerTitle.innerHTML += 'Energia em todo momento';
headerText.innerHTML += 'A RM Geradores é especialista em manutenção de grupo gerador e nobreak, garantindo a seus clientes um serviço de qualidade incontestável, através de sua equipe técnica altamente qualificada';

servicesList.map(service => {
    servicesSelector.innerHTML += `
    <a class="service-option" onClick="populateService(${service.id})">
        ${service.icon}
        <p>${service.name}</p>
    </a>
    `;
});

function populateService(key) {
    serviceContent.innerHTML = `
        <div class="services-content-text">
            <h1>${servicesList[key].icon} ${servicesList[key].name}</h1>
            <p>${servicesList[key].description}</p>
        </div>    
        <div class="services-content-image">
            <img src="${servicesList[key].image}" alt="${servicesList[key].name} de Grupo Gerador e Nobreak">
        </div>
    `
};

populateService(0);

contactImage.innerHTML += `<img src="./assets/img/contact.jpg" alt="">`;

contactContent.innerHTML += `<h1>Entre em contato!</h1>`;

contactsList.map(contact => {
    contactContent.innerHTML += `<a href="${contact.href}" class="contact-button">${contact.icon}${contact.text}</a>`;
});