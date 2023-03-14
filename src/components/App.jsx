import { useState } from 'react';
import { Section, FeedbackOptions, Notification, Statistics } from 'components';

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const setOption = option => option + 1;
    const leaveFeedback = option => {
        switch (option) {
            case 'good':
                setGood(setOption);
                break;
            case 'neutral':
                setNeutral(setOption);
                break;
            case 'bad':
                setBad(setOption);
                break;
            default:
                return;
        }
    };

    const total = good + neutral + bad;
    const positiveFeedbackPercentage = Math.round((good / total) * 100);
    const options = Object.keys({ good, neutral, bad });

    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={leaveFeedback}
                />
            </Section>

            <Section title="Statistics">
                {total > 0 ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positiveFeedbackPercentage}
                    />
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </Section>
        </>
    );
};

// export class App extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     };

//     leaveFeedback = key => {
//         this.setState(prevState => ({
//             [key]: prevState[key] + 1,
//         }));
//     };

//     countTotalFeedback = () => {
//         return this.state.good + this.state.neutral + this.state.bad;
//     };

//     countPositiveFeedbackPercentage = () => {
//         return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//     };

//     render() {
//         const { good, neutral, bad } = this.state;
//         const total = this.countTotalFeedback();
//         const positivePercentage = this.countPositiveFeedbackPercentage();
//         const options = Object.keys(this.state);

//         return (
//             <>
//                 <Section title="Please leave feedback">
//                     <FeedbackOptions
//                         options={options}
//                         onLeaveFeedback={this.leaveFeedback}
//                     />
//                 </Section>

//                 <Section title="Statistics">
//                     {total > 0 ? (
//                         <Statistics
//                             good={good}
//                             neutral={neutral}
//                             bad={bad}
//                             total={total}
//                             positivePercentage={positivePercentage}
//                         />
//                     ) : (
//                         <Notification message="There is no feedback" />
//                     )}
//                 </Section>
//             </>
//         );
//     }
// }
