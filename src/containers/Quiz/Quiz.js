import React, {Component} from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'При движении на легковом автомобиле, оборудованном ремнями безопасности, кто должен быть пристегнут ?',
                id: 1,
                rightAnswerId: 3,
                answers: [
                    {text: 'Только водитель', id: 1},
                    {text: 'Водитель и пассажир на переднем сиденье', id: 2},
                    {text: 'Все лица, находящиеся в автомобиле', id: 3},
                    {text: 'Только мой кот', id: 4}
                ]
            },
            {
                question: 'Какой город изображен на современной российской купюре 1000 рублей ?',
                id: 2,
                rightAnswerId: 3,
                answers: [
                    {text: 'Хабаровск', id: 1},
                    {text: 'Москва', id: 2},
                    {text: 'Ярославль', id: 3},
                    {text: 'Омск', id: 4}
                ]
            },
            {
                question: 'Оперу "Борис Годунов" написал...',
                id: 3,
                rightAnswerId: 4,
                answers: [
                    {text: 'Николай Римский-Корсаков', id: 1},
                    {text: 'Михаил Глинка', id: 2},
                    {text: 'Петр Чайковский', id: 3},
                    {text: 'Модест Мусоргский', id: 4}
                ]
            },
            {
                question: 'Как эскимосы приветствуют друг друга ?',
                id: 4,
                rightAnswerId: 2,
                answers: [
                    {text: 'Прижимаются кончиком носа к носу другого и трутся', id: 1},
                    {text: 'Прижимают нос ко лбу или щекам другого и вдыхают воздух', id: 2},
                    {text: 'Прижимаются щекой ко лбу другого и трутся', id: 3},
                    {text: 'Пожимают друг другу руки, как и любые другие люди', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={ this.state.quiz[this.state.activeQuestion].answers }
                        question={ this.state.quiz[this.state.activeQuestion].question }
                        onAnswerClick={ this.onAnswerClickHandler }
                        quizLength={ this.state.quiz.length }
                        activeNumber={ this.state.activeQuestion + 1 }
                    />
                </div>
            </div>
        )
    }
}

export default Quiz