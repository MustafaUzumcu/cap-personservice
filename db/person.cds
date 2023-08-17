entity Person {
    key Pernr : String(8);
    Bukrs : String(4);
    Vorna : String(25);
    Nachn : String(25);
    Land  : String(3);
    Telnr : String(14);
    NavCreateReturn: array of {};
}

type Delete : {
    Pernr : String(8);
};

type Create: {
    Pernr : String(8);
    Bukrs : String(4);
    Vorna : String(25);
    Nachn : String(25);
    Land  : String(3);
    Telnr : String(14);
    NavCreateReturn: array of {};
}