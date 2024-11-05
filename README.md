# Sistema de Hotel
## Sistema desenvolvido por: Gabriella, Luis Magno, Maycon Thiago e Núbia 


## Pousada Talento Cloud

### Trata-se de um site para uma pousada (destino turístico) para a divulgação e apresentação das acomodações, serviços, espaços comuns, história, avaliação de outros hóspedes com o objetivo de facilitar a reserva, contato e aproximação dos potenciais clientes à empresa.

## Requisitos Funcionais:
>
1.	Seção de Apresentação da Pousada - exibir informações gerais sobre a pousada, sua história e diferenciais.
2.	Seção de Acomodações - apresentar fotos e descrições das acomodações disponíveis (quartos, suítes, chalés etc.), preços, disponibilidade e detalhes específicos de cada uma.
3.	Seção de Serviços e Espaços Comuns - serviços oferecidos, como café da manhã, restaurante, piscina, atividades recreativas, spa etc com fotos.
4.	Seção de Avaliações e Depoimentos de Hóspedes - exibir avaliações e depoimentos de clientes anteriores e permitir que usuários autenticados deixem suas próprias avaliações.
5.	Sistema de Reservas Online - facilitar a escolha de datas, tipo de acomodação e quantidade de pessoas, calcular e exibir o valor total da reserva, permitir que o usuário confirme a reserva com seus dados e realize o pagamento online e enviar confirmação de reserva por e-mail ao cliente.
6.	Formulário de Contato (Fale conosco) - incluir formulário para o usuário enviar mensagens diretamente para a pousada e exibir informações de contato (telefone, e-mail, WhatsApp) e localização com mapa integrado.
7.	Área de Perguntas Frequentes (FAQ) - incluir perguntas e respostas comuns sobre reservas, políticas de cancelamento, check-in/check-out etc.
8.	Links para Redes Sociais - incluir links para redes sociais (Instagram, Facebook, Twitter etc.), incentivando o acompanhamento e interação.

## Requisitos Não Funcionais:
>
>1.	Desempenho e Velocidade de Carregamento - o site deve carregar em até 3 segundos para garantir uma boa experiência do usuário, otimização de imagens e outros recursos visuais para evitar lentidão e modal para aumentar a imagem.
2.	Design Responsivo - o site deve ser adaptável a diferentes dispositivos e tamanhos de tela (computadores, tablets e smartphones).
3.	Segurança - implementar SSL/TLS para garantir que todas as páginas sejam carregadas via HTTPS, armazenamento seguro de dados pessoais e informações de pagamento dos clientes e proteção contra ataques comuns, como SQL Injection e Cross-Site Scripting (XSS).
4.	Usabilidade e Navegabilidade - navegação intuitiva, com menus claros e fácil acesso às principais informações e garantia de acessibilidade para todos os usuários, incluindo opções para pessoas com deficiência.
5.	Escalabilidade - o site deve ser capaz de lidar com um aumento no número de usuários sem perder desempenho e o sistema de backend e banco de dados será escalável para manter a performance.
6.	Compatibilidade entre Navegadores - deve garantir que o site funcione corretamente nos principais navegadores (Chrome, Firefox, Safari, Edge).
7.	Conformidade com a LGPD (Lei Geral de Proteção de Dados) - o site deve garantir a privacidade e a proteção dos dados dos usuários e deverá incluir opções de consentimento de cookies e política de privacidade acessível.

Esses requisitos ajudam a garantir que o site funcione como esperado, atraindo e retendo visitantes, e convertendo-os em hóspedes com uma experiência de navegação segura e agradável.


### Estrutura de Arquivos

````plaintext
hotel/
├── public/
│   ├── index.html           # Página inicial com descrição do hotel
│   ├── login.html           # Login do sistema
│   ├── cadastro.html        # Cadastro do hóspede
│   ├── pagReserva.html        # Página da reserva
|   ├── asset/
|   ├──────── css/
│   ├──────── style.css            # Estilos para a página
|   ├──────── js/
│   ├──────── script.js            # Estilos para a página
|   └──────── img/
````

### Telas do sistema:
Figma: https://www.figma.com/design/VsGuIt7BT4RmH7Pntqfkjg/Pousada-Talento-Cloud-e-Camping?node-id=0-1&node-type=canvas&t=I7eXfnFw1YUthbAo-0

<div align="center">
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/Xz7dBFY/Captura-de-tela-2024-10-30-190347.png" alt="Captura-de-tela-2024-10-30-190347" border="0"></a>
<div>

