Package.describe({
  summary: 'Meteorite package for adding handwritten script fonts to Meteor apps (not cursive fonts).',
  version: '1.0.3',
  name: 'awatson1978:fonts-handwritten',
  git: 'http://github.com/awatson1978/fonts-handwritten.git'
});

Package.on_use(function (api) {
    api.addFiles('fonts/ChalkDust.ttf', 'client');
    api.addFiles('fonts/Freehand.ttf', 'client');
    api.addFiles('fonts/HarabaraHand.ttf', 'client');
    api.addFiles('fonts/ItAintRocketScience.ttf', 'client');
    api.addFiles('fonts/ShelterMe.ttf', 'client');
    api.addFiles('fonts/WildScript.ttf', 'client');
    api.addFiles('fonts/Windsong.ttf', 'client');
    api.addFiles('fonts-handwritten.css', 'client');
});
