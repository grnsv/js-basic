let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        let nextPosition = {
            x: player.x,
            y: player.y,
            up: function() {
                if (this.y > 0) this.y--;
            },
            left: function() {
                if (this.x > 0) this.x--;
            },
            right: function() {
                if ( this.x < (config.colsCount - 1) ) this.x++;
            },
            down: function() {
                if ( this.y < (config.rowsCount - 1) ) this.y++;
            }
        };

        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 1:
                nextPosition.left();
                nextPosition.down();
                break;
            case 2:
                nextPosition.down();
                break;
            case 3:
                nextPosition.right();
                nextPosition.down();
                break;
            case 4:
                nextPosition.left();
                break;
            case 6:
                nextPosition.right();
                break;
            case 7:
                nextPosition.left();
                nextPosition.up();
                break;
            case 8:
                nextPosition.up();
                break;
            case 9:
                nextPosition.right();
                nextPosition.up();
                break;
        }

        return nextPosition;
    },
};