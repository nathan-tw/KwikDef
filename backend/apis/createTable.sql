CREATE TABLE static_prediction (
    md5 text NOT NULL,
    malicious real NOT NULL,
    size real NOT NULL,
    number_of_section integer,
    imported_apis text[],
    dlls text[],
    gray_scale integer[][]
);


    adware double precision,
    Backdoor double precision,
    BrowserModifier double precision,
    Others double precision,
    PUA double precision,
    PWS double precision,
    Ransom double precision,
    Rogue double precision,
    SoftwareBundler double precision,
    Trojan double precision,
    TrojanDownloader double precision,
    TrojanDropper double precision,
    TrojanSpy double precision,
    VirTool double precision,
    Virus double precision,
    Worm double precision,
    Allaple double precision,
    Dinwod double precision,
    Gamarue double precision,
    Ludbaruma double precision,
    Mira double precision,
    Parite double precision,
    Ramnit double precision,
    Sality double precision,
    Shodi double precision,
    Upatre double precision,
    VB double precision,
    Virut double precision,
    Vobfus double precision,
    Wacatac double precision,
    Yuner double precision,


insert into static_prediction
values (
    'dsfasfa',
    0.1234,
    23.4,
    4,
    '{"adsfjifo", "gaewgw", "gohtr"}',
    '{"adsfjifo", "gaewgw", "gohtr"}',
    '{{1, 3, 4}, {23, 4, 5}}'
);

CREATE TABLE test (
    md5 text NOT NULL,
    dlls integer[][]
);


insert into static_prediction
values (
    'dsfasfa',
    0.1,
    23.4,
    4,
    '{"faowlijf", "faewjl", "sadff"}',
    '{"faowlijf", "faewjl", "safojofeiaf"}',
    '{{1, 3, 4}, {23, 4, 5}}'
);