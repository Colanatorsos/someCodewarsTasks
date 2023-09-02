function justify(text: string, width: number): string {
    const words: string[] = text.split(' ');
    const lines: string[][] = [];
    let currentLine: string[] = [];
  
    for (const word of words) {
      if (currentLine.join('').length + word.length <= width) {
        currentLine.push(word);
      } else {
        lines.push(currentLine);
        currentLine = [word];
      }
    }
  
    lines.push(currentLine);
  
    const justifiedLines: string[] = lines.map((line, index) => {
      if (index === lines.length - 1) {
        return line.join(' ');
      } else {
        const totalSpaces: number = width - line.join('').length;
        const spacesBetweenWords: number = line.length - 1;
        const spacesPerWord: number = Math.floor(totalSpaces / spacesBetweenWords);
        const extraSpaces: number = totalSpaces % spacesBetweenWords;
  
        let justifiedLine: string = '';
        for (let i = 0; i < line.length; i++) {
          justifiedLine += line[i];
          if (i < line.length - 1) {
            justifiedLine += ' '.repeat(spacesPerWord + (i < extraSpaces ? 1 : 0));
          }
        }
  
        return justifiedLine;
      }
    });
  
    return justifiedLines.join('\n');
  }
  