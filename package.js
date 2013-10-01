Package.describe({
  summary: "Meteorite package for adding handwritten script fonts to Meteor apps (not cursive fonts)."
});

Package.on_use(function (api) {
    api.add_files('fonts/ChalkDust.ttf', "client");
    api.add_files('fonts/Freehand.ttf', "client");
    api.add_files('fonts/HarabaraHand.ttf', "client");
    api.add_files('fonts/ItAintRocketScience.ttf', "client");
    api.add_files('fonts/ShelterMe.ttf', "client");
    api.add_files('fonts/WildScript.ttf', "client");
    api.add_files('fonts/Windsong.ttf', "client");
    api.add_files('fonts-handwritten.css', "client");
});
