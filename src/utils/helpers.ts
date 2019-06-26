import { AllHtmlEntities as Entities } from 'html-entities';

const entities = new Entities();

/**
 * Replaces entities to characters. Unknown entities are left as is.
 * @param {string} text     Text to decode.
 * @returns Text with entities converted to text.
 */
export const decodeWithEntities = (text: string): string => entities.decode(text);