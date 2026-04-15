//Några fejkbarn för att testa actionlistan, Ska och bör bara användas för att testa visuella Element! 

export interface child{
    name: string;
    attendance: boolean;
}

export const MockChildList: child[] = [
    {name: 'Johan Falk', attendance: false},
    {name: 'Peter Almark', attendance: true},
    {name: 'Anna Almark', attendance: true},
    {name: 'Ali Gormiti', attendance: false},
    {name: 'Kim Larsen', attendance: true},
    {name: 'Frank Hård', attendance: true},
    {name: 'Arne Alif', attendance: false},
]