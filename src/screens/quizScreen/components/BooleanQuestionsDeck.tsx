import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Animated } from 'react-native';

import { QuizQuestionType, BooleanCorrectAnswerType } from '../../../redux/types';
import { QuestionCard } from './QuestionCard';
import { SWIPE_THRESHOLD, SWIPE_OUT_DURATION, ROTATE_CARD_DEG } from '../../../config/constants';
import { SCREEN_WIDTH } from '../../../utils/metrics';

interface PropsType {
    questions: ReadonlyArray<QuizQuestionType>;
    currentQuestionIndex: number;
    onUserAnswer: (questionIndex: number, answer: BooleanCorrectAnswerType) => void;
}

type SwipeDirectionType = 'right' | 'left';

export const BooleanQuestionsDeck = (props: PropsType) => {
    const [position] = useState(new Animated.ValueXY());

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_event, gesture) => {
            position.setValue({ x: gesture.dx, y: 0 });
        },
        onPanResponderRelease: (_event, gesture) => {
            if (gesture.dx > SWIPE_THRESHOLD) {
                forceSwipe('right');
            } else if (gesture.dx < -SWIPE_THRESHOLD) {
                forceSwipe('left');
            } else {
                resetPosition();
            }
        }
    });

    /**
     * Renders cards on deck. First card on the stack has panResponder callback attached.
     * To gain proper order we need to reverse array of cards, because cards are positioned absolute
     * and cover each other.
     */
    const renderCards = () => {
        const { questions, currentQuestionIndex } = props;

        return questions.map((question, index) => {
            if (index < currentQuestionIndex) {
                return null;
            }

            if (index === currentQuestionIndex) {
                return renderMoveableCard(question);
            }

            return renderNormalCard(question);
        }).reverse();
    };

    const renderMoveableCard = (question: QuizQuestionType) => (
        <Animated.View
            key={question.question}
            style={[getAnimatedCardStyle(), styles.cardStyle]}
            {...panResponder.panHandlers}
        >
            <QuestionCard
                question={question}
            />
        </Animated.View>
    );

    const renderNormalCard = (question: QuizQuestionType) => (
        <View
            key={question.question}
            style={styles.cardStyle}
        >
            <QuestionCard
                question={question}
            />
        </View>
    );

    const getAnimatedCardStyle = () => {
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: [`-${ROTATE_CARD_DEG}`, '0deg', ROTATE_CARD_DEG]
        });

        return {
            ...position.getLayout(),
            transform: [{
                rotate
            }]
        };
    };

    /**
     * Animates card out of the screen with given direction.
     * @param {SwipeDirectionType} direction  Direction in which card will be swiped off the screen.
     */
    const forceSwipe = (direction: SwipeDirectionType) => {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

        Animated.timing(position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION
        }).start(() => onSwipeComplete(direction));
    };

    const onSwipeComplete = (direction: SwipeDirectionType) => {
        const { onUserAnswer, currentQuestionIndex } = props;
        direction === 'right' ? onUserAnswer(currentQuestionIndex, 'True') : onUserAnswer(currentQuestionIndex, 'False');

        position.setValue({ x: 0, y: 0 });
    };

    const resetPosition = () => {
        Animated.spring(position, {
            toValue: { x: 0, y: 0 }
        }).start();
    };

    return (
        <View style={styles.container}>
            {renderCards()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        aspectRatio: 1
    },
    cardStyle: {
        position: 'absolute'
    }
});