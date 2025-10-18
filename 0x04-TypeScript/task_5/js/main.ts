// Task 11.1: MajorCredits and MinorCredits interfaces
interface MajorCredits {
  credits: number;
  _brand: 'major';
}

interface MinorCredits {
  credits: number;
  _brand: 'minor';
}

// Task 11.2: sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major'
  };
}

// Task 11.3: sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor'
  };
}

// Test cases
const major1: MajorCredits = { credits: 3, _brand: 'major' };
const major2: MajorCredits = { credits: 4, _brand: 'major' };
const minor1: MinorCredits = { credits: 2, _brand: 'minor' };
const minor2: MinorCredits = { credits: 1, _brand: 'minor' };

console.log(sumMajorCredits(major1, major2)); // Should output: { credits: 7, _brand: 'major' }
console.log(sumMinorCredits(minor1, minor2)); // Should output: { credits: 3, _brand: 'minor' }