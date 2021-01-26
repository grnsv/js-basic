let game = {
  run() {
    for (let i = 0; i < questions.length; i++) {
      let message = questions[i].ask;
      for (let key in questions[i].vars) {
        message += "\n" + key + ": " + questions[i].vars[key];
      }
      const answer = prompt(message);

      if (answer === null) {
        console.log("Игра окончена.");
        return;
      } else if (answer == questions[i].answer) {
        player.score++;
      }
    }

    console.log(`Ваш счёт: ${player.score}`);
    if ( confirm("Сыграть снова?") ) {
      player.score = 0;
      game.run();
    }
  },

  init() {
    console.log("Кто хочет стать миллионером?");
    game.run();
  }
};

game.init();