import Chef from '../../assets/chef.png'
import Coffe from '../../assets/coffe.png'
import Coworking from '../../assets/coworking.png'
import Drinks from '../../assets/drink.png'
import Events from '../../assets/events.png'
import Pool from '../../assets/pool.png'

const dataCarousel = [
  {
    id: 1,
    name: 'Café da manhâ',
    description: 'Servido todos os dias com um buffet completo.',
    url: Coffe
  },
  {
    id: 2,
    name: 'Restaurante',
    description:
      'Temos um menu completo com diversos pratos, além de 5 cheffs renomados a disposição.',
    url: Chef
  },
  {
    id: 3,
    name: 'Bar',
    description:
      'Aberto 24 horas, com uma ampla variedade de drinks e aperitivos.',
    url: Drinks
  },
  {
    id: 4,
    name: 'Sala de Eventos',
    description:
      'Realize seu evento, espaço com capacidade para até 100 pessoas.',
    url: Events
  },
  {
    id: 5,
    name: 'Coworking',
    description:
      ' Estações de trabalhos que oferecem tomada, ponto de rede e impressora.',
    url: Coworking
  },
  {
    id: 6,
    name: 'Piscina',
    description: 'Piscina climatizada.',
    url: Pool
  }
]

export default dataCarousel
