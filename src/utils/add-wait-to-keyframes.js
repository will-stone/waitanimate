function roundToThreeDecimals(num) {
  return +(Math.round(num + 'e+3') + 'e-3')
}

export function addWaitToKeyframes(keyframes, duration, waitTime) {
  const asArray = keyframes
    // Remove whitespace from start and end
    .trim()
    // Split by frame
    .split('}')
    // Remove empty array items
    .filter(Boolean)
    // Remove all whitespace from frame, including line breaks
    .map((s) => s.replace(/\s/gu, ''))
    // Put closing frame bracket back
    .map((s) => s + '}')
    // Split frame percentage and properties
    .map((s) => ({
      // Get number before opening frame and strip non-numeric
      frame: Number(s.split('%')[0]),
      properties: s.match(/\{(.*)\}/u)[1],
    }))

  return (
    [
      ...asArray.map((f) => ({
        // Reduce frame percentages to accomodate wait and duration
        frame: roundToThreeDecimals(
          (f.frame * duration) / (duration + waitTime),
        ),
        properties: f.properties,
      })),
      // Extend last frame to end to simulate the wait time
      {
        frame: 100,
        properties: asArray[asArray.length - 1].properties,
      },
    ]
      // Turn back into string
      .map((f) => {
        const parsedProperties = f.properties
          // Separate properties
          .split(';')
          // Add lines breaks between properties and indent
          .join(';\n    ')
          // Add space between property name and value
          .replace(/:/gu, ': ')
          // Remove line break added from the join
          .trim()
        return `  ${f.frame}% {\n    ${parsedProperties}\n  }`
      })
      // Add line break between frames
      .join('\n')
  )
}
