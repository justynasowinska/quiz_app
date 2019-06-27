import { AllHtmlEntities as Entities } from 'html-entities';
import { DifficultlyType } from '../redux/types';
import { THEME_COLORS } from '../config/colors';

const entities = new Entities();

/**
 * Replaces entities to characters. Unknown entities are left as is.
 * @param {string} text     Text to decode.
 * @returns Text with entities converted to text.
 */
export const decodeWithEntities = (text: string): string => entities.decode(text);

/**
 * Gets color with regard to given difficulty level.
 * @param {DifficultlyType} difficulty  Difficulty level.
 * @returns Color for given difficulty.
 */
export const getDifficultyLevelColor = (difficulty: DifficultlyType): string => {
    switch (difficulty) {
        case 'easy':
            return THEME_COLORS.easyQuestionLevel;
        case 'medium':
            return THEME_COLORS.mediumQuestionLevel;
        case 'hard':
            return THEME_COLORS.hardQuestionLevel;
    }
};