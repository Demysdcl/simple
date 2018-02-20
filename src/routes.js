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
  path: '/todo',
  component: load('Todo'),
  title: 'Todo',
  icon: 'school',
  subtitle: 'Controle de tarefas'
}
]
