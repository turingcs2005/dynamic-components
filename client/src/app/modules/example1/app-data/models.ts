export class MathCompetitor {
    constructor(
        public school: string = '',
        public grade: number= 0,
        public name: string = '',
        public ranking: number = 0
    ) {}
}

export const competitors: MathCompetitor[] = [
    new MathCompetitor('Sharon Middle School', 8, 'Joe', 1),
    new MathCompetitor('Canton Middle School', 6, 'Claire', 1),
    new MathCompetitor('Mansfield Middle School', 7, 'Karen', 1),
];

