angular
  .module('angularDirectives')
  .controller('mainController', mainController);

function mainController () {
  var controller = this;

  controller.people = [
    {
      name: 'Niall',
      level: 37,
      gender: 'male',
      position: 'Instructor',
      skills: ['eating', 'being awesome', 'sleeping']
    },
    {
      name: 'Matt',
      level: 99,
      gender: 'male',
      position: 'Instructor',
      skills: ['Extreme Ping Pong', 'Angular']
    },
    {
      name: 'Lexie',
      level: 21,
      gender: 'female',
      position: 'Academy Manlevelr',
      skills: ['keeping the wheel spinning', 'life', 'knitting', 'dancing']
    },
    {
      name: 'Steve',
      level: 6,
      gender: 'male',
      position: 'Instructor/Education Author',
      skills: ['Banter', 'life', 'keeping people motivated']
    }
  ];
}
