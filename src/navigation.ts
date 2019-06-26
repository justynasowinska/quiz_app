import { createSwitchNavigator } from 'react-navigation';

import { HomeScreenConnected } from './screens/homeScreen/HomeScreen';
import { QuizScreenConnected } from './screens/quizScreen/QuizScreen';
import { ResultsScreenConnected } from './screens/resultsScreen/ResultsScreen';

export const AppNavigation = createSwitchNavigator(
    {
        HomeScreen: HomeScreenConnected,
        QuizScreen: QuizScreenConnected,
        ResultsScreen: ResultsScreenConnected
    },
    {
        initialRouteName: 'QuizScreen',
        backBehavior: 'none'
    }
);