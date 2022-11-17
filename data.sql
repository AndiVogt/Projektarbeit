CREATE TABLE mytable(
   Name            VARCHAR(12) NOT NULL PRIMARY KEY
  ,Anzahl_Beine    INTEGER  NOT NULL
  ,Extremitäten    VARCHAR(10) NOT NULL
  ,Körperbedeckung VARCHAR(12) NOT NULL
  ,Element         VARCHAR(11) NOT NULL
  ,Ernährung       VARCHAR(8) NOT NULL
  ,Art             VARCHAR(11) NOT NULL
  ,Aktiv           VARCHAR(9) NOT NULL
  ,Gewicht         NUMERIC(5,3)
);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Fledermaus',2,'Flügelbein','Fell','Luft','Alles','Säuger','Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Hund',4,'Beine','Fell','Land','Alles','Säuger','Tag',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Katze',4,'Beine','Fell','Land','Fleisch','Säuger','Tag/Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Pferd',4,'Beine','Fell','Land','Pflanzen','Säuger','Tag',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Schwein',4,'Beine','Fell','Land','Alles','Säuger','Tag',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Mensch',2,'Beine','Haut','Land','Alles','Säuger','Tag',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Wal',0,'Flossen','Haut','Wasser','Fleisch','Säuger','Tag/Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Maus',4,'Beine','Fell','Land','Alles','Säuger','Tag/Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Hai',0,'Flossen','Haut','Wasser','Fleisch','Fisch','Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Seepferdchen',0,'Flossen','Haut','Wasser','Fleisch','Fisch','Tag',0.015);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Rochen',0,'Flossen','Haut','Wasser','Fleisch','Fisch','Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Muräne',0,'Keine','Haut','Wasser','Fleisch','Fisch','Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Frosch',4,'Beine','Haut','Land/Wasser','Fleisch','Lurch','Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Eidechse',4,'Beine','Haut','Land/Wasser','Fleisch','Lurch','Tag',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Krokodil',4,'Beine','Schuppen','Land/Wasser','Fleisch','Kriechtiere','Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Schlange',0,'Keine','Schuppen','Land/Wasser','Fleisch','Kriechtiere','Tag/Nacht',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Fliege',6,'Flügelbein','Chitinpanzer','Land','Alles','Insekten','Tag',NULL);
INSERT INTO mytable(Name,Anzahl_Beine,Extremitäten,Körperbedeckung,Element,Ernährung,Art,Aktiv,Gewicht) VALUES ('Papagei',2,'Flügelbein','Federn','Land','Alles','Vogel','Tag',NULL);
