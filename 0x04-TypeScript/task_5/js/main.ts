interface MajorCredits {
    credits: number;
    brand: string;
}

interface MinorCredits {
    credits: number;
    brand: string;
}

function sumMajorCredits(subject1, subject2): MajorCredits {
    return subject1 + subject2;
}
function sumMinorCredits(subject1, subject2): MinorCredits {
    return subject1 + subject2;
}