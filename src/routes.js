function load (component) {
  return () =>
    import(`./app/${component.toLowerCase()}/${component}.vue`)
}

export default [{
  path: '/',
  component: load('Home'),
  title: 'Home',
  icon: 'home',
  subtitle: 'Tela inicial'
},
{
  path: '/docs',
  component: load('Annotation'),
  title: 'Anotações',
  icon: 'school',
  subtitle: 'Espaço para anotações'
},
{
  path: '/kanban',
  component: load('Kanban'),
  title: 'Kanban',
  icon: 'check circle',
  subtitle: 'Controle de tarefas'
},
{
  path: '/kanban/form',
  component: load('Kanban')
}
]
