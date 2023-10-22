/**
 * @param {number} number
 * @returns number
 */
function roundToThreeDecimals(number) {
  return Number(`${Math.round(Number(`${number}e+3`))}e-3`)
}

/**
 * @param {string} keyframes
 * @param {string} duration
 * @param {string} waitTime
 * @returns
 */
export function addWaitToKeyframes(keyframes, duration, waitTime) {
  try {
    const asArray = keyframes
      // Remove whitespace from start and end
      .trim()
      // Split by frame
      .split('}')
      // Remove empty array items
      .filter(Boolean)
      // Remove all whitespace from frame, including line breaks
      .map((s) => s.replaceAll(/\s/gu, ''))
      // Put closing frame bracket back
      .map((s) => `${s}}`)
      // Split frame percentage and properties
      .map((s) => {
        // Get number before opening frame and strip percentage
        const frameValue = s.split('{')[0].trim().replace('%', '')
        // Parse to numeric
        let frame = Number(frameValue)

        if (frameValue === 'from') {
          frame = 0
        } else if (frameValue === 'to') {
          frame = 100
        }

        return {
          frame,
          properties: s.match(/\{(.*)\}/u)?.[1],
        }
      })

    return (
      [
        ...asArray.map((f) => ({
          // Reduce frame percentages to accommodate wait and duration
          frame: roundToThreeDecimals(
            (f.frame * Number(duration)) /
              (Number(duration) + Number(waitTime)),
          ),
          properties: f.properties,
        })),
        // Extend last frame to end to simulate the wait time
        {
          frame: 100,
          properties: asArray.at(-1)?.properties,
        },
      ]
        // Turn back into string
        .map((f) => {
          const parsedProperties = f.properties
            // Separate properties
            ?.split(';')
            // Add lines breaks between properties and indent
            .join(';\n    ')
            // Add space between property name and value
            .replaceAll(':', ': ')
            // Remove line break added from the join
            .trim()

          return `  ${f.frame}% {\n    ${parsedProperties}\n  }`
        })
        // Add line break between frames
        .join('\n')
    )
  } catch {
    return '  ERROR: Unable to parse keyframes, please try again.'
  }
}
