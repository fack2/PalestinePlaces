BEGIN;

DROP TABLE IF EXISTS place CASCADE;
DROP TABLE IF EXISTS city CASCADE;

CREATE TABLE city (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);


INSERT INTO city (name) VALUES 
    ('bethlehem'),('hebron'),('jericho'),('akka'),('jerusalem'),('nablus');
    

CREATE TABLE place (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    photo TEXT NOT NULL,
    cityID INT REFERENCES city(id), 
    sort VARCHAR NOT NULL,
    description TEXT NOT NULL
);


INSERT INTO place (name, photo, cityID, sort, description) VALUES
    (
        'The Mar Saba Monastery','https://i2.wp.com/www.wefindyougo.com/wp-content/uploads/2014/01/The-Mar-Saba-Monastery-Judean-desert.jpg?w=1024&ssl=1','1','religious','The Palestinian countryside is getting popular day by day to the tourists. This dessert is perfect for hiking and biking lovers. You can grab a car and take a trip through the Mar Saba, the camels and cluster buildings are there to add some extra fascination to your trip. Mar Saba is also important to the Christians as Jesus, Elijah, and other Christian monks. This place was named by the person Mar Saba, who lived in the desert alone and found a spring and built the cluster caves.'),
    (
        'Ibrahemi Mosque','https://i2.wp.com/www.wefindyougo.com/wp-content/uploads/2014/01/Hebron-souk-Hebron.jpg?w=1024&ssl=1','2','religious','Abraham Mosque is the fourth holiest place for Muslims. The Abraham’s Mosque is known as Al-Haram Al-Ibrahim. According to Arabian legend, the huge stone of the walls is set up by the Prophet Solomon (pbuh). He made this with the help of the genies. The walls stand without any mortar. The Prophet (S) came to this al-Haram al- Ibrahim by the night flight from Mecca to Jerusalem.'),
        (
        'Hisham’s Palace','https://i0.wp.com/www.wefindyougo.com/wp-content/uploads/2014/01/Belameh-Jenin.jpg?resize=1024%2C706&ssl=1','3','historical','This city of Jericho is much different than the other parts of the west bank. There are garden restaurants at the summer time for the rest of the tourists and these restaurants got warped into the indoor restaurant during the winter. It’s all about the comfort of the customers. The Hisham’s Palace is one of the most spectacular spots in the entire Jerico. This is an ancient palace. The curved stonework reminds the royalty and uniqueness of the palace. The palace was ruined in an earthquake but still spreads its glory with the existence.'
    ),
    (
        'Khan El- Umdan','https://i1.wp.com/www.wefindyougo.com/wp-content/uploads/2014/01/Khan-El-Umdan-Akka.jpg?w=750&ssl=1','4','historical','Khan El- Umdan is also known as the Khan-I-Avamid. It symbolizes the Ottoman-era. This place is well reserved and one of the Most beautiful places in Palestine territories. It is contributing a lot to the Palestinian tourism. This place was designed in 2001 as a world’s heritage site. There is a clock tower at the main entrance of the Khan El- Umdan. It is a part of the Palestinian and Israel territories at a time. Now the clock tower has got the place on the Israel stamp.'
    ),
    (
        'The church of the Nativity','https://i0.wp.com/www.wefindyougo.com/wp-content/uploads/2014/01/The-church-of-the-Nativity-Bethlehem.jpg?w=580&ssl=1','1','religious','Bethlehem is one of the Most beautiful places in Palestine cities. This city is small but it is at the top of Christian religious significance. This is the birthplace of Jesus and many people come on a tour of Bethlehem because of this reason. They take it as their life-changing tour and closer to their God. The Church of Nativity is one of the visited and oldest churches in the world.  It symbolizes the Christian respect. The people, who visit Bethlehem, must visit this place.'
    ),
    (
        'Al-Aqsa Mosque','https://gopalestine.org/wp-content/uploads/2016/02/Jarusalm-9.jpg','5','religious','Jerusalem has the third holiest site for all Muslims in the world.  This is the Al-aqsa Mosque or “the Farthest Mosque” which is located in the Old City of Jerusalem.Jews also sanctify the same place, and they claim that the mosque is built on the rubble of the Prophet Solomon’s Temple. Many of the extremist Jewish organizations used this argument to re-build the temple, as they believed it was in earlier times.'
    ),
    (
        'The Dom of the rock','https://gopalestine.org/wp-content/uploads/2016/12/dome_of_the_rock13235570190061-1.jpg','5','religious','The Dom of the rock is an octagonal building having four doors. It is part of Al-Aqsa Mosque and one of the holiest places for Muslims.It is the only ancient Islamic building that is preserved its shape and decoration.  The name of the place comes from the Muslim belief that Muhammad was transported using the rock inside from the Sacred Mosque in Mecca, Saudi Arabia to al-Aqsa during the Night Journey. This rock rises one meter and a half from the earth’s surface.'
    ),
    (
        'Old City in Nablus','https://gopalestine.org/wp-content/uploads/2016/02/Nablus-3.jpg','6','historical','The Old City in Nablus has important sites going back from the 1st to 15th centuries. The Old City includes six major quarters: Yasmina; Gharb; Qaryun; Aqaba; Qaysariyya; and Habala. These quarters all have historical sites. In addition, the Old City has six hamaams (Turkish baths). Al-Shifa Hamaam was built 1624, and Al Hana Hamaam, located in the Yasmina quarter, was built in the 19th century.In the old city you will find shops that produce the olive oil soap and some agricultural products such as cheese and thyme. As well there is one of the most old, famous and delicious sweet shops in Palestine that offers knafeh, which is the most famous oriental sweet in the Levant.'
    ),
    (
        'Old city in Hebron','https://gopalestine.org/wp-content/uploads/2016/02/Hebron-6.jpg','2','historical','Hebron’s old City is located adjacent to the Ibrahimi Mosque. The place is about winding alleys; old houses; shops, and markets which make it worth visiting.  Unfortunately Israeli Authorities have shut down large parts of it and deploy Israeli troops to protect the presence of the Jews who seek to control the real estate in that area.'
    );
       

COMMIT;